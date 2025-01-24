import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  department: "",
  cgpa: 0,
};
export const formSlice = createSlice({
  name: "suvrodeb",
  initialState,
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addDepartment: (state, action) => {
      state.department = action.payload;
    },
    addCGPA: (state, action) => {
      state.cgpa = action.payload;
    },
  },
});

export const { addName, addDepartment, addCGPA } = formSlice.actions;
export default formSlice.reducer;
