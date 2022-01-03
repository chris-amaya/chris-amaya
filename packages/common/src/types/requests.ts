import {IProject} from '.'

import {Send, Query} from 'express-serve-static-core'

export interface TypedRequestBody<T> extends Express.Request {
  body: T
}

export interface TypedRequestQuery<T extends Query> extends Express.Request {
  query: T
}

export interface TypedRequest<T extends Query, U> extends Express.Request {
  body: U
  query: T
}

export interface TypedResponse<ResBody> extends Express.Response {
  json: Send<ResBody, this>
}

export interface IRequest {
  ok: boolean
  message?: string
}

export interface IResponseProject extends IRequest {
  project: IProject
}
