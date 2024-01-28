import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useLanguage } from "@providers/LocalizationProvider";
import { LANGUAGES } from "@helpers/constants";
import { translate } from "@helpers/localization";
import { ITheme } from "@helpers/types";
import { useThemedStyles } from "@hooks/useThemedStyles";
import { useTheme } from "@providers/ThemeProvider";

export const Home = () => {
	const { changeLanguage } = useLanguage();
	const { toggleTheme } = useTheme();
	const themedStyles = useThemedStyles(styles);
	return (
		<>
			<View style={themedStyles.container}>
				<Text style={themedStyles.fontStyle}>{translate("dummyText")}</Text>
				<Button
					title="change to english"
					onPress={() => changeLanguage(LANGUAGES.english)}
				/>
				<Button
					title="change to turkish"
					onPress={() => changeLanguage(LANGUAGES.turkish)}
				/>
				<Button title="toggle theme" onPress={toggleTheme} />
			</View>
		</>
	);
};

const styles = (theme: ITheme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.primary,
			alignItems: "center",
			justifyContent: "center",
		},
		fontStyle: {
			fontFamily: "SemiBold",
			fontSize: 36,
			color: theme.secondary,
			textAlign: "center",
		},
	});
