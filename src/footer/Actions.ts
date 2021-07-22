/*
import { original, produce } from "immer";

const baseState = { users: [{ name: "Richie" }] };
const nextState = produce(baseState, (draftState) => {
  original(draftState.users); // is === baseState.users
});

import { merge } from 'lodash';

const API = createSlice({
  name: 'API',
  initialState: initialState(),
  reducers: {
    fetchResources: (draft, { payload }: FetchAction) => {
      const state = original(draft) as ApiState;
      return {
        ...state,
        objects: merge(
          {},
          state.objects,
          normalize(payload.response, normalizeOpts)
        ),
      };
    },
  }
};)
*/
