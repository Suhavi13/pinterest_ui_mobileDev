import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Feed data
const dataLeft = [
  { id: 1, height: 220 },
  { id: 2, height: 300 },
  { id: 3, height: 240 },
];
const dataRight = [
  { id: 4, height: 280 },
  { id: 5, height: 200 },
  { id: 6, height: 320 },
];

export default function Index() {
  const handleAlertPress = () => {
    Alert.alert("Alert Title", "This is your alert message!", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      {/* top tabs */}
      <View style={styles.tabs}>
        <View style={styles.activeTab}>
          <Text style={styles.activeText}>For you</Text>
        </View>
        <Text style={styles.inactiveText}>Following</Text>
      </View>

      {/* feed */}
      <View style={styles.masonry}>
        {/* left column */}
        <View style={styles.column}>
          {dataLeft.map((item) => (
            <View key={item.id} style={[styles.card, { height: item.height }]}>
              <Image
                source={{ uri: "https://picsum.photos/400/600" }}
                style={styles.image}
              />
            </View>
          ))}
        </View>

        {/* right column */}
        <View style={styles.column}>
          {dataRight.map((item) => (
            <View key={item.id} style={[styles.card, { height: item.height }]}>
              <Image
                source={{ uri: "https://picsum.photos/400/700" }}
                style={styles.image}
              />
            </View>
          ))}
        </View>
      </View>

      {/* Alert button */}
      <View
        style={{ position: "absolute", bottom: 80, width: "100%", zIndex: 10 }}
      >
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: "#000",
            paddingVertical: 14,
            borderRadius: 25,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Alert</Text>
        </View>
      </View>

      {/* bottom nav */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={26} color="black" />
        <Ionicons name="search" size={26} color="#777" />
        <Ionicons name="chatbubble-outline" size={26} color="#777" />
        <Ionicons name="person-circle-outline" size={30} color="#777" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Tabs
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
  activeText: { color: "#fff", fontWeight: "600" },
  inactiveText: { color: "#000", fontWeight: "600" },

  // Feed layout
  masonry: { flexDirection: "row", paddingHorizontal: 10, flex: 1 },
  column: { flex: 1, paddingHorizontal: 5 },
  card: {
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 12,
    backgroundColor: "#eee",
  },
  image: { width: "100%", height: "100%" },

  // Bottom nav
  bottomNav: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
  },
});
