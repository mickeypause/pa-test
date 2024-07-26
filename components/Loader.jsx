import React from "react";
import { SafeAreaView, ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from "../lib/constants";

const Loader = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </SafeAreaView>
  );
};

export default Loader;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
