import { Platform, StyleSheet} from 'react-native';
import HomeScreen from './HomeScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';
import {AntDesign} from '@expo/vector-icons'

export default function App() {
  const Stack = createNativeStackNavigator();



  return (
 <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen
    name="Home"
    component={HomeScreen} 
    options={{
      title:'Home',
      headerTitle: 'Home',
    }}
    />

  <Stack.Screen
    name="Todo"
    component={DetailsScreen} 
    options={{
      title:'Todo',
      headerTitle: 'TODO-list',
    }}
    />
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
