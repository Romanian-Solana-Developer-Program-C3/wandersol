import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

type RootStackParamList = {
  Landing: undefined
  Explore: undefined
  Detail: undefined
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Landing">

export default function LandingScreen() {
  const navigation = useNavigation<NavigationProp>()

  return (
    <ImageBackground
      source={require("../assets/city-night.jpg")}
      style={styles.background}
      imageStyle={{ opacity: 0.5 }}
    >
      <View style={styles.container}>
        <Text style={styles.logo}>WanderSol</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>Wander through your</Text>
          <Text style={styles.title}>favourite cities</Text>
          <Text style={styles.subtitle}>using Web3!</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Explore")}>
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#2c2c2c",
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  logo: {
    color: "#15ff58",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
  },
  contentContainer: {
    marginBottom: 48,
  },
  title: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
    marginVertical: 8,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#15ff58",
    borderRadius: 30,
    padding: 16,
    alignItems: "center",
    marginTop: 32,
  },
  buttonText: {
    color: "#2c2c2c",
    fontSize: 16,
    fontWeight: "bold",
  },
})
