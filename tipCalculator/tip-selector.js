import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS
} from 'react-native';

class TipSelector extends Component {
    state = {
        values: ['OK 15%', 'Good 18%', 'Great 20%', 'Wow 25%'],
        selectedIndex: 0
    }
    
    render () {
        return (
            <View>
            <SegmentedControlIOS
            values={['OK 15%', 'Good 18%', 'Great 20%', 'Wow 25%']}
            selectedIndex={this.state.selectedIndex}
            onChange={(event) => {
                this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
            }}
            tintColor={"#60b7e2"}
            style={styles.segmentedControl}
            />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    segmentedControl: {
        margin: 10,
        marginTop: 20,
        height: 50
    }
})

export default TipSelector;