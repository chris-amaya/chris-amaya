import {Request, Response} from 'express'
import ProjectsDataAccess from './projects.data-access'
import {ProjectUseCases} from './projects.use-cases'

const projectUseCases = new ProjectUseCases(new ProjectsDataAccess())
async function getProjectsController(
  req: Request,
  res: Response,
): Promise<any> {
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

export {getProjectsController, getProjectController}
