export enum ActionTypes {
  ADD_QUERY = 'recents/ADD_QUERY'
}

export interface AddQueryAction {
  type: ActionTypes.ADD_QUERY
  payload: any
}

export function addQuery(query: object): AddQueryAction {
  return {
    type: ActionTypes.ADD_QUERY,
    payload: query
  }
}

