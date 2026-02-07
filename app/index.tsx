import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      {/* Tabs */}
      <View style={styles.tabs}>
        <View style={styles.activeTab}>
          <Text style={styles.activeText}>For you</Text>
        </View>
        <Text style={styles.inactiveText}>Following</Text>
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
  },
});
