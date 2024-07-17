export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export function fetchUsers() {
  return { type: FETCH_USERS };
}

export function fetchUsersSuccess(users) {
  return { type: FETCH_USERS_SUCCESS, payload: users };
}

export function fetchUsersFail() {
  return { type: FETCH_USERS_FAIL };
}
