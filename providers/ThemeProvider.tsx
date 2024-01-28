import DarkTheme from "@assets/theme/DarkTheme";
import LightTheme from "@assets/theme/LightTheme";
import { THEME } from "@helpers/constants";
import { ITheme, Props } from "@helpers/types";
import React, { useContext, useState } from "react";

interface IThemeContextProps {
	theme: ITheme;
	toggleTheme: () => void;
}

const ThemeContext = React.createContext<IThemeContextProps | undefined>(
	undefined
);

export const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<string>(THEME.light);

	const toggleTheme = () => {
		if (theme === THEME.light) {
			setTheme(THEME.dark);
		} else {
			setTheme(THEME.light);
		}
	};

	return (
		<ThemeContext.Provider
			value={{
				theme: theme === THEME.light ? LightTheme : DarkTheme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
};
