import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, Button } from "react-native";

function App() {
  const [count, setCount] = useState(10);

  setInterval(() => {
    setCount(count - 1);
  }, 1000);

  const clickEvent = () => {
    console.log("Called");
  };

  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <Text style={{ textAlign: "center" }}>{count}</Text>
      <Pressable title="Click me" onPress={clickEvent} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default App;
