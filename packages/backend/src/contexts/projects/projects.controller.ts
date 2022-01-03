import {IProject} from '@personal/common'
import {Request, Response} from 'express'
import ProjectsDataAccess from './projects.data-access'
import {ProjectUseCases} from './projects.use-cases'

const projectUseCases = new ProjectUseCases(new ProjectsDataAccess())
async function getProjectsController(req: Request, res: Response) {
  const projects = await projectUseCases.getProjects()
  res.json({
    ok: true,
    projects,
  })
}

async function getProjectController(req: Request, res: Response) {
  const project = await projectUseCases.getProject(req.params.name)
  res.json({
    ok: true,
    project,
  })
}

async function saveProjectController(req: Request, res: Response) {
  const data = req.body as IProject

  if (!data.name) {
    return res.json({ok: false, error: 'name not provided'})
  }

  if (
    !data.images ||
    typeof data.images !== 'object' ||
    Object.keys(data.images).length === 0 ||
    !Object.keys(data.images).every((key) => !!data.images[key])
  ) {
    return res.json({ok: false, error: 'img not provided'})
  }

  if (
    !data.lang ||
    typeof data.lang !== 'object' ||
    Object.keys(data.lang).length === 0 ||
    !Object.keys(data.lang).every((key) => {
      if (data.lang[key]) {
        return (
          !!data.lang[key].name ||
          !!data.lang[key].summary ||
          !!data.lang[key].text
        )
      }
    })
  ) {
    return res.json({
      ok: false,
      error: 'error in the text translations, a field is not being provided',
    })
  }

  const response = await projectUseCases.createProject(req.body)

  res.json({
    ok: true,
    project: response,
  })
}

export {getProjectsController, getProjectController, saveProjectController}
