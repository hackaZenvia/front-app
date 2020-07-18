import React from "react";
import { styles } from "./styles";
import { Text, View, SafeAreaView, StyleSheet, Platform } from "react-native";
import Swiper from "react-native-deck-swiper";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Card } from "../../components/Card";
import { HomeScreenPics } from "../../constants/HomeScreenPics";

class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={Card}
          infinite
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2}
          useViewOverflow={Platform.OS === "ios"}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
