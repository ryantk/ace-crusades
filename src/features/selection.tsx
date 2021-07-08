import { createAction, createReducer, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store";

export const selectSquadMember = createAction<number>('squadMember/select');

const selectSquadMemberReducer = createReducer(0, (builder) => {
  builder.addCase(selectSquadMember, (state, action) => action.payload)
})

export const getSelectedSquadMember = (state: RootState) => state.squadMemberSelection; 

export default selectSquadMemberReducer;
