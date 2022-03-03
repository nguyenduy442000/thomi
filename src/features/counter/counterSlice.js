import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
  extraReducers: () => {

  },
});

export const {  } = counterSlice.actions;
;
export default counterSlice.reducer;
