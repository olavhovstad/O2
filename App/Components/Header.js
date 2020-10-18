import React, { Component } from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';


//Header til currency listen
class Header  extends Component {
    render(){
        return(
    //henter bilde fra asset mappen, samt tilhørende styling
    <ImageBackground
    
    accessibilityRole={'image'}
    source={require('/Users/olavhovstad/Desktop/5 Semester/INNT/react-projects/Oblig/O2/assets/money.png')}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>CurrencyScan</Text>
  </ImageBackground>
        )
  }

}
 
const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
});

export default Header;