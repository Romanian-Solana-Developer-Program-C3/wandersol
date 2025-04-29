import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Feather, Ionicons } from "@expo/vector-icons"

type RootStackParamList = {
  Landing: undefined
  Explore: undefined
  Detail: undefined
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Detail">

export default function DetailScreen() {
  const navigation = useNavigation<NavigationProp>()

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/halloween-bucharest-large.jpg")} style={styles.headerImage}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={20} color="#2c2c2c" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.heartButton}>
          <Ionicons name="heart" size={20} color="#ec5655" />
        </TouchableOpacity>
      </ImageBackground>

      <ScrollView style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Halloween in Bucharest</Text>
          <Text style={styles.showMap}>Show map</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.starIcon}>★</Text>
          <Text style={styles.rating}>4.5</Text>
          <Text style={styles.reviews}>(355 Reviews)</Text>
        </View>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam...
        </Text>

        <View style={styles.readMoreContainer}>
          <Text style={styles.readMore}>Read more</Text>
          <Feather name="chevron-down" size={16} color="#15ff58" />
        </View>

        <View style={styles.riddlesContainer}>
          <Text style={styles.riddlesTitle}>Riddles for this Quest</Text>
          <View style={styles.riddleCard}>
            <Text style={styles.riddleText}>We're off to a scary start</Text>
            <Text style={styles.xpText}>5 XP</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceValue}>Free</Text>
          </View>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Start now</Text>
            <Feather name="arrow-right" size={20} color="#2c2c2c" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2c2c",
  },
  headerImage: {
    height: 250,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 16,
  },
  backButton: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginTop: 40,
  },
  heartButton: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginTop: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    marginRight: 10,
  },
  showMap: {
    color: "#15ff58",
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  starIcon: {
    color: "#15ff58",
    fontSize: 16,
    marginRight: 4,
  },
  rating: {
    color: "white",
    fontSize: 14,
    marginRight: 4,
  },
  reviews: {
    color: "#b8b8b8",
    fontSize: 12,
  },
  description: {
    color: "#d3d3d3",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 16,
  },
  readMoreContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 4,
  },
  readMore: {
    color: "#15ff58",
    fontSize: 14,
    marginRight: 4,
  },
  riddlesContainer: {
    marginTop: 24,
  },
  riddlesTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  riddleCard: {
    backgroundColor: "rgba(65, 64, 64, 0.5)",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  riddleText: {
    color: "white",
    fontSize: 14,
  },
  xpText: {
    color: "#15ff58",
    fontSize: 14,
    fontWeight: "500",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 20,
  },
  priceLabel: {
    color: "#b8b8b8",
    fontSize: 14,
  },
  priceValue: {
    color: "#15ff58",
    fontSize: 24,
    fontWeight: "bold",
  },
  startButton: {
    backgroundColor: "#15ff58",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  startButtonText: {
    color: "#2c2c2c",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
})
