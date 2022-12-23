import { View, Text, ScrollView,StyleSheet,Image,Dimensions,Alert, Pressable } from "react-native";
import React,{useEffect,useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from "../api/url";
import cartActions from "../../redux/actions/cartActions"; 
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function DetailsArticle(props) {
  let id = props.route.params;
  let { addToCart } = cartActions
  let { itemsInCart } = useSelector((store) => store.cart)
  console.log('itemmmsssCAAAARTSSSS')
  console.log(itemsInCart);
  console.log('itemmmsssCAAAARTSSSS')
  let dispatch = useDispatch()
  let [filter, setFilter] = useState([])
  async function detailItem() {
      await axios.get(`${BASE_URL}items`)
      .then(response=>setFilter(response.data.response.find((x)=>x._id === id)))
    }
    useEffect(()=> {
      detailItem()
    },[id]) 
    /*  console.log(filter);  */
  let { title, picture_url, description, unit_price } =  filter ;
  console.log('filtereeeeeeeee')
  console.log(filter);
  console.log('filtereeeeeeeee')
  
  async function addToCartBtn() {

      let data = {
          title,
          unit_price,
          picture_url,
          id,
      }
      console.log('dataaaaaaaaaa')
      console.log(data);
      console.log('dataaaaaaaaaa')
      try {
        let res = await dispatch(addToCart(data))
        console.log('reeeessssssssssssssss')
        console.log(res.payload);
        console.log('reeeessssssssssssssss')
        Alert.alert('Added to the cart')
      } catch (error) {
        Alert.alert('no ?')
      }

     /*  console.log(data); */
  }
  return (
    <ScrollView style={styles.containerEachitem} contentContainerStyle={{ alignItems: 'center' }}>
    <Image source={{uri: picture_url}} style={styles.imageEachitem}/>
    <Text style={styles.textTitleEachitem}>{title}</Text>
      <View style={styles.itemDescriptionContainerr} >
        <Text  style={styles.textEachitemPrice}>Price: ${unit_price}</Text>
        <Pressable style={styles.buttonEachitemCart}> 
        <Text style={styles.textButton} onPress={addToCartBtn}>Add to cart</Text></Pressable>
      </View>
      <Text style={styles.descriptionTittle}>Description</Text>
        <Text  style={styles.containerEachitem3}>{description}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  textButton:{
    color:"white",
  },
  containerEachitem3:{
    width: windowWidth-20,
    textAlign:"center",
    marginBottom:40,
  },

  containerEachitem:{
    width: windowWidth,
    backgroundColor: "#F8F8F8",
    display: "flex",
    marginBottom:20,
  },
imageEachitem:{
    width:windowWidth,
    height:windowHeight,
    objectFit: "contain",
    marginTop: 70,
},
textTitleEachitem:{
  fontSize:20,
  fontWeight: "600",
},
itemDescriptionContainerr:{
    width: windowWidth,
    height:100,
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
},
buttonEachitemCart:{
    backgroundColor: "#3457B1",
    width:100,
    height:40,
    padding: 10,
    borderRadius: 8,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontWeight: "bold",
    color: "#F8F8F8",
},

textEachitemPrice:{

},
})