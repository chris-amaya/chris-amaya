import {saveProjectController} from '../src/contexts/projects/projects.controller'
import {mockRequest, mockResponse} from './util/interceptor'

describe('Tests on project controller', () => {
  let req
  let res
  beforeAll(() => {
    req = mockRequest()
    res = mockResponse()
  })

  afterEach(() => {
    req.body = {}
    jest.clearAllMocks()
  })

  test('should response error name not provided', async () => {
    req.body = {}
    await saveProjectController(req, res)

    expect(res.json.mock.calls[0][0].error).toMatch(/name not provided/)
  })

  test('should response error img not provided 1', async () => {
    req.body = {
      name: 'project 1',
      images: 'asdfasdf',
    }

    await saveProjectController(req, res)
    expect(res.json.mock.calls[0][0].error).toMatch(/img not provided/)
  })

  test('should response error img not provided 2', async () => {
    req.body = {
      name: 'project 1',
      images: {},
    }

    await saveProjectController(req, res)
    expect(res.json.mock.calls[0][0].error).toMatch(/img not provided/)
  })

  test('should response error img not provided 3', async () => {
    req.body = {
      name: 'project 1',
      images: {
        home: '',
      },
    }

    await saveProjectController(req, res)
    expect(res.json.mock.calls[0][0].error).toMatch(/img not provided/)
  })

  test('should response error img not provided 4', async () => {
    req.body = {
      name: 'project 1',
      images: {
        home: '',
        hero: '',
      },
    }

    await saveProjectController(req, res)
    expect(res.json.mock.calls[0][0].error).toMatch(/img not provided/)
  })

  test('should response error in text translations', async () => {
    req.body = {
      name: 'project 1',
      images: {
        home: 'test',
        hero: 'test',
      },
    }

    await saveProjectController(req, res)
    expect(res.json.mock.calls[0][0].error).toMatch(
      /error in the text translations/,
    )
  })

  test('should response error due lang is not being provided 1', async () => {
    req.body = {
      name: 'project 1',
      images: {
        home: 'test',
        hero: 'test',
      },
      lang: {},
    }

    await saveProjectController(req, res)
    expect(res.json.mock.calls[0][0].error).toMatch(
      /error in the text translations/,
    )
  })

  test('should response error due lang is not being provided 2', async () => {
    req.body = {
      name: 'project 1',
      images: {
        home: 'test',
        hero: 'test',
      },
      lang: {
        en: undefined,
      },
    }

    await saveProjectController(req, res)
    expect(res.json.mock.calls[0][0].error).toMatch(
      /error in the text translations/,
    )
  })
  test('should response error due lang is not being provided 3', async () => {
    req.body = {
      name: 'project 1',
      images: {
        home: 'test',
        hero: 'test',
      },
      lang: {
        en: {},
      },
    }

    await saveProjectController(req, res)
    expect(res.json.mock.calls[0][0].error).toMatch(
      /error in the text translations/,
    )
  })
  test('should response error due not all keys are being provided in lang', async () => {
    req.body = {
      name: 'project 1',
      images: {
        home: 'test',
        hero: 'test',
      },
      lang: {
        en: {
          name: '',
        },
      },
    }

    await saveProjectController(req, res)
    expect(res.json.mock.calls[0][0].error).toMatch(
      /error in the text translations/,
    )
  })
})
