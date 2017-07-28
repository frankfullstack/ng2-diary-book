import * as friendsActions from '../actions/friends';
import { Friend } from '../models/friend';


export interface State {
  friends: Friend[];
  pendingInvites: Friend[];
  rejectedInvites: Friend[];
  pendingOutcomeInvites: Friend[];
}

export const initialState: State = {
  friends: [],
  pendingInvites: [],
  rejectedInvites: [],
  pendingOutcomeInvites: [],
};

export function reducer(state = initialState, action: friendsActions.Actions): State {
  switch (action.type) {
    case friendsActions.GET_PENDING_INVITES_SUCCESS: {
      return {
        ...state,
        pendingInvites: action.payload.map((invite: any) => ({
          email: invite.from,
          name: 'some name'
        }))
      };
    }

    case friendsActions.GET_FRIENDS_SUCCESS: {
      return {
        ...state,
        friends: action.payload.map((invite: any) => ({
          email: invite.from,
          name: 'some name'
        }))
      };
    }

    case friendsActions.GET_REJECTED_INVITES_SUCCESS: {
      return {
        ...state,
        rejectedInvites: action.payload.map((invite: any) => ({
          email: invite.from,
          name: 'some name'
        }))
      };
    }

    case friendsActions.GET_OUTCOME_PENDING_INVITES_SUCCESS: {
      return {
        ...state,
        pendingOutcomeInvites: action.payload.map((invite: any) => ({
          email: invite.to,
          name: 'some name'
        }))
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getFriends = (state: State) => state.friends;
export const getPendingInvites = (state: State) => state.pendingInvites;
export const getPendingOutcomeInvites = (state: State) => state.pendingOutcomeInvites;
export const getRejectedInvites = (state: State) => state.rejectedInvites;