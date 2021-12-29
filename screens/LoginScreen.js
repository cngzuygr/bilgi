import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import styles from "../assets/styles/LoginScreenStyles";
import { auth } from "../firebase";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

const WelcomeScreen = ({ navigation }) => {
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("HomeScreen");
			}
		});
		return unsubscribe;
	}, []);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let [fontsLoaded] = useFonts({
		Yellowtail: require("../assets/fonts/Yellowtail-Regular.ttf"),
		Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
		PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
	});

	const signIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.catch((error) => alert(error));
	};

	if (!fontsLoaded) {
		return (
			<View style={{ backgroundColor: "red" }}>
				<Text>sa</Text>
			</View>
		);
	} else {
		return (
			<KeyboardAvoidingView enabled behavior={"position"} style={styles.view}>
				<StatusBar />
				<View style={styles.viewBilgi}>
					<Text style={styles.textBilgi}>bilgi</Text>
					<Text style={styles.textSlogan}>araştır kazan</Text>
				</View>
				<View style={styles.componentsView}>
					<View style={styles.inputViewEmail}>
						<TextInput
							placeholder={"E-posta veya telefon numarası"}
							placeholderTextColor={"brown"}
							selectionColor={"white"}
							style={styles.inputEmail}
							value={email}
							onChangeText={(text) => setEmail(text)}
						></TextInput>
					</View>
					<View style={styles.inputViewPassword}>
						<TextInput
							placeholder={"Şifre"}
							maxLength={16}
							placeholderTextColor={"brown"}
							selectionColor={"white"}
							style={styles.inputPassword}
							value={password}
							onSubmitEditing={signIn}
							onChangeText={(text) => setPassword(text)}
						></TextInput>
					</View>
					<TouchableOpacity style={styles.viewForgotPassword}>
						<Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginButton} onPress={signIn}>
						<Text style={styles.textLoginButton}>Giriş Yap</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		);
	}
};

export default WelcomeScreen;
