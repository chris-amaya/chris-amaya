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
  afterEach(async () => await mongod.clearDatabase())

  /**
   * Remove and close the db and server.
   */
  afterAll(async () => await mongod.closeDatabase())

  test('should create a project', async () => {
    const project: IProject = {
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

    const response = await projectUseCases.createProject(project)

    expect(response).toBeDefined()
    expect(response).toMatchObject(project)
  })
})
