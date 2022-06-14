import React from 'react';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </View>
  )
}

export default App
