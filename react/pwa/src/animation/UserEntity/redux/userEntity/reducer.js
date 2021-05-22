import { createReducer } from "@reduxjs/toolkit";
import {
  updateFingerprint
} from "./actions";

export const userEntitySlice = {
  fingerprint: null,
};

const userEntity = createReducer(userEntitySlice, {

  [updateFingerprint]: (state, action) => {
    console.log('updateFingerprint', action.fingerprint)
    state.fingerprint= action.fingerprint;
    return state;
  },

});

export { userEntity };
