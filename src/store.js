import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/features/user/userSlice";
import jobSlice from "./features/job/jobSlice";
import allJobsSlice from "./features/allJobs/allJobsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});

export default store;
