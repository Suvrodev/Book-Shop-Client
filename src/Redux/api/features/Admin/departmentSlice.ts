import { TDepartments } from "./../../../utils/Type/Type";
import { createSlice } from "@reduxjs/toolkit";

interface DepartmentState {
  departments: TDepartments[];
}

const initialState: DepartmentState = {
  departments: [],
};
const departmentSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    manageDepartment: (state) => {
      console.log("In Department Slice: ", state.departments);
    },
    setDepatment: (state, action) => {
      state.departments.push(action.payload);
    },
  },
});

export const { manageDepartment, setDepatment } = departmentSlice.actions;
export default departmentSlice.reducer;
