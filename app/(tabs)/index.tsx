import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#FFFFFF");

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setColor(randomColor);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.touchabble}
        onPress={generateRandomColor}
      >
        <View style={[styles.content, { backgroundColor: color }]}>
          <Text style={styles.paragraph}>Hello there</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  content: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    justifyContent: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  touchabble: {
    flex: 1,
    backgroundColor: "blue",
  },
});
