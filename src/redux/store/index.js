import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../../pages/Characters/state/charactersSlice";

export default configureStore({
	reducer: {
		character: characterReducer,
	},
});
