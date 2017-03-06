'use strict';



import React, { Component } from 'react';

var {

  StyleSheet,


  View,

  Text,

  TouchableOpacity,

} = React;



class NoNavigatorPage extends Component {

  render() {

    var navigator = this.props.navigator;

    return (

      <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        <TouchableOpacity

          onPress={() => navigator.pop()}>

          <Text style={{color: 'yellow'}}>lol</Text>

        </TouchableOpacity>

      </View>

    );

  }

}



module.exports = NoNavigatorPage;