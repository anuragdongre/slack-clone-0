import {  createSlice } from '@reduxjs/toolkit';


// const initialState = {
  
//   roomId: null
// };




export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state, action) => {
      
      state.roomId = action.payload.roomId;
    },
   
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
 
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;



export default appSlice.reducer;
