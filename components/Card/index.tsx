import React, { Component, useState } from "react";
import { Text, View, Button } from "react-native";
import { Tile } from "react-native-elements";
import { styles } from "./styles";

export default function Card({ pic, title, caption }) {
  return (
    <>
      <Tile
        imageSrc={pic}
        imageContainerStyle={styles.imageContainer}
        activeOpacity={0.9}
        title={title}
        titleStyle={styles.title}
        caption={caption}
        captionStyle={styles.caption}
        containerStyle={styles.container}
        featured
      />
    </>
  );
}
