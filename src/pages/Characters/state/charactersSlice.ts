import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CharacterState {
	characters: Array<any>;
	character: {};
}

const initialState: CharacterState = {
	characters: [],
	character: {},
};

export const charactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
		deleteCharacter: (state: CharacterState, action: PayloadAction<string>) => {
			const id = action.payload;
			const newState = state.characters.filter(
				(character) => character.id !== id
			);
			state.characters = newState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { deleteCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
