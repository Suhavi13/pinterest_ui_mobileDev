import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert,Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 2 - 18;

const images = [
  { id: "1", image: require("./images/image1.png") },
  { id: "2", image: require("./images/image2.png") },
  { id: "3", image: require("./images/image3.png") },
  { id: "4", image: require("./images/image4.png") },
  { id: "5", image: require("./images/image5.png") },
  { id: "6", image: require("./images/image6.png") },
];

export default function Index() {
  const showAlert = () => {
    Alert.alert("Alert", "Alert Button pressed");
  };
  return (
   <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      {/* Tabs */}
      <View style={styles.tabs}>
        <View style={styles.activeTab}>
          <Text style={styles.activeText}>For you</Text>
        </View>
        <Text style={styles.inactiveText}>Following</Text>
      </View>

      {/* alert button */}
      <View style={styles.buttonContainer}>
        <Button title="Show Alert" onPress={showAlert} />
      </View>

      {/* feed */}
      <View style={styles.grid}>
        {images.map((item, index) => (
          <View
            key={item.id}
            style={[styles.card, { height: index % 2 === 0 ? 200 : 260 }]}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.caption}>Image {item.id}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
    
  );
}

//Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* Tabs */
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  activeTab: {
    backgroundColor: "#000",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 14,
  },
  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
  inactiveText: {
    color: "#000",
    fontWeight: "600",
  },container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    padding: 10,
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  card: {
    width: cardWidth,
    borderRadius: 20,
    marginBottom: 12,
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
  },
  image: {
    width: "100%",
    height: "85%",
    resizeMode: "cover",
  },
  caption: {
    textAlign: "center",
    paddingVertical: 6,
    fontSize: 14,
    fontWeight: "500",
  },
});

