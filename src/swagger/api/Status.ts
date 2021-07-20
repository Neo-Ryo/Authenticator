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

import { ServerError, ServiceStatus } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Status<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get service status
   *
   * @name Status
   * @summary Check the status of the service
   * @request GET:/status
   */
  status = (data: { status?: ServiceStatus }, params: RequestParams = {}) =>
    this.request<ServerError, ServerError>({
      path: `/status`,
      method: "GET",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
