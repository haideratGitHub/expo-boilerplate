import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Details } from "@views/Home/Details";
import { Home } from "@views/Home/Home";

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				component={Home}
				name="Home"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				component={Details}
				name="Details"
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};
