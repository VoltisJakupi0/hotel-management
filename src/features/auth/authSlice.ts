import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RoleNames, User } from './models/auth.model'

export const authFeatureName = 'auth'

export interface AuthState {
  user: User | null
}

const initialState: AuthState = {
  user: null
}

export const READONLY_ROLES: RoleNames[] = [RoleNames.KanbanViewer]

const auth = createSlice({
  name: authFeatureName,
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    }
  }
})

export const { setAuthUser } = auth.actions

export default auth.reducer
