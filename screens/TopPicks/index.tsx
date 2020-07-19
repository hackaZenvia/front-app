import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, Tile } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { HomeScreenPics } from "../../constants/Pics";
import { styles } from "./styles";

class TopPicksScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text h2 h2Style={styles.h2Style}>
            Top Anúncios
          </Text>
          <View style={styles.grid}>
            {HomeScreenPics.map(({ pic, title }, i) => (
              <Tile
                imageSrc={pic}
                activeOpacity={0.9}
                title={title}
                titleStyle={styles.title}
                featured
                key={title}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default TopPicksScreen;
