import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {IMAGE} from './constants/images'

export default class App extends Component {

  render()
  {
    let {container,imageStyle,textStyle,viewTextStyle} = styles;
    return (
      <View style={container}>


        <Image source={IMAGE.ICON_CIRCLE} style={imageStyle}/>

        <View style={viewTextStyle}>

          <Text style={textStyle}>{'Text Demo'}</Text>
        </View>

      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle:{
    width: 200,
    height: 200
  },
  viewTextStyle:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue'
  },
  textStyle:{
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white'
  }
});
