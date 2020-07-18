import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { Messages } from "../../constants/Messages";
import { styles } from "./styles";

class MessagesScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {Messages.map((user, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: user.pic, size: "large" }}
              title={user.title}
              titleStyle={styles.title}
              subtitle={user.message}
              subtitleStyle={styles.subtitle}
              chevron
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default MessagesScreen;
