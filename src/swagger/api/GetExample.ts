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

import { GetResponseExample, InvalidRequestErrorExample } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class GetExample<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description GET example
   *
   * @name GetExample
   * @request GET:/get-example
   */
  getExample = (params: RequestParams = {}) =>
    this.request<GetResponseExample, InvalidRequestErrorExample>({
      path: `/get-example`,
      method: "GET",
      format: "json",
      ...params,
    });
}
