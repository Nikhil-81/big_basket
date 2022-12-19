import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService, registerService } from "./authService";

let initialState = {
  users: [],
  user: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    try {
      return await registerService(user);
    } catch (error) {
      console.log("error: ", error);
      thunkApi.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await loginService();
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = false;
    },
  },
  extraReducer: (builder) => {
    builder
      .addcase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addcase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addcase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addcase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addcase(login.fulfilled, (state,action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload
      }).addcase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload
      })
  },
});
export const { reset } = authslice.actions;
export default authslice.reducer;
