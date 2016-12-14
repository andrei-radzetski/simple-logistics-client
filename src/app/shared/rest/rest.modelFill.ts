import { RestModel } from '../rest/rest.model'

export interface RestModelFill extends RestModel {

  fill(object: any): void;

}