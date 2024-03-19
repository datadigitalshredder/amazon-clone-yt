import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { User as FirebaseUser } from 'firebase/auth';

// Define a type for the slice state
interface UserType {
  user: null | FirebaseUser
}

// Define the initial state using that type
const initialState: UserType = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signInToAccount: (state) => {
      state.value += 1
    },
    signOutFromAccount: (state) => {
      state.value -= 1
    },
  },
})

export const { signInToAccount, signOutFromAccount } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer