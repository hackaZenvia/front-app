import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";

class TopPicks extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Página TopPicks</Text>
        <View style={styles.separator} />
        <Text>Olá tudo bem?</Text>
      </View>
    );
  }
}

export default TopPicks;
