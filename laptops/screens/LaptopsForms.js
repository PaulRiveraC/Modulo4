import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveLaptopRest, updateLaptopRest, deleteLaptopRest } from "../rest_client/laptops";

export const LaptopsForms = ({ navigation, route }) => {
  let laptopRetrieved = route.params.laptopParam;
  let isNew = true;
  if (laptopRetrieved != null) {
    isNew = false;
  }

  const [marca, setMarca] = useState(isNew ? null : laptopRetrieved.marca);
  const [procesador, setProcesador] = useState(
    isNew ? null : laptopRetrieved.procesador
  );
  const [memoria, setMemoria] = useState(
    isNew ? null : laptopRetrieved.memoria
  );
  const [disco, setDisco] = useState(isNew ? null : laptopRetrieved.disco);

  const showMessage = (message) => {
    Alert.alert("Ok,", message);
    navigation.goBack();
  };
  const createLaptop = () => {
    saveLaptopRest(
      { marca: marca, procesador: procesador, memoria: memoria, disco: disco },
      showMessage
    );
  };

  const updateLaptop = () => {
    updateLaptopRest(
      {
        id: laptopRetrieved.id,
        marca: marca,
        procesador: procesador,
        memoria: memoria,
        disco: disco,
      },
      showMessage
    );
  };

  const confirmDelete = () => {
    Alert.alert("Advertencia", "¿Esta seguro que quiere eliminar?", [
      { text: "Si", 
        onPress:deleteLaptop
      },
      {
        text: "Cancelar",
        style: "cancel",
      }]
    );
  };

  const deleteLaptop=()=>{
    deleteLaptopRest({id:laptopRetrieved.id}, showMessage);
  }

  return (
    <View style={styles.container}>
      <Input
        value={marca}
        placeholder="Marca"
        onChangeText={(value) => {
          setMarca(value);
        }}
      />
      <Input
        value={procesador}
        placeholder="Procesador"
        onChangeText={(value) => {
          setProcesador(value);
        }}
      />
      <Input
        value={memoria}
        placeholder="Memoria"
        onChangeText={(value) => {
          setMemoria(value);
        }}
      />
      <Input
        value={disco}
        placeholder="Disco"
        onChangeText={(value) => {
          setDisco(value);
        }}
      />
      <Button title="Guardar" onPress={isNew ? createLaptop : updateLaptop} />
      {isNew ? (
        <View></View>
      ) : (
        <Button title="Eliminar" onPress={confirmDelete} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
