import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { BORDERS, COLORS, SPACING } from "../lib/constants";
import useFavorite from "../hooks/useFavorite";
import LikeButton from "./LikeButton";

const { width, height } = Dimensions.get("window");

const Card = ({ title, id, thumbnailUrl }) => {
  const navigation = useNavigation();

  const { handleLikePress, isFavorite } = useFavorite(id, {
    title,
    id,
    thumbnailUrl,
  });

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Detail", { id })}
      >
        <View style={styles.like}>
          <LikeButton isFavorite={isFavorite} onPress={handleLikePress} />
        </View>
        <Image style={styles.image} source={thumbnailUrl} contentFit="cover" />
      </Pressable>
      <Text>{title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    gap: SPACING.normal,
    justifyContent: "space-between",
    color: "black",
  },
  container: {
    width: "100%",
    height: height / 6,
    backgroundColor: "green",
    borderRadius: BORDERS.normal,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.primary,
  },
  like: {
    zIndex: 10,
    position: "absolute",
    top: SPACING.normal,
    right: SPACING.normal,
  },
});
