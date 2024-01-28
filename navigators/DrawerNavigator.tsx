import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { SafeAreaView, Text } from "react-native";

const Drawer = createDrawerNavigator();

const drawerContents = () => (
	<SafeAreaView>
		<Text>Side Menu Contents</Text>
	</SafeAreaView>
);

export const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName="MainDrawer"
			screenOptions={{ headerShown: false }}
			drawerContent={drawerContents}
		>
			<Drawer.Screen name="MainDrawer" component={TabNavigator} />
		</Drawer.Navigator>
	);
};
