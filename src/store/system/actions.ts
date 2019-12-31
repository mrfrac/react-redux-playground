import { SystemState, SystemActionTypes, UPDATE_SESSION } from "./types";

export function updateSessionAction(newSession: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  };
}