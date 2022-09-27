/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Button, View} from 'react-native';

import PushNotification from 'react-native-push-notification';
import {showNoti, setNotiSchedule} from './src/Notifications';
import WebViewComponent from './src/WebViewComponent';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <SafeAreaView style={{}}>
      <View style={{position: 'absolute', top: 130, zIndex: 2, opacity: 1}}>
        <Button title="active" onPress={() => showNoti('hi', 'good morning')} />
        <Button title="schedule" onPress={() => setNotiSchedule(25)} />
        <Button
          title="cancel"
          onPress={() => PushNotification.cancelAllLocalNotifications()}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'pink',
        }}>
        <WebViewComponent />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
