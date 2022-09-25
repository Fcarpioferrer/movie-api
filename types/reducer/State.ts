export enum State {
  LOADING = "LOADING",
  FINISHED = "FINISHED",
  REJECTED = "REJECTED",
  IDLE = "IDLE"
}

export enum StateType {
  GET_ALL = "getAll",
  GET = "get",
  CREATE = "create",
  DELETE = "delete",
  UPDATE = "update",
  OTHER = "other",
}

export class States {
  getAll: State = State.IDLE;
  update: State = State.IDLE;
  delete: State = State.IDLE;
  get: State = State.IDLE;
  create: State = State.IDLE;
  other: State = State.IDLE;

  toJson?: any = () => {
    return {
      getAll: State.IDLE,
      update: State.IDLE,
      delete: State.IDLE,
      get: State.IDLE,
      create: State.IDLE,
      other: State.IDLE,
    }
  }
}


