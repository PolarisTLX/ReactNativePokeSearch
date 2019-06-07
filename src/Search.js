import React from 'react';
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input, Button} from 'native-base';

import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';

import axios from 'axios';

class Search extends React.Component{

  state = {
    pokeSearch: "",
    onCall: true,
    data: {}
  }

  searchPoke = () => {
    this.setState({onCall: true});

    let self = this;  //needed for "this" to work inside the axios function!!!

    axios.get("https://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
    .then(function(response) {
      // console.log(response.data);
      self.setState({data: response.data});
      self.setState({onCall: false});
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  renderBody = () => {
    if (this.state.onCall) {
      return(
        <PokeLoader />
      )
    } else {
      return(
        <SearchBody data={this.state.data} />
      )
    }
  }

  render() {
    return(
      <View style={styles.searchViewStyle}>
        <Header
          searchBar={true}
          rounded={true}
        >
          <Item>
            <Icon
              name="ios-search"
              onPress={this.searchPoke}
            />
            <Input
              value={this.state.pokeSearch}
              placeholder="Search for Pokemon"
              onChangeText={(pokeSearch)=> this.setState({pokeSearch})}
            />
          </Item>
        </Header>
        {this.renderBody()}
      </View>
    )
  }
}

export default Search;

const styles = {
  searchViewStyle: {
    flex: 1
  }
}
