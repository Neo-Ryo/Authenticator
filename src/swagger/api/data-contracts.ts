/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface GetResponseExample {
  foo?: { bar?: string; baz?: number; grault?: boolean };
  qux?: string[];
  quux?: (string | number)[];
  corge?: { bla?: string; blabla?: string }[];
}

export interface ServiceStatus {
  code: number;
  message: string;
}

export interface ServerError {
  statusCode: number;
  message: string;
}

export interface InvalidRequestErrorExample {
  statusCode: number;
  message: string;
}