// import { configureStore } from "@redux"
import { createSlice, configureStore } from "../src/reduxjs/tools/store";

const initialState: {
  board: string[];
  boardSize: number;
} = {
  board: [],
  boardSize: 8,
};

const candyLandSlice = createSlice({
  name: "candyLand",
  initialState,
  reducers: {}
  },
);

export const store = configureStore({
    reducer: {
        candyLand : candyLandSlice.reducer, 
    
    },
});

export type RootState = ReturnType < typeof store.getState>;