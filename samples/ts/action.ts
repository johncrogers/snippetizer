import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";

import { networkActions } from "actions/network.actions";
import { $2, $2_SUCCESS, $2_FAILURE } from "constants/action-types";
import { $3Services } from "services/$3.services";

/*
    TODO:
        - Fill names:
            1: actionGenerator
            2: ACTION_TAG
            3: resource
            4: ActionTag
        - Specify any types
 */

export function $1(payload: I$4PayloadType): I$4ActionType {
  return { type: $2, payload };
}
export function $1Success(
  payload: I$4SuccessPayloadType
): I$4SuccessActionType {
  return { type: $2_SUCCESS, payload };
}
export function $1Failure(): I$4FailureActionType {
  return { type: $2_FAILURE };
}

export function* $1Worker(action: I$4ActionType) {
  try {
    const requestOptions = yield call($3Services.$1, action.payload);
    const response = yield call(
      networkActions.makeAuthenticatedRequest,
      requestOptions
    );
    yield put($1Success(response));
  } catch (error) {
    yield put($1Failure());
  }
}
export function* $1SuccessWorker(action: I$4FailureActionType) {
  toast.success(`Success!`);
}
export function* $1FailureWorker() {
  toast.error(`Failure!`);
}

export interface I$4ActionType {
  type: typeof $2;
  payload: I$4PayloadType;
}
export interface I$4PayloadType {
  key: any;
}
export interface I$4SuccessActionType {
  type: typeof $2_SUCCESS;
  payload: any;
}
export interface I$4SuccessPayloadType {
  key: any;
}
export interface I$4FailureActionType {
  type: typeof $2_FAILURE;
}
