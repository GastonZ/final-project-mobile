import { View, Text, ScrollView,StyleSheet,Image,Dimensions, Pressable } from "react-native";
import React,{useEffect,useState} from "react";
import axios from "axios";
import { BASE_URL } from "../api/url";
import less from "../../assets/less.png";
import plus from "../../assets/plus.png";  
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
export default function DetailsArticle(props) {
  let id = props.route.params;
  let [filter, setFilter] = useState([])
  async function detailItem() {
      await axios.get(`${BASE_URL}items`)
      .then(response=>setFilter(response.data.response.find((x)=>x._id === id)))
    }
    useEffect(()=> {
      detailItem()
    },[id]) 
     console.log(filter); 
  let { name, picture_url, description, price } =  filter ;
  return (
    <ScrollView style={styles.containerEachitem} contentContainerStyle={{ alignItems: 'center' }}>
    <Image source={{uri: picture_url}} style={styles.imageEachitem}/>
    <Text style={styles.textTitleEachitem}>{name}</Text>
      <View style={styles.itemDescriptionContainerr} >
        <Text  style={styles.textEachitemPrice}>Price: ${price}</Text>
        <View  style={styles.containerEachitem2}>
          <Text style={styles.descriptionTittle}>Quantity</Text>
          <View style={styles.quantityContainer}>
          <Image source={less} style={styles.quantytiItems}/>
          <Text style={styles.descriptionTittle}>1</Text>
          <Image source={plus} style={styles.quantytiItemss}/>
          </View>
        </View>
        <Pressable style={styles.buttonEachitemCart}> 
        <Text style={styles.textButton}>Add to cart</Text></Pressable>
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
  containerEachitem2:{
    width:"20%",
    height:50,
    alignItems:"center",
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
descriptionTittle:{
    color: "black",
    fontSize:16,
    fontWeight: "600",
},
quantityContainer:{
    display: "flex",
    flexDirection:"row"
},
quantytiItems:{
    height: 25,
   marginRight: 10,

},
quantytiItemss:{
    height: 25,
   marginLeft: 10,
},
textEachitemPrice:{

},
})