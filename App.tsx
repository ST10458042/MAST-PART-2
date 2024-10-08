import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Chefslogin from './screens/Chefslogin';
import Menu from './screens/Menu';
import FullMenu from './screens/FullMenu';
import Menumodal from './screens/modal';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName='Home'>
  <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
  <Stack.Screen name='Chefslogin' component={Chefslogin} options={{headerShown: false}}/>
  <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}}/>
  <Stack.Screen name='FullMenu' component={FullMenu} options={{headerShown: false}}/>
  <Stack.Screen name='Menumodal' component={Menumodal} options={{headerShown: false}}/>

</Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
