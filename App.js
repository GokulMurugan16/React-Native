import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
const [name, setname] = useState("")
const [dispNAme, setDispName] = useState("Nothin")
  return (
    <View style={styles.container}>
      <Image source ={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width:200, height:200 }}/>
      <TextInput onChangeText = {name => setname(name)}  placeholder = "Type Here" style = {{textAlign:"center", borderColor:'gray', borderWidth:2, borderRadius:10, padding:20, marginBottom:20}}/>
      <Button onPress={()=>{
        setDispName(name)
      }}
      title = "Change Text"/>

      <Text>
        {name}
      </Text>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
