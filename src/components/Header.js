import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>厭世少年</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4,
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Header;
