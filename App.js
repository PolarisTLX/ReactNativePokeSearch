import React from 'react';
import { Text, View, Platform, ImageBackground } from 'react-native';
import { Button } from 'native-base';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

let myBackground = require('./assets/landing.jpg');

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={myBackground} style={{height: '100%', width: '100%'}}>
          <Text>Open up App.js to start working on your app!</Text>
          <Button><Text>   Hello World   </Text></Button>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
};
