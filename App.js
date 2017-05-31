import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Get set GO!</Text>
          <Image
              style={{width: 150, height: 150}}
              source={{uri: 'https://img-new.cgtrader.com/items/652259/097635deb6/rock-mountain-501-3d-model-low-poly-obj-fbx-blend.jpg'}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
