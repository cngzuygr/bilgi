import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const classicFontSize = windowWidth / 22;
export default StyleSheet.create({
	view: {
		backgroundColor: "brown",
		flexDirection: "column",
		flex: 1,
	},
	viewBilgi: { height: windowHeight / 2 },
	textBilgi: {
		fontFamily: "Yellowtail",
		fontSize: windowWidth / 4,
		marginTop: windowHeight / 8,
		color: "lightblue",
		alignSelf: "center",
		justifyContent: "center",
		width: windowWidth / 2,
		textAlign: "center",
	},
	textSlogan: {
		fontFamily: "Poppins",
		fontSize: classicFontSize,
		color: "lightblue",
		alignSelf: "center",
		width: windowWidth / 2,
		textAlign: "center",
	},
	componentsView: { height: "100%" },
	inputViewEmail: {
		height: windowHeight / 10,
		width: (windowWidth * 3) / 4,
		backgroundColor: "lightblue",
		borderRadius: 20,
		alignSelf: "center",
	},
	inputViewPassword: {
		height: windowHeight / 10,
		width: (windowWidth * 3) / 4,
		backgroundColor: "lightblue",
		borderRadius: 20,
		alignSelf: "center",
		marginTop: (windowHeight * 2.5) / 100,
	},
	inputEmail: {
		fontFamily: "Poppins",
		color: "brown",
		fontSize: classicFontSize,
		alignSelf: "center",
		height: "100%",
		width: (windowWidth * 72) / 100,
		alignItems: "center",
		flexDirection: "row",
	},
	inputPassword: {
		fontFamily: "Poppins",
		color: "brown",
		fontSize: classicFontSize,
		alignSelf: "center",
		height: "100%",
		width: (windowWidth * 72) / 100,
		alignItems: "center",
		flexDirection: "row",
	},
	viewForgotPassword: {
		alignSelf: "center",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	forgotPassword: {
		alignSelf: "center",
		padding: windowHeight / 30,
		fontFamily: "Poppins",
		fontSize: classicFontSize,
		color: "lightblue",
	},
	loginButton: {
		width: (windowWidth * 60) / 100,
		height: windowHeight / 10,
		backgroundColor: "lightblue",
		borderRadius: 7,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	textLoginButton: {
		fontFamily: "Poppins",
		fontSize: classicFontSize,
		color: "brown",
	},
});
