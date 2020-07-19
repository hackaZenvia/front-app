import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-elements";
import { styles } from "./styles";

const pic = require("../../assets/images/men/men1.jpg");
const title = "Rodrigo, 29";

class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.image} />
        </View>
        <Text h4 style={styles.name}>
          {title}
        </Text>
        <Text style={styles.desc}>Vendedor da loja do bairro</Text>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>
          Na loja do bairro vendemos produtos de vestuario com o melhor preço da
          cidade
        </Text>
        <Divider style={styles.divider} />
      </SafeAreaView>
    );
  }
}

export default ProfileScreen;
