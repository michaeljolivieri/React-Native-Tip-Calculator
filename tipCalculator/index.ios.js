/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Slider
} from 'react-native';

export default class tipCalculator extends Component {
    state = {
        amountTotal: 0,
        tipPercentage: 0.15,
        tipTotal: 0
        split: 1
        amountPerPerson: 0
    };
    
    calculateTip(value) {
        console.log(value);
        this.state.amountTotal = value;
        this.state.tipTotal = value * this.state.tipPercentage;
        this.setState(this.state);
    }
    
    
    render() {
        return (
          <View style={styles.container}>
            <Text>
                Amount Total:
            </Text>
            <TextInput 
                style={styles.textInput}
                onChangeText={this.calculateTip.bind(this)}>
            </TextInput>
            <View>
                <Text>
                    Split Amongst {this.state.split}:
                </Text>
                <Slider 
                    maximumValue={10}
                    minimumValue={1}
                    step={1}
                    value={this.state.split}
                    style={styles.slider}
                    onValueChange={this.splitBill.bind(this)}
                />
            </View>
            <Text>
                Total Tip:
            </Text>
            <Text style={styles.amount}>
                ${this.state.tipTotal.toFixed(2)}
            </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      textInput: {
        textAlign: 'left',
        color: '#333333',
        margin: 5,
        height: 50,
        borderColor: '#60b7e2',
        borderWidth: 1  
      },
      amount: {
        fontWeight: 'bold',
        textAlign: 'left'
      },
      slider: {
        margin: 5,
        height: 40
      }

    
});

AppRegistry.registerComponent('tipCalculator', () => tipCalculator);
