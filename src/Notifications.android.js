import PushNotification from 'react-native-push-notification';

const showNoti = (title, message) => {
  PushNotification.localNotification({
    title: title, // (optional)
    message: message, // (required)
    channelId: 'channel-id',
  });
};

function getCorrectDate(hour, minutes) {
  const date = new Date();
  date.setDate(date.getDate());
  date.setSeconds(0);
  date.setHours(hour);
  date.setMinutes(minutes);
  return date;
}

function setNotiSchedule(hour, minutes) {
  alert(`Active On ! Notification will popup at ${hour}:${minutes}`);
  PushNotification.localNotificationSchedule({
    id: '123',
    title: 'TIME UP',
    channelId: 'channel-id',
    message: `${hour}:${minutes}`, // (required)
    date: getCorrectDate(hour, minutes),
    allowWhileIdle: false,
  });
}

PushNotification.createChannel(
  {
    channelId: 'channel-id', // (required)
    channelName: 'My channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: true, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

function cancelPendingNoti() {
  alert('Alarm ⏱ is off');
  PushNotification.cancelLocalNotification('123');
}
export {showNoti, setNotiSchedule, cancelPendingNoti};
