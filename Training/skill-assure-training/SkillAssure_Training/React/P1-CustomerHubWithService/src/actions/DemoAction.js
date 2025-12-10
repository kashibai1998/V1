// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createAction } from 'redux-actions';

import { ActionTypes } from '../constants/ActionConstants';

export const demoAction  = createAction(
  ActionTypes.DEMO_ACTION_REQ,
  (name) => {return {
      name
  }}
);

/*
  old style
*/

// export const demoAction1 = (name) => {
//     return { type: ActionTypes.DEMO_ACTION_REQ, payload: { name } };
// }