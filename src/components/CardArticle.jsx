import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import itemsActions from "../../redux/actions/itemsActions";
export default function CardArticle(props) {
  let { getItems } = itemsActions;
  let dispatch = useDispatch();
  const {items} = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <>
       {items.map((item) => {
        return (
          <View style={styles.cardBestSeller09}>
            <Image
              source={{
                uri: item.picture_url,
              }}
              resizeMode="cover"
              style={styles.imagefondo}
            ></Image>
            <Text>{item.title}</Text>
            <Pressable style={styles.buttonshop09}  onPress={() => props.navigation.navigate('DetailsArticle', item._id)}>
              <Text style={styles.textButton}>Shop Now</Text>
            </Pressable>
          </View>
        )
      })}
    </>
  );
}

const styles = StyleSheet.create({
  imagefondo: {
    objectFit: "cover",
    height: "75%",
    width: "80%",
    borderRadius: 5,
  },
  textButton: {
    textAlign: "center",
  },
  cardBestSeller09: {
    backgroundColor: "rgb(247, 247, 247)",
    width: 320,
    height: 500,
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonshop09: {
    backgroundColor: "#eeeeeb",
    /*   font-family: "Montserrat", sans-serif, */
    color: "rgb(39, 38, 38)",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    width: 300,
    padding: 12,
    borderRadius: 5,
    border: "none",
    marginRop: 32,
  },
});
