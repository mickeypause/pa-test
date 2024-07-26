import React from "react";
import IconButton from "./IconButton";
import { COLORS } from "../lib/constants";
import { AntDesign } from "@expo/vector-icons";

const LikeButton = ({ isFavorite, onPress }) => {
  return (
    <IconButton
      onPress={onPress}
      icon={
        isFavorite ? (
          <AntDesign name="heart" size={24} color={COLORS.red} />
        ) : (
          <AntDesign name="hearto" size={24} color={COLORS.white} />
        )
      }
    />
  );
};

export default LikeButton;
