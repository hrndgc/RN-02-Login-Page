import React from 'react';
import {SafeAreaView, Image, View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image source={require("./images/shopping.png")} style={{width:150, height:150}}/>
        </View>

        <View>
          <TextInput style={styles.inputContainer} placeholder='Username or email' keyboardType='email-address'/>
          <TextInput style={styles.inputContainer} placeholder='Password'/>

          <Text style={styles.password}>Forgot password?</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontSize: 16,}}>Log In</Text>
          </TouchableOpacity>

          <Text style={{color: 'black', alignSelf: 'center', padding: 10, fontWeight: 'bold'}}>OR</Text>
          <Text style={styles.facebook}>Log In With Facebook</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontSize: 16,}}>Create New Account</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff8c00",
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,

  },
  inputContainer: {
    padding: 8,
    margin: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    marginTop:10,
    borderColor: 'white',
    backgroundColor: "#4169e1",
    borderRadius: 10,
    fontSize: 14,
  },
  password: {
    color: 'blue', 
    alignSelf: 'flex-end', 
    padding: 2, 
    margin: 10,
    textDecorationLine: 'underline',
  },

   facebook: {
     fontSize: 18,
     color: 'blue', 
     alignSelf: 'center', 
     padding: 5, 
     
   }

})

export default App;