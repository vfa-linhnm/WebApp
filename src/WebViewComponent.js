import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
import {showNoti, setNotiSchedule, cancelPendingNoti} from './Notifications';

const WebViewComponent = () => {
  const _handleEvent = event => {
    JSON.parse(event.nativeEvent.data) === false
      ? setNotiSchedule(13, 40)
      : cancelPendingNoti();
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        onMessage={event => _handleEvent(event)}
        source={{uri: 'http://192.168.1.4:3000'}}
      />
    </View>
  );
};

export default WebViewComponent;
