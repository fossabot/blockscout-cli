/* tslint:disable */
/* eslint-disable */
/**
 * BlockScout API
 *
 * API for BlockScout web app
 *
 * OpenAPI spec version: 1.0.0
 * Contact: aaop3734@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DecodedInputLogParameter } from './decoded-input-log-parameter'
/**
 *
 * @export
 * @interface DecodedInputLog
 */
export interface DecodedInputLog {
  /**
   *
   * @type {string}
   * @memberof DecodedInputLog
   */
  methodCall: string
  /**
   *
   * @type {string}
   * @memberof DecodedInputLog
   */
  methodId: string
  /**
   *
   * @type {Array<DecodedInputLogParameter>}
   * @memberof DecodedInputLog
   */
  parameters: Array<DecodedInputLogParameter>
}
