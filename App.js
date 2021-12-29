import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator initialRouteName={WelcomeScreen}>
			<Stack.Screen
				name="WelcomeScreen"
				options={{ headerShown: false }}
				component={WelcomeScreen}
			/>
			<Stack.Screen
				name="LoginScreen"
				options={{ headerShown: false }}
				component={LoginScreen}
			/>
			<Stack.Screen
				name="RegisterScreen"
				options={{ headerShown: false }}
				component={RegisterScreen}
			/>
			<Stack.Screen
				name="SettingsScreen"
				options={{ headerShown: false }}
				component={SettingsScreen}
			/>
			<Stack.Screen
				name="HomeScreen"
				options={{ headerShown: true }}
				component={HomeScreen}
			/>
			<Stack.Screen
				name="ProfileScreen"
				options={{ headerShown: true }}
				component={ProfileScreen}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}
