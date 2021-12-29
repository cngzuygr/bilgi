import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Clues = ({ game }) => {
	return (
		<View>
			<TouchableOpacity
				onPress={() => Alert.alert("İpucu 1", `${game.clue1}`)}
				style={{
					alignSelf: "flex-start",
					padding: 10,
					marginLeft: "10%",
					marginTop: 15,
				}}
			>
				<View style={{ flexDirection: "row" }}>
					<EvilIcons name="search" size={24} color="lightyellow" />
					<Text style={{ color: "white", fontSize: 16, color: "lightyellow" }}>
						İpucu 1
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => Alert.alert(`${game.clue1}`, `${game.clue1}`)}
				style={{ alignSelf: "flex-start", padding: 10, marginLeft: "10%" }}
			>
				<View style={{ flexDirection: "row" }}>
					<EvilIcons name="search" size={24} color="lightyellow" />
					<Text style={{ color: "white", fontSize: 16, color: "lightyellow" }}>
						İpucu 2
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => Alert.alert(`${game.clue1}`, `${game.clue1}`)}
				style={{ alignSelf: "flex-start", padding: 10, marginLeft: "10%" }}
			>
				<View style={{ flexDirection: "row" }}>
					<EvilIcons name="search" size={24} color="lightyellow" />
					<Text style={{ color: "white", fontSize: 16, color: "lightyellow" }}>
						İpucu 3
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => Alert.alert(`${game.clue1}`, `${game.clue1}`)}
				style={{ alignSelf: "flex-start", padding: 10, marginLeft: "10%" }}
			>
				<View style={{ flexDirection: "row" }}>
					<EvilIcons name="search" size={24} color="lightyellow" />
					<Text style={{ color: "white", fontSize: 16, color: "lightyellow" }}>
						İpucu 4
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => Alert.alert(`${game.clue1}`, `${game.clue1}`)}
				style={{ alignSelf: "flex-start", padding: 10, marginLeft: "10%" }}
			>
				<View style={{ flexDirection: "row" }}>
					<EvilIcons name="search" size={24} color="lightyellow" />
					<Text style={{ color: "white", fontSize: 16, color: "lightyellow" }}>
						İpucu 5
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Clues;

const styles = StyleSheet.create({});
