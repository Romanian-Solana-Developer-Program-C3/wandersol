import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Feather, Ionicons } from "@expo/vector-icons"

type RootStackParamList = {
  Landing: undefined
  Explore: undefined
  Detail: undefined
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Explore">

export default function ExploreScreen() {
  const navigation = useNavigation<NavigationProp>()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerSubtitle}>Explore</Text>
          <Text style={styles.headerTitle}>Bucharest</Text>
        </View>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationText}>Bucharest, RO</Text>
          <Feather name="chevron-down" size={16} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color="#b8b8b8" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Find your next adventure" placeholderTextColor="#414040" />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
          <ImageBackground
            source={require("../assets/bucharest-day.jpg")}
            style={styles.card}
            imageStyle={{ borderRadius: 12 }}
          >
            <View style={styles.cardOverlay}>
              <View style={styles.ratingContainer}>
                <View style={styles.starContainer}>
                  <Text style={styles.starText}>★</Text>
                </View>
                <Text style={styles.ratingText}>4.1</Text>
              </View>
              <Text style={styles.cardTitle}>Bucharest by Day</Text>
            </View>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/bucharest-night.jpg")}
            style={styles.card}
            imageStyle={{ borderRadius: 12 }}
          >
            <TouchableOpacity style={styles.heartButton}>
              <Ionicons name="heart" size={20} color="#ec5655" />
            </TouchableOpacity>
            <View style={styles.cardOverlay}>
              <View style={styles.ratingContainer}>
                <View style={styles.starContainer}>
                  <Text style={styles.starText}>★</Text>
                </View>
                <Text style={styles.ratingText}>4.5</Text>
              </View>
              <Text style={styles.cardTitle}>Bucharest by night</Text>
            </View>
          </ImageBackground>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended</Text>
        </View>

        <TouchableOpacity style={styles.recommendedCard} onPress={() => navigation.navigate("Detail")}>
          <Image source={require("../assets/halloween-bucharest.jpg")} style={styles.recommendedImage} />
          <View style={styles.recommendedContent}>
            <Text style={styles.recommendedTitle}>Halloween in Bucharest</Text>
            <Text style={styles.trendingText}>Trending</Text>
          </View>
          <View style={styles.difficultyContainer}>
            <Text style={styles.difficultyText}>easy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.recommendedCard}>
          <Image source={require("../assets/historic-bucharest.jpg")} style={styles.recommendedImage} />
          <View style={styles.recommendedContent}>
            <Text style={styles.recommendedTitle}>Historic Bucharest</Text>
            <Text style={styles.trendingText}>Trending</Text>
          </View>
          <View style={styles.difficultyContainer}>
            <Text style={styles.difficultyText}>hard</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.navbar}>
        <Feather name="home" size={24} color="white" />
        <Feather name="compass" size={24} color="#15ff58" />
        <Feather name="bookmark" size={24} color="white" />
        <Feather name="user" size={24} color="white" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2c2c",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#c4c4c4",
    fontSize: 14,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#414040",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  locationText: {
    color: "white",
    fontSize: 14,
    marginRight: 4,
  },
  searchContainer: {
    position: "relative",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  searchIcon: {
    position: "absolute",
    left: 12,
    top: 12,
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: "#f2f7fd",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    fontSize: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  seeAllText: {
    color: "#15ff58",
    fontSize: 14,
  },
  cardsContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  card: {
    width: 150,
    height: 180,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  cardOverlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starContainer: {
    backgroundColor: "#f8d675",
    borderRadius: 2,
    padding: 2,
    marginRight: 4,
  },
  starText: {
    fontSize: 10,
  },
  ratingText: {
    color: "white",
    fontSize: 12,
  },
  cardTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 4,
  },
  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
  },
  recommendedCard: {
    flexDirection: "row",
    backgroundColor: "rgba(58, 84, 79, 0.2)",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
  },
  recommendedImage: {
    width: 96,
    height: 96,
  },
  recommendedContent: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  recommendedTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  trendingText: {
    color: "#b8b8b8",
    fontSize: 12,
    marginTop: 4,
  },
  difficultyContainer: {
    backgroundColor: "#414040",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "center",
    marginRight: 8,
  },
  difficultyText: {
    color: "white",
    fontSize: 12,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(65, 64, 64, 0.5)",
    borderRadius: 30,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 12,
  },
})
