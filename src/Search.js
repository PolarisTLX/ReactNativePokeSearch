import React from 'react';
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input, Button} from 'native-base';

import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';

class Search extends React.Component{

  state = {
    pokesearch: "",
    onCall: true
  }

  searchPoke = () => {

  }

  renderBody = () => {
    if (this.state.onCall) {
      return(
        <PokeLoader />
      )
    } else {
      return(
        <SearchBody />
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
