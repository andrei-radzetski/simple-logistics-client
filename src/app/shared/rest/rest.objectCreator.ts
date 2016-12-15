import { RestObject } from './rest.object';

export interface RestObjectCreator<T extends RestObject> {

  create(): T;

}