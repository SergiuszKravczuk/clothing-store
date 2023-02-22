import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSucsses = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCSSES, user);

export const signInFailure = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSucsses = (user, additionsDetails) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCSSES, { user, additionsDetails });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutSucsses = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCSSES);

export const signOutFailed = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED);

export const signOutStart = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START, error);
