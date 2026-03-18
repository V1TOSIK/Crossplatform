import { View, Text, Button } from 'react-native';
import * as Sentry from 'sentry-expo';
import * as Amplitude from '@amplitude/analytics-react-native';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  enableInExpoDevelopment: true,
  debug: true,
});

Amplitude.init('YOUR_AMPLITUDE_API_KEY');

export default function Lab13Screen() {

  const crashApp = () => {
    throw new Error("Test Sentry Error 🔥");
  };

  const logEvent = () => {
    Amplitude.track('Button_Clicked', {
      screen: 'Lab13'
    });
    alert('Event відправлено');
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:20, marginBottom:20 }}>
        Lab13 Analytics
      </Text>

      <Button title="💥 Краш (Sentry)" onPress={crashApp} />
      <Button title="📊 Event (Amplitude)" onPress={logEvent} />
    </View>
  );
}