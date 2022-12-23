import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Hoverable, ScrollView } from "react-native-web-hover";
import less from "../../assets/less.png";
import plus from "../../assets/plus.png";
/* import {useNavigation} from '@react-navigation/native' */
import cartActions from "../../redux/actions/cartActions";
/*  function botonclickeable (){
    const navigation = useNavigation()
 } */
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
export default function Cart(props) {
  let { id, logged } = useSelector((store) => store.usuario);
  let dispatch = useDispatch();
  let { getItemsInCart, deleteItems, increaseDecreaseQuantity } = cartActions;

  async function getItemsInCartMap() {
    await dispatch(getItemsInCart());
  }
  useEffect(() => {
    getItemsInCartMap();
  }, []);
  let { itemsInCart } = useSelector((store) => store.cart);
  console.log(itemsInCart);
  let itemsFiltered = itemsInCart.filter((items) => items.userId === id);
  let precio = []


  itemsInCart.map((x)=>{
    precio.push(x.unit_price * x.quantity)
  })  
  let total = precio.reduce(
    (sum, item) => sum + item,
    0
  )
  return (
    <ScrollView>
      {itemsInCart.length == 0 ? (
        <>
          <View>
            <Text style={styles.primerTexto}>Cart</Text>
          </View>
          <View style={styles.containerButtonandText}>
            <Text style={styles.textTwo}>Your cart is empty.</Text>
            <Pressable
              onPress={() => props.navigation.navigate("Shop")}
              style={({ hovered, focused, pressed }) => [
                styles.buttonRoot,
                hovered && styles.buttonHovered,
                focused && styles.buttonFocused,
                pressed && styles.buttonPressed,
              ]}
            >
              {({ hovered, focused, pressed }) => (
                <View style={styles.buttonInner}>
                  <Text style={styles.buttonLabel}>{}</Text>
                </View>
              )}
            </Pressable>

            <Hoverable>
              {({ hovered }) => (
                <Button
                  title="Continue shopping"
                  color={hovered ? "black" : "#cef10a"}
                />
              )}
            </Hoverable>
          </View>
        </>
      ) : 
     ( itemsInCart.map((x) => {
        return (
          <View style={styles.cartItem}>
            <Image
              source={{ uri: x.picture_url }}
              style={styles.imageEachitem}
            />
            <View style={styles.containerEachitem2}>
              <Text style={styles.title}>{x.title}</Text>
              <Text style={styles.descriptionTittle}>Quantity</Text>
              <View style={styles.quantityContainer}>
                <Image source={less} style={styles.quantytiItems} />
                <Text style={styles.descriptionTittle}>1</Text>
                <Image source={plus} style={styles.quantytiItemss} />
              </View>
              <Text style={styles.price}>${x.unit_price}</Text>
            </View>
          </View>
        );
      }))}
     <View style={styles.cartSection} >
         <View style={styles.cartSum}>
          <Text style={styles.textSum}>Calculated at checkout</Text>
        </View> 
        <View style={styles.cartSum} >
          <Text style={styles.negrita} >${total}</Text>
        </View>
        <Pressable
              /* onPress={() => props.navigation.navigate("Shop")} */
              style={({ hovered, focused, pressed }) => [
                styles.buttonRoot,
                hovered && styles.buttonHovered,
                focused && styles.buttonFocused,
                pressed && styles.buttonPressed,
              ]}
            >
              {({ hovered, focused, pressed }) => (
                <View style={styles.buttonInner}>
                  <Text style={styles.buttonLabel}>{}</Text>
                </View>
              )}
            </Pressable>

            <Hoverable>
              {({ hovered }) => (
                <Button
                  title="Checkout"
                  color={hovered ? "black" : "#cef10a"}
                />
              )}
            </Hoverable>  
       {/*  <View>
            <button  onClick={payment} style={styles.checkoutBtn}>Checkout</button> 
        </View> */}
    </View> 
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cartSection:{
    marginTop:50,
    width: "100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
/*   cartSum:{
    width:"100%",
    height:100,
    display:"flex",
  }, */
  textSum:{
    fontSize:20,
    fontWeight:"600",
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 30,
  },
  price: {
    textAlign: "center",
    width: "100%",
    height: "20%",
  },
  containerEachitem2: {
    width: "45%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionTittle: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  quantityContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
  },
  quantytiItems: {
    height: 25,
    marginRight: 10,
  },
  quantytiItemss: {
    height: 25,
    marginLeft: 10,
  },
  cartItem: {
    width: windowWidth,
    height: 200,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageEachitem: {
    width: "50%",
    height: 200,
  },
  primerTexto: {
    fontSize: 36,
    marginTop: 50,
    marginLeft: 60,
  },
  containerButtonandText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 40,
  },
  textTwo: {
    marginBottom: 10,
    fontSize: 20,
  },
});
