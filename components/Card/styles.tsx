import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const isSmallDevice = width < 375;

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: width - 30,
    height: height - BOTTOM_BAR_HEIGHT * 6,
    borderRadius: 20,
    overflow: "hidden", // this does magic
  },
  title: {
    position: "absolute",
    left: 10,
    bottom: 30,
  },
  caption: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
});
