import PushNotificationIOS from '@react-native-community/push-notification-ios';

const showNoti = (title, message) => {
  PushNotificationIOS.addNotificationRequest({
    title: title,
    body: message,
    id: '123',
  });
};

const getCorrectDate = (hour, minutes) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(hour);
  date.setMinutes(minutes);
  return date;
};

function setNotiSchedule(hour, minutes) {
  alert(`Active On ! Notification will popup at ${hour}:${minutes}`);
  PushNotificationIOS.addNotificationRequest({
    title: 'Alarm ⏱',
    body: `Now is at ${hour}:${minutes}`,
    fireDate: getCorrectDate(hour, minutes),
    repeats: true,
    repeatsComponent: {
      hour: true,
      minute: true,
    },
    id: '0',
  });
}

function cancelPendingNoti() {
  alert('Alarm ⏱ is off');
  PushNotificationIOS.removeAllPendingNotificationRequests();
}

export {showNoti, setNotiSchedule, cancelPendingNoti};
