import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import Card from "./Card";
import { COLORS, SPACING, TEXT } from "../lib/constants";

const List = ({ data, noDataText }) => {
  return (
    <>
      {data.length < 1 ? (
        <Text style={styles.text}>{noDataText}</Text>
      ) : (
        <FlashList
          keyboardDismissMode="interactive"
          data={data}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item, index }) => (
            <View
              style={{
                flex: 1,
                marginLeft: index % 2 === 0 ? 0 : SPACING.normal,
                marginRight: index % 2 !== 0 ? 0 : SPACING.normal,
              }}
            >
              <Card
                title={item.title}
                id={item.id}
                thumbnailUrl={item.thumbnailUrl}
              />
            </View>
          )}
          estimatedItemSize={200}
          numColumns={2}
        />
      )}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.medium,
  },
  separator: {
    height: SPACING.medium,
  },
  text: {
    fontSize: TEXT.medium,
    fontWeight: "bold",
    color: COLORS.muted,
    textAlign: "center",
    padding: SPACING.medium,
  },
});
