import "react-native-gesture-handler";
import { Platform, StyleSheet, Text } from "react-native";
import CustomProvider from "./providers";
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { RootNavigator } from "@navigators/RootNavigator";

export default function App() {
	useEffect(() => {
		if (Platform.OS !== "web") {
			ScreenOrientation.lockAsync(
				ScreenOrientation.OrientationLock.PORTRAIT_UP
			);
		}
	}, []);

	return (
		<CustomProvider>
			<RootNavigator />
		</CustomProvider>
	);
}
