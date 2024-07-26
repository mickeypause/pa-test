import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import List from "../components/List";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
  const data = useSelector((state) => state.favorite.favorite);

  return (
    <SafeAreaView style={styles.wrapper}>
      <List data={data} noDataText={"No liked photos yet"} />
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
