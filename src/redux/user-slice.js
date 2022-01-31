import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [],
  isAuth:false
}

export const userSlice = createSlice({
  name: 'user',
 initialState,
  reducers: {
    setUser: (state,action) => {
      state.user =action.payload;
      state.isAuth=true
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser,setTypeActeur} = userSlice.actions;

export default userSlice.reducer