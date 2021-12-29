import React, { useEffect, useLayoutEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	Alert,
	Modal,
	ScrollView,
	SafeAreaView,
	ImageBackground,
	TextInput,
	Keyboard,
	TouchableWithoutFeedback,
	ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { auth, db } from "../../firebase";
import { LinearGradient } from "expo-linear-gradient";
import Clues from "./Clues";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			backgroundColor: "brown",
			headerTitleAlign: "center",
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "brown",
			},
			headerTitle: () => (
				<View
					style={{
						justifyContent: "center",
						width: 100,
						alignContent: "center",
					}}
				>
					<TouchableOpacity>
						<Text style={styles.headerTitle}>bilgi</Text>
					</TouchableOpacity>
				</View>
			),
			headerRight: () => (
				<View style={{ flexDirection: "row" }}>
					<TouchableOpacity
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginRight: 10,
							borderRadius: 5,
						}}
						onPress={() => navigation.navigate("ProfileScreen")}
					>
						<AntDesign name="user" size={32} color="lightblue" />
					</TouchableOpacity>
				</View>
			),
		});
	});
	const [currentDate, setCurrentDate] = useState(
		new Date().toLocaleDateString("tr-TR") +
			" " +
			new Date().toLocaleTimeString("tr-TR")
	);
	const [inputCevap, setInputCevap] = useState("");
	const [countModal, setCountModal] = useState(false);
	const [buttonPress, setbuttonPress] = useState(true);

	const [game, setGame] = useState();

	const onPressSubmit = () => {
		inputCevap.toLowerCase().includes(`${game.answer}`.toLowerCase()) ||
		inputCevap.toLowerCase().includes(`${game.alternativeAnswer}`.toLowerCase())
			? setModaldb()
			: Alert.alert("", "Cevap Yanlış Tekrar deneyin");
		setbuttonPress(false);
	};

	const setModaldb = async () => {
		await db
			.collection("games")
			.doc("h4gLaI7iu2vvXSv4Fhwt")
			.update({
				modalSit: true,
				winnerName: auth?.currentUser?.displayName,
				winnerUid: auth?.currentUser?.uid,
				winnerPhotoUrl: auth?.currentUser?.photoURL,
				winnerTime: currentDate,
			})
			.then(setCountModal(true))
			.catch((error) => alert(error));
	};

	const getData = async () => {
		let dbData = (
			await db.collection("games").doc("h4gLaI7iu2vvXSv4Fhwt").get()
		).data();
		setGame(dbData);
		setCountModal(dbData.modalSit);
	};

	useEffect(
		() => {
			getData();
		},
		[],
		[countModal]
	);

	return (
		<>
			{game != null ? (
				<View style={{ flex: 1 }}>
					<LinearGradient
						colors={["brown", "lightblue"]}
						style={{ flex: 1, height: "100%" }}
					>
						<ScrollView style={{}}>
							<Clues key={1} game={game} />
							<TextInput
								style={styles.answerInput}
								placeholder={"Cevap"}
								placeholderTextColor={"lightblue"}
								caretHidden={true}
								value={inputCevap}
								onChangeText={(text) => setInputCevap(text)}
								onSubmitEditing={onPressSubmit}
							/>
							<TouchableOpacity
								onPress={() => onPressSubmit()}
								style={styles.submitButton}
							>
								<Text style={styles.submitText}>Gönder</Text>
							</TouchableOpacity>
							<Modal transparent={true} visible={countModal}>
								<ScrollView style={{ flex: 1, backgroundColor: "#000000BB" }}>
									<View
										style={{
											width: windowWidth * (8 / 10),
											backgroundColor: "lightyellow",
											height: windowHeight * (8 / 10),
											alignSelf: "center",
											borderRadius: 50,
											marginTop: windowHeight * (0.7 / 10),
											flexDirection: "column",
										}}
									>
										<TouchableOpacity
											onPress={setCountModal}
											style={{ alignSelf: "flex-start", padding: 30 }}
										>
											<Ionicons
												name="arrow-back-outline"
												size={32}
												color="black"
											/>
										</TouchableOpacity>
										<TouchableOpacity
											style={{
												alignSelf: "center",
												backgroundColor: "lightyellow",
												borderRadius: 50,
												borderWidth: 5,
												borderColor: "#1c1414",
												marginTop: 50,
											}}
										>
											<MaterialIcons
												name="done"
												size={64}
												color="black"
												style={{ alignSelf: "center" }}
											/>
										</TouchableOpacity>
										<Text
											style={{
												padding: 15,
												fontSize: 16,
												fontStyle: "italic",
												fontWeight: "bold",
												alignSelf: "center",
												borderBottomColor: "black",
												borderBottomWidth: 2,
											}}
										>
											Cevap
										</Text>
										<Text
											style={{
												padding: 15,
												fontSize: 16,
												fontStyle: "italic",
												fontWeight: "bold",
												alignSelf: "center",
											}}
										>
											{game.answer}
										</Text>
										<Text
											style={{
												padding: 15,
												fontSize: 16,
												marginTop: 20,
												fontStyle: "italic",
												fontWeight: "bold",
											}}
										>
											İlk hafta sorusu {game.winnerTime} tarihinde{" "}
											{game.winnerName} tarafından çözülmüştür!
										</Text>
										<Text
											style={{
												padding: 15,
												fontSize: 16,
												marginTop: 20,
												fontStyle: "italic",
												fontWeight: "bold",
											}}
										>
											Herkese katılımları için teşekkürler. Gelecek soru için
											takipte kalın
										</Text>
									</View>
								</ScrollView>
							</Modal>
							<StatusBar />
						</ScrollView>
					</LinearGradient>
				</View>
			) : (
				<ActivityIndicator />
			)}
		</>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	headerTitle: {
		fontFamily: "Yellowtail",
		fontSize: 32,
		color: "lightblue",
		textAlign: "center",
	},
	answerInput: {
		width: "60%",
		height: 50,
		alignSelf: "center",
		backgroundColor: "brown",
		textAlign: "center",
		color: "lightblue",
		fontSize: 16,
		marginTop: 50,
		borderWidth: 1,
		borderColor: "lightblue",
		borderRadius: 8,
	},
	submitButton: {
		width: "40%",
		height: 30,
		alignSelf: "center",
		justifyContent: "center",
		backgroundColor: "lightblue",
		marginTop: 30,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "brown",
	},
	submitText: {
		textAlign: "center",
		color: "brown",
		fontSize: 16,
		fontFamily: "Roboto",
	},
});
