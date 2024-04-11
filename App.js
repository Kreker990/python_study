import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/pages/Welcome';
import TabbarNav from './src/pages/navigation/TabbarNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createStackNavigator();

const welcomePage = 'welcomePage'
const tabbar = 'tabbar'

export default function App() {
  return (
    <Provider style={styles.container} store={store}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={welcomePage} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={welcomePage} component={Welcome} />
          <Stack.Screen name={tabbar} component={TabbarNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
