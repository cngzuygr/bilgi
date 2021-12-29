import React, { useLayoutEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Modal,
} from "react-native";
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import { auth, db } from "../../firebase";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			backgroundColor: "brown",
			headerTitleAlign: "center",
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "brown",
			},
			headerLeft: () => (
				<View>
					<TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
						<Ionicons name="arrow-back" size={32} color="black" />
					</TouchableOpacity>
				</View>
			),
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
						onPress={() => navigation.navigate("SettingsScreen")}
					>
						<AntDesign name="setting" size={32} color="black" />
					</TouchableOpacity>
				</View>
			),
		});
	});

	return (
		<LinearGradient
			colors={["brown", "lightblue"]}
			style={{ flex: 1, height: "100%" }}
		>
			<View style={{ flex: 1, alignItems: "center" }}>
				<Image
					style={{
						height: 100,
						width: 100,
						borderRadius: 100,
						marginVertical: 15,
					}}
					source={{
						uri: "https://iasbh.tmgrup.com.tr/1041f1/366/218/0/0/1050/626?u=https://isbh.tmgrup.com.tr/sbh/2018/01/18/zeki-muren-kimdir--1516270564774.jpg",
					}}
				/>
				<Text
					style={{
						fontSize: 18,
						fontFamily: "Poppins",
						fontWeight: "bold",
						color: "lightblue",
					}}
				>
					{auth?.currentUser?.displayName}
				</Text>
				<Text
					style={{
						fontSize: 18,
						fontFamily: "Poppins",
						fontWeight: "bold",
						color: "lightblue",
					}}
				>
					{auth?.currentUser?.email}
				</Text>
				<Text
					style={{
						alignSelf: "flex-start",
						fontSize: 18,
						fontFamily: "Poppins",
						fontWeight: "bold",
						color: "black",
						marginTop: 20,
						marginLeft: 15,
					}}
				>
					Başarımlar:
				</Text>
				<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="gold" />
						</TouchableOpacity>
						<Text style={{ color: "gold", fontFamily: "Poppins" }}>
							Yarışma
						</Text>
					</View>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="#CD7F32" />
							<Text style={{ color: "gold", fontFamily: "Poppins" }}>
								Yarışma
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="silver" />
							<Text style={{ color: "gold", fontFamily: "Poppins" }}>
								Yarışma
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="silver" />
							<Text style={{ color: "gold", fontFamily: "Poppins" }}>
								Yarışma
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="silver" />
							<Text style={{ color: "gold", fontFamily: "Poppins" }}>
								Yarışma
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="#CD7F32" />
							<Text style={{ color: "gold", fontFamily: "Poppins" }}>
								Yarışma
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="gold" />
							<Text style={{ color: "gold", fontFamily: "Poppins" }}>
								Yarışma
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="silver" />
							<Text style={{ color: "gold", fontFamily: "Poppins" }}>
								Yarışma
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="#CD7F32" />
							<Text style={{ color: "gold", fontFamily: "Poppins" }}>
								Yarışma
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="silver" />
							<Text style={{ color: "gold", fontFamily: "Poppins" }}>
								Yarışma
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 8 }}>
						<TouchableOpacity>
							<EvilIcons name="trophy" size={64} color="gold" />
							<Text style={{ color: "gold", fontFamily: "Poppins" }}>
								Yarışma
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<LinearGradient
					colors={["brown", "lightblue"]}
					style={{ flex: 1, height: "100%" }}
				>
					<Modal visible={true} transparent={true}>
						<View
							style={{
								height: "80%",
								width: "80%",
								alignSelf: "center",
								marginTop: "20%",
								borderRadius: 20,
								backgroundColor: "lightblue",
							}}
						>
							<Image
								style={{ width: 100, height: 100, alignSelf: "center" }}
								source={{
									uri: "https://tmssl.akamaized.net/images/erfolge/verybigquad/20.png?lm=1520606999",
								}}
							/>
						</View>
					</Modal>
				</LinearGradient>
			</View>
		</LinearGradient>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	headerTitle: {
		fontFamily: "Yellowtail",
		fontSize: 32,
		color: "black",
		textAlign: "center",
	},
});
