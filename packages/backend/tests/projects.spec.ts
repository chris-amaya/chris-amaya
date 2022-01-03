import {IProject} from '@personal/common'
import {MongoTestHandler} from './db-handler'
import ProjectsDataAccess from '../src/contexts/projects/projects.data-access'
import {ProjectUseCases} from '../src/contexts/projects/projects.use-cases'

describe('Tests on Projects', () => {
  let projectUseCases: ProjectUseCases

  /**
   * Connect to a new in-memory database before running any tests.
   */
  const mongod = new MongoTestHandler()
  beforeAll(async () => {
    mongod.connect()
    projectUseCases = new ProjectUseCases(new ProjectsDataAccess())
  })

  /**
   * Clear all test data after every test.
   */
  // afterEach(async () => await mongod.clearDatabase())

  /**
   * Remove and close the db and server.
   */
  afterAll(async () => await mongod.closeDatabase())

  const project1: IProject = {
    name: 'Test Project',
    caseStudy: true,
    github: 'test',
    images: {
      hero: 'test',
      home: 'test',
    },
    lang: {
      en: {
        name: 'Test Project',
        summary: 'Test Project',
        text: 'Test Project',
      },
      es: {
        name: 'Test Project 2',
        summary: 'Test Project 2',
        text: 'Test Project 2',
      },
    },
    link: 'test',
  }

  test('should create a project', async () => {
    const response = await projectUseCases.createProject(project1)

    expect(response).toBeDefined()
    expect(response).toMatchObject(project1)
  })

  test('should return 1 item', async () => {
    const projects = await projectUseCases.getProjects()

    expect(projects.length).toBe(1)
    expect(projects[0]).toMatchObject(project1)
  })

  test('should get only 1 project by its name', async () => {
    const newProjectName = 'new test'
    await projectUseCases.createProject(Object.assign(project1, { name: newProjectName,
    }))

    const project = await projectUseCases.getProject(project1.name)
    expect(project.name).toBe(project1.name)

    const project2 = await projectUseCases.getProject(newProjectName)
    expect(project2.name).toBe(newProjectName)
  })
})
