import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button } from 'native-base';

let myBackground = require('./assets/landing.jpg');

class Landing extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={myBackground}
          style={styles.backgroundStyle}
        >
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button
              block={true}
              styles={styles.buttonStyle}
              onPress={() => this.props.switchScreen("search")}
            >
              <Text style={styles.buttonText}> Start Searching... </Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    )
  }
}


const styles = {
  backgroundStyle: {
    height: '100%',
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 30,
    color: 'blue',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    // fontSize: 30,
    // lineHeight: 20,
    // alignSelf: 'center',
    // width: '70%'
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
};

export default Landing;
