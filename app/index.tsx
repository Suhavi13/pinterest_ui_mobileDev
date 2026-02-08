// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

// import { Ionicons } from "@expo/vector-icons";
// import React from "react";
// import {
//   Alert,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const dataLeft = [
//   { id: 1, height: 220 },
//   { id: 2, height: 300 },
//   { id: 3, height: 240 },
// ];

// const dataRight = [
//   { id: 4, height: 280 },
//   { id: 5, height: 200 },
//   { id: 6, height: 320 },
// ];

// export default function Index() {
//   const handleAlertPress = () => {
//     Alert.alert("Alert Title", "This is your alert message!", [
//       { text: "Cancel", style: "cancel" },
//       { text: "OK", onPress: () => console.log("OK Pressed") },
//     ]);
//   };

//   return (
//     <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
//       {/* TOP TABS */}
//       <View style={styles.tabs}>
//         <View style={styles.activeTab}>
//           <Text style={styles.activeText}>For you</Text>
//         </View>
//         <Text style={styles.inactiveText}>Following</Text>
//       </View>

//       {/* FEED (NO SCROLL) */}
//       <View style={styles.masonry}>
//         {/* LEFT COLUMN */}
//         <View style={styles.column}>
//           {dataLeft.map((item) => (
//             <View key={item.id} style={[styles.card, { height: item.height }]}>
//               <Image
//                 source={{ uri: "https://picsum.photos/400/600" }}
//                 style={styles.image}
//               />
//             </View>
//           ))}
//         </View>

//         {/* RIGHT COLUMN */}
//         <View style={styles.column}>
//           {dataRight.map((item) => (
//             <View key={item.id} style={[styles.card, { height: item.height }]}>
//               <Image
//                 source={{ uri: "https://picsum.photos/400/700" }}
//                 style={styles.image}
//               />
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* BOTTOM NAV */}
//       <View style={styles.bottomNav}>
//         <Ionicons name="home" size={26} />
//         <Ionicons name="search" size={26} />
//         <Ionicons name="chatbubble-outline" size={26} />
//         <TouchableOpacity onPress={handleAlertPress}>
//           <Ionicons name="notifications-outline" size={26} />
//         </TouchableOpacity>
//         <Ionicons name="person-circle-outline" size={30} />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },

//   //suhavi
//   /* Tabs */
//   tabs: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     marginBottom: 10,
//   },
//   activeTab: {
//     backgroundColor: "#000",
//     paddingHorizontal: 18,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 14,
//   },
//   activeText: {
//     color: "#fff",
//     fontWeight: "600",
//   },
//   inactiveText: {
//     color: "#000",
//     fontWeight: "600",
//   },

//   /* Masonry */
//   masonry: {
//     flexDirection: "row",
//     paddingHorizontal: 10,
//     flex: 1,
//   },
//   column: {
//     flex: 1,
//     paddingHorizontal: 5,
//   },
//   card: {
//     borderRadius: 18,
//     overflow: "hidden",
//     marginBottom: 12,
//     backgroundColor: "#eee",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },

//   /* Bottom Nav */
//   bottomNav: {
//     height: 60,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderTopWidth: 0.5,
//     borderTopColor: "#ddd",
//   },
// });

// import React from "react";
// import { StyleSheet, Text, View,Image } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const dataLeft = [
//   { id: 1, height: 220 },
//   { id: 2, height: 300 },
//   { id: 3, height: 240 },
// ];

// const dataRight = [
//   { id: 4, height: 280 },
//   { id: 5, height: 200 },
//   { id: 6, height: 320 },
// ];

// export default function Index() {
//   return (
//     <SafeAreaView style={styles.container} edges={["top", "bottom"]}>

//           {/* FEED (NO SCROLL) */}
//       <View style={styles.masonry}>
//         </View>
//         {/* LEFT COLUMN */}
//        <View style={styles.column}>
//          {dataLeft.map((item) => (
//            <View key={item.id} style={[styles.card, { height: item.height }]}>
//               <Image
//                 source={{ uri: "https://picsum.photos/400/600" }}
//                  style={styles.image}
//               />
//             </View>
//           ))}
//        </View>

//                {/* RIGHT COLUMN */}
//         <View style={styles.column}>
//            {dataRight.map((item) => (
//             <View key={item.id} style={[styles.card, { height: item.height }]}>
//               <Image
//               source={{ uri: "https://picsum.photos/400/700" }}
//               style={styles.image}
//               />
//             </View>
//           ))}
//         </View>

//     </SafeAreaView>
//   );
// }

// //Styles

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },

//    /* Masonry */
//   masonry: {
//     flexDirection: "row",
//     paddingHorizontal: 10,
//     flex: 1,
//   },
//   column: {
//     flex: 1,
//     paddingHorizontal: 5,
//   },
//   card: {
//     borderRadius: 18,
//     overflow: "hidden",
//     marginBottom: 12,
//     backgroundColor: "#eee",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   }

// });

import React from "react";
import {
  Alert,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
    <SafeAreaView style={styles.container}>
      {/* 🔔 ALERT BUTTON */}
      <View style={styles.buttonContainer}>
        <Button title="Show Alert" onPress={showAlert} />
      </View>

      {/* 📌 PINTEREST GRID */}
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

const styles = StyleSheet.create({
  container: {
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
