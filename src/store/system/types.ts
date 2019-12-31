export const UPDATE_SESSION = "UPDATE_SESSION";

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION,
  payload: SystemState;
}

export interface SystemState {
  loggedIn: boolean
  session: string
  userName: string
}

export type SystemActionTypes = UpdateSessionAction;
