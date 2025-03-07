import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { Button, ListItem, FAB } from "@rneui/base";
import { getAllLaptops } from "../rest_client/laptops";
import { useState, useEffect } from "react";

export const LaptopsList = ({ navigation }) => {
  const [laptopsList, setLaptopsList] = useState([]);

  useEffect(()=>{
    getAllLaptops(fnRefreshList);
  },[]);
  const LaptopItems = ({ laptop }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("LaptopsFormsNav", {laptopParam:laptop});
        }}
      >
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>
              {laptop.marca} {laptop.procesador}
            </ListItem.Title>
            <ListItem.Subtitle>
              {laptop.memoria} {laptop.disco}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableHighlight>
    );
  };

  const fnRefreshList = (laptops) => {
    setLaptopsList(laptops);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de laptops</Text>
      <FlatList
        data={laptopsList}
        renderItem={({ item }) => {
          return <LaptopItems laptop={item} />;
        }}
      />
      <FAB
        title="+"
        onPress={() => {
          navigation.navigate("LaptopsFormsNav", {});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  titulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
