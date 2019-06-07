import React from 'react';
import { Text, View, Platform, ImageBackground } from 'react-native';
import { Button } from 'native-base';

import Landing from './src/Landing.js';
import Search from './src/Search.js';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

export default class App extends React.Component {

  state = {
    currentScreen: 'search'
  }

  switchScreen = (currentScreen) => {
    this.setState({currentScreen});
  }

  renderScreen = () => {
    if (this.state.currentScreen === "landing"){
      return(<Landing switchScreen={this.switchScreen}/>)
    } else if (this.state.currentScreen === "search"){
      return(<Search/>)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
};
