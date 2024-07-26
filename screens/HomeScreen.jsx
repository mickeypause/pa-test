import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useMemo, useState } from "react";
import List from "../components/List";
import { useGetAlbumQuery } from "../store/services/albumApi";
import Loader from "../components/Loader";
import { useNavigation } from "@react-navigation/native";
import useFilter from "../hooks/useSearch";
import { COLORS } from "../lib/constants";

const HomeScreen = () => {
  const [query, setQuery] = useState("");

  const navigation = useNavigation();

  const { data, error, isLoading, isFetching } = useGetAlbumQuery();

  const filteredData = useFilter({ data, query, filterParam: "title" });

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerSearchBarOptions: {
          value: query,
          tintColor: COLORS.primary,
          onChangeText: (event) => setQuery(event.nativeEvent.text),
        },
      },
      [navigation],
    );
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      {isLoading || isFetching ? <Loader /> : <List data={filteredData} />}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
