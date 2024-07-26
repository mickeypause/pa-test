import React from "react";
import { Pressable } from "react-native";

const IconButton = ({ onPress, icon, ...props }) => {
  return (
    <Pressable onPress={onPress} {...props}>
      {icon}
    </Pressable>
  );
};

export default IconButton;
