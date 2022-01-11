/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
        }}>
        <Text style={{color: 'black'}}>
          Hello, this example reproduces{' '}
          <Text style={{fontWeight: 'bold'}}>
            idb-keyval [Possible Unhandled Promise Rejection (id: 0):
            ReferenceError: Can't find variable: indexedDB]
          </Text>{' '}
          issue.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
