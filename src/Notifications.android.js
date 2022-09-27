import PushNotification from 'react-native-push-notification';

const showNoti = (title, message) => {
  PushNotification.localNotification({
    title: title, // (optional)
    message: message, // (required)
    channelId: 'channel-id',
  });
};

function getCorrectDate(minutes) {
  const date = new Date();
  date.setDate(date.getDate());
  date.setSeconds(0);
  date.setHours(16);
  date.setMinutes(minutes);
  console.log('date', date);
  return date;
}

function setNotiSchedule(minutes) {
  console.log('run schedule');

  PushNotification.localNotificationSchedule({
    channelId: 'channel-id',
    message: 'time up', // (required)
    date: getCorrectDate(minutes),
    allowWhileIdle: false,
  });
}

PushNotification.createChannel(
  {
    channelId: 'channel-id', // (required)
    channelName: 'My channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: false, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

export {showNoti, setNotiSchedule};
