import React from "react";
import carsActions from "../../redux/actions/carsActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import CarOne from "../components/CarOne";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Home(props) {

  let { getCars } = carsActions

  let dispatch = useDispatch()

  const { cars } = useSelector((state)=> state.cars)
  
  useEffect(()=>{
    dispatch(getCars())
    
  },[])
  return (
    <ScrollView style={styles.container}>
      {cars.map((car) => {
        return <CarOne car={car} navigation={props.navigation}></CarOne>;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.550)",
    width: 420,
    height: windowHeight,
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 710,
  },
  text: {
    color: "#eee",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },

  barSeparate: {
    backgroundColor: "black",
    height: 18,
  },

  text5: {
    color: "#eee",
    fontSize: 15,
    fontWeight: "light",
    margin: 4,
    textAlign: "center",
  },

  decored: {
    color: "#cef10a",
  },

  secondarytexthome: {
    color: "#1a1a1a",
    fontSize: 40,
    lineHeight: 65,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  logo: {
    height: 130,
    width: 130,
    marginRight: 12,
  },

  contenedorGaleria: {
    marginBottom: 35,
    marginTop: 35,
  },
  ButtonDetails: {
    width: "50%",
    height: 50,
    backgroundColor: "#24262B",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  ContainerButtonDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  TextButtonDetails: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
