import { StyleSheet } from "react-native";
import { useTheme } from "@providers/ThemeProvider";
import { ITheme } from "@helpers/types";

export const useThemedStyles = (getStyles: (theme: ITheme) => any) => {
	const { theme } = useTheme();

	return StyleSheet.create(getStyles(theme));
};
