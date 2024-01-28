import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import UrbanistFont from "@assets/fonts";
import * as Font from "expo-font";
import { View } from "react-native";
import { Props } from "@helpers/types";

SplashScreen.preventAutoHideAsync();

export const LoadingProvider = ({ children }: Props) => {
	const [appIsReady, setAppIsReady] = useState<boolean>(false);

	const preloadAssets = async () => {
		try {
			await Font.loadAsync(UrbanistFont);
		} finally {
			setAppIsReady(true);
			SplashScreen.hideAsync();
		}
	};

	useEffect(() => {
		preloadAssets();
	}, []);

	if (!appIsReady) return null;
	return <>{children}</>;
};
