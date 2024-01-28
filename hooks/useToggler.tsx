import { useState } from "react";

export const useToggler = (initialState = false) => {
	const [state, setState] = useState(initialState);

	const toggle = () => {
		setState((prevState) => !prevState);
	};

	return [state, toggle];
};
