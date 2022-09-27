import PushNotificationIOS from '@react-native-community/push-notification-ios';

const showNoti = (title, message) => {
  PushNotificationIOS.addNotificationRequest({
    title: title,
    body: message,
    id: '123',
  });
};

const getCorrectDate = minutes => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(16);
  date.setMinutes(minutes);
  return date;
};

function setNotiSchedule(minutes) {
  console.log('run schedule');
  PushNotificationIOS.addNotificationRequest({
    title: 'alarm',
    body: 'time up',
    fireDate: getCorrectDate(minutes),
    repeats: true,
    repeatsComponent: {
      hour: true,
      minute: true,
    },
    id: '0',
  });
}

// PushNotification.createChannel(
//   {
//     channelId: 'channel-id', // (required)
//     channelName: 'My channel', // (required)
//     channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
//     playSound: false, // (optional) default: true
//     soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//     importance: 4, // (optional) default: 4. Int value of the Android notification importance
//     vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
//   },
//   created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
// );

export {showNoti, setNotiSchedule};
