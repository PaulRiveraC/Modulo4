import { View, Text, StyleSheet, FlatList } from "react-native"
import { Button, ListItem } from "@rneui/base"
import { getAllContacts } from "../rest_client/conctactos"
import { useState } from "react"

export const ContactsList = ()=>{

    const [contactsList, setContactsList] = useState([]);

    const ContactItems=({contact})=>{
        return <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{contact.nombre} {contact.apellido}</ListItem.Title>
                    <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
    }

    const fnRefreshList =(contacts)=>{
        setContactsList(contacts);
    }
    return <View>
        <Text style={styles.titulo}>Lista de contactos</Text>
        <Button
            title="Consultar"
            onPress={()=>{
                getAllContacts(fnRefreshList);
            }}
        />
        <FlatList 
            data={contactsList}
            renderItem={({item})=>{
                return <ContactItems contact={item}/>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo:{
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10
    }
  });
  