import {IProject} from '@personal/common'
import ProjectsRepository from './projects.repository'

export class ProjectUseCases {
  constructor(private projectsRepository: ProjectsRepository) {}

  public getProjects = (): Promise<IProject[]> => {
    return this.projectsRepository.getAllProjects()
  }

  public getProject = (name: string): Promise<IProject> => {
    return this.projectsRepository.getByName(name)
  }

  public createProject = (project: IProject): Promise<IProject> => {
    return this.projectsRepository.createProject(project)
  }
}
