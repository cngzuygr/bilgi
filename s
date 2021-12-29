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
							<Ionicons name="arrow-back-outline" size={32} color="black" />
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
							{cevap}
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
							İlk hafta sorusu {currentDate} tarihinde{" "}
							{auth?.currentUser?.displayName} tarafından çözülmüştür!
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
							Herkese katılımları için teşekkürler. Gelecek soru için takipte
							kalın
						</Text>
					</View>
				</ScrollView>
			</Modal>












			

			
			useLayoutEffect(() => {
		navigation.setOptions({
			backgroundColor: "brown",
			headerTitleAlign: "center",
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "red",
				borderBottomLeftRadius: 20,
				borderBottomRightRadius: 20,
			},
			header: () => (
				<View
					style={{ backgroundColor: "red", height: "10%", borderRadius: 10 }}
				>
					<Text>sa</Text>
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
					>
						<AntDesign name="user" size={32} color="lightblue" />
					</TouchableOpacity>
				</View>
			),
		});
	});