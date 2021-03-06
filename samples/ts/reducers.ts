import { Reducer } from "redux";

import { defaultState } from "stores/default-state";
import { CLEAR_$3, GET_$3_SUCCESS } from "constants/action-types";
import { IClear$2ActionType } from "actions/$1/clear$2.action";
import { IGet$2SuccessActionType } from "actions/$1/get$2.action";
import { get$2Success } from "reducers/$1/get$2.reducer";

/*
    TODO:
        - Fill names:
            1: resource
            2: ResourceActionTypes
            3: CLEAR_RESOURCE
 */

export const $1: Reducer<I$2StoreType | undefined> = (
  state = defaultState.$1,
  action: $2ActionTypes
): I$2StoreType => {
  switch (action.type) {
    case CLEAR_$3:
      return defaultState.$1;
    case GET_$3_SUCCESS:
      return get$2Success(action);
    default:
      return state;
  }
};

export type $2ActionTypes = IClear$2ActionType | IGet$2SuccessActionType;
