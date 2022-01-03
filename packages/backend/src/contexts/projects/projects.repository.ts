import {IProject} from './projects.entity'

interface ProjectsRepository {
  getAllProjects(): Promise<IProject[]>
  getByName(name: string): Promise<IProject>
  createProject(project: IProject): Promise<IProject>
}

export default ProjectsRepository
