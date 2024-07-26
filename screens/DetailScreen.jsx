import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS, SPACING, TEXT } from "../lib/constants";
import { useGetPhotoQuery } from "../store/services/albumApi";
import Loader from "../components/Loader";
import IconButton from "../components/IconButton";
import { AntDesign } from "@expo/vector-icons";
import useFavorite from "../hooks/useFavorite";
import LikeButton from "../components/LikeButton";

const { width, height } = Dimensions.get("window");

const DetailScreen = ({ route }) => {
  const { id } = route.params;

  const { data, isLoading, isFetching, error } = useGetPhotoQuery(id);

  const { isFavorite, handleLikePress } = useFavorite(id, data);

  return (
    <>
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <ScrollView style={styles.wrapper}>
          <View>
            <Image
              source={data.url}
              contentFit="cover"
              style={styles.image}
              priority={"high"}
            />
            <View style={styles.like}>
              <LikeButton isFavorite={isFavorite} onPress={handleLikePress} />
            </View>
          </View>

          <Text style={styles.title}>{data.title}</Text>
        </ScrollView>
      )}
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: SPACING.medium,
  },
  container: {
    position: "relative",
  },
  like: {
    zIndex: 10,
    position: "absolute",
    top: SPACING.medium,
    right: SPACING.medium,
  },
  image: {
    width: "100%",
    height: height / 2.5,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontWeight: "semibold",
    fontSize: TEXT.large,
    marginLeft: SPACING.medium,
  },
});
