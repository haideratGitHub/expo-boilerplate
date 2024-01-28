import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ITheme } from "@helpers/types";
import { useThemedStyles } from "@hooks/useThemedStyles";

export const Profile = () => {
	const themedStyles = useThemedStyles(styles);
	return (
		<View style={themedStyles.container}>
			<Text style={themedStyles.fontStyle}>Profile</Text>
		</View>
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
		},
	});
