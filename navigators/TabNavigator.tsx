import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "./HomeNavigator";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@providers/ThemeProvider";
import { Profile } from "@views/Profile/Profile";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
	const { theme } = useTheme();
	return (
		<Tab.Navigator
			screenOptions={() => ({
				tabBarStyle: {
					backgroundColor: theme.primary,
					borderTopWidth: 0,
				},
			})}
		>
			<Tab.Screen
				name="HomeTab"
				component={HomeNavigator}
				options={{
					title: "",
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						return (
							<AntDesign
								name="home"
								size={24}
								color={focused ? "orange" : "gray"}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="ProfileTab"
				component={Profile}
				options={{
					title: "",
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						return (
							<AntDesign
								name="profile"
								size={24}
								color={focused ? "orange" : "gray"}
							/>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigator;
