export abstract class RestObject {

  public id: string;

  public abstract fill(raw: any): void;

}