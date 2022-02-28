/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';

import {
  View,
  StyleSheet,
  Button

} from 'react-native';

import ImagePicker from 'react-native-image-picker';


const App = () => {
  const pickImage = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
   };
   ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        ); 
        alert(response.customButton);
      } else {
        console.log(response.uri)
      }
      
      
      // else {
      //   setFilePath(response);
      // }
   });
  }

  return (
    <View>
      <Button title="Pick Image" onPress={pickImage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default App;
