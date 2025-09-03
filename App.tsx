import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Discover New Music",
    description: "Find the best Lo-Fi beats to relax, study, and focus.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Create Your Vibe",
    description: "Build playlists and set the perfect mood anytime.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Stay in Flow",
    description: "Immerse yourself in non-stop music designed for you.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      alert("Onboarding finished!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#ff0080", "#7928ca", "#2af598"]}
        style={styles.background}
      >
        {/* Slide Image */}
        <Image source={{ uri: slides[currentSlide].image }} style={styles.image} />

        {/* Slide Text */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{slides[currentSlide].title}</Text>
          <Text style={styles.description}>
            {slides[currentSlide].description}
          </Text>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>

        {/* Dots Indicator */}
        <View style={styles.dotsContainer}>
          {slides.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.dot,
                { backgroundColor: idx === currentSlide ? "#fff" : "rgba(255,255,255,0.4)" },
              ]}
            />
          ))}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: {
    width: width * 0.8,
    height: width * 0.6,
    borderRadius: 20,
    marginBottom: 30,
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  textContainer: { alignItems: "center", marginHorizontal: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "white", textAlign: "center" },
  description: {
    fontSize: 16,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    marginTop: 40,
    backgroundColor: "#ff0080",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  dotsContainer: { flexDirection: "row", marginTop: 30 },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

