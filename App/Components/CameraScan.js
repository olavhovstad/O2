import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Linking,
  Button,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import ViewFinder from 'react-native-view-finder';


//oppretter de nødvendige states
export default class App extends React.Component {
  cameraRef = React.createRef();
  state = {
    hasCameraPermission: null,
    isClicked: false,
    cameraPosition:Camera.Constants.Type.back,
  };

  componentDidMount() {
    this.updateCameraPermission();
  }

  //setter status til granted, hvis vi har permission til camera
  updateCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }


 
  handleChangeCamera = () => {
      if(this.state.isClicked){
        this.setState({cameraPosition:Camera.Constants.Type.front})
        this.setState({isClicked:false})
      }else{
        this.setState({cameraPosition:Camera.Constants.Type.back})
        this.setState({isClicked:true})
      }
      console.log(this.state)
    }
  

//åpner settings på mobilen
  handleSettingLink = () => {
    Linking.openSettings()
  }

  //hvis kamera ikke er tilgjengelig kaller vi på handlesettingLink.
  renderCameraView() {
    const { hasCameraPermission, type } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    }
    if (hasCameraPermission === false) {
      return (
          <View>
            <Text>No access to camera.</Text>
            <Button title='Get permission to access camera' onPress={this.handleSettingLink}/>
          </View>
      );
    }
    //returnerer her hvis vi har tilgang til kamera
       /*Camera - styrer posisjon + samt viewfinder som fremtidig vil inneholde funksjon til å
        scanne tall ved bruk av kamera.*/
    return (

        <View>
          <Camera
              style={styles.cameraView}
      
              type={this.state.cameraPosition}
              ref={this.cameraRef}>
           <ViewFinder color='white'/> 
            <Button title="switch camera" onPress={this.handleChangeCamera}/>
          </Camera>

        </View>
    );
  }


  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.cameraContainer}>{this.renderCameraView()}</View>
        </SafeAreaView>
    );
  }

}







const containerStyle = {
  padding: 5,
  borderRadius: 1,
  margin: 4,
  borderWidth: 1,
  flex: 1
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  Flatlist_render:{
    width:'100%'
  },
  cameraContainer: {
    // Her pakkes fælles style ud
    ...containerStyle,
    

  },
  cameraView: {
    aspectRatio: 0.57,
     

  },
 

});
