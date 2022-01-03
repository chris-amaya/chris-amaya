import {IProject} from '@personal/common'
import ProjectsRepository from './projects.repository'
import ProjectsModel from './projects.model'

class ProjectsDataAccess implements ProjectsRepository {
  async getAllProjects(): Promise<IProject[]> {
    return (await ProjectsModel.find()) as unknown as IProject[]
  }

  async getByName(name: string): Promise<IProject> {
    return (await ProjectsModel.findOne({name})) as unknown as IProject
  }

  async createProject(project: IProject): Promise<IProject> {
    const newProject = new ProjectsModel(project)
    return await newProject.save()
  }
}

export default ProjectsDataAccess
