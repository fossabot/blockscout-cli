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
/**
 *
 * @export
 * @interface ReadMethodQueryBody
 */
export interface ReadMethodQueryBody {
  /**
   *
   * @type {Array}
   * @memberof ReadMethodQueryBody
   */
  args: Array<any>
  /**
   *
   * @type {string}
   * @memberof ReadMethodQueryBody
   */
  methodId: string
  /**
   *
   * @type {string}
   * @memberof ReadMethodQueryBody
   */
  from?: string
  /**
   *
   * @type {string}
   * @memberof ReadMethodQueryBody
   */
  contractType?: string
}
