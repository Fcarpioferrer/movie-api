export enum State {
  LOADING = "LOADING",
  FINISHED = "FINISHED",
  REJECTED = "REJECTED",
  IDLE = "IDLE"
}

export class States {
  getAll: State = State.IDLE;
  update: State = State.IDLE;
  delete: State = State.IDLE;
  get: State = State.IDLE;
  create: State = State.IDLE;

  toJson?: any = () => {
    return {
      getAll: State.IDLE,
      update: State.IDLE,
      delete: State.IDLE,
      get: State.IDLE,
      create: State.IDLE,
    }
  }
}

export type statesType = "getAll" | "delete" | "update" | "get" | "create";

