import React from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';

const WebViewComponent = () => {
  return (
    <View style={{flex: 1}}>
      <WebView
        onMessage={event => {
          alert(event.nativeEvent.data);
        }}
        source={{uri: 'http://localhost:3000/'}}
      />
    </View>
  );
};

export default WebViewComponent;
