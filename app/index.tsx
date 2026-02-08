import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
    
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
