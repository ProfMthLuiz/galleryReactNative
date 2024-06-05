import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const data = [
  { id: 1, imgUrl: require("./src/assets/images/img1.jpg") },
  { id: 2, imgUrl: require("./src/assets/images/img2.jpg") },
  { id: 3, imgUrl: require("./src/assets/images/img3.jpg") },
  { id: 4, imgUrl: require("./src/assets/images/img4.jpg") },
  { id: 5, imgUrl: require("./src/assets/images/img5.jpg") },
  { id: 6, imgUrl: require("./src/assets/images/img6.jpg") },
  { id: 7, imgUrl: require("./src/assets/images/img7.jpg") },
  { id: 8, imgUrl: require("./src/assets/images/img8.jpg") },
];

export default function ImageBackgroundComponent() {
  const [selectedImg, setSelectedImg] = useState(data[0].imgUrl);

  function renderItem({ item }) {
    const isSelected = item.imgUrl === selectedImg;
    return (
      <View
        style={[
          styles.imageContainer,
          isSelected && styles.selectedImageContainer,
        ]}
      >
        <TouchableOpacity
          style={{ height: "100%", width: "100%" }}
          onPress={() => setSelectedImg(item.imgUrl)}
        >
          <ImageBackground
            source={item.imgUrl}
            style={{ height: "100%", width: "100%" }}
          >
            {!isSelected && (
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#00000066",
                }}
              ></View>
            )}
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={selectedImg}
    >
      <View style={{ flex: 1 }}></View>

      <View style={styles.bottomContainer}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            horizontal={true}
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 80,
    height: 80,
    backgroundColor: "black",
    borderRadius: 20,
    marginLeft: 20,
    overflow: "hidden",
  },
  selectedImageContainer: {
    width: 100,
    height: 100,
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  flatListContainer: {
    width: "95%",
    height: 120,
    backgroundColor: "#DCDCDC88",
    marginBottom: 40,
    borderRadius: 20,
    alignItems: "center",
    paddingRight: 15,
  },
});
