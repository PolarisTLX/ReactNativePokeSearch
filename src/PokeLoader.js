import React from 'react';
import { View, Text, Image } from 'react-native';

class PokeLoader extends React.Component {
  render(){
    return(
      <View style={{flex: 1}}>
        <Text>We are loading...</Text>
        <Image
          source={{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
          style={styles.loaderImageStyle}
        />
      </View>
    )
  }
}

const styles = {
  loaderImageStyle: {
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default PokeLoader;
