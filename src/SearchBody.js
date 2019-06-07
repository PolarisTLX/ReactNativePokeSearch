import React from 'react';
import { View, Text, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';
import { ListItem, List } from 'native-base';

// let height = Dimensions.get('windows').height;
// let width = Dimensions.get('windows').width;

class SearchBody extends React.Component {
  render(){

    let pokemon = this.props.data;

    if (!pokemon) {
      return(<View/>)
    } else {
      return(
        <ImageBackground
          style={styles.backgroundImage}
          source={{uri: "http://pokemongolive.com/img/posts/raids_loading.png"}}
        >
          <ScrollView style={{flex: 1}}>
            <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
            <View style={styles.viewStyle}>
              <Image
                source={{uri: pokemon.sprites.front_default}}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.info}>
              <ListItem itemDivider>
                <Text style={{fontWeight: 'bold'}}>Size</Text>
              </ListItem>
              <ListItem>
                <Text>Weight: {pokemon.weight} kg</Text>
              </ListItem>
              <ListItem>
                <Text>Height: {pokemon.height*10} cm</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text style={{fontWeight: 'bold'}}>Abilities</Text>
              </ListItem>
              <List
                dataArray={pokemon.abilities}
                renderRow={(item)=>
                    <ListItem>
                      <Text>{item.ability.name}</Text>
                    </ListItem>
                }
              >
              </List>
            </View>
          </ScrollView>
        </ImageBackground>
      )
    }
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  header: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  imageStyle: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.8
  }
}

export default SearchBody;
