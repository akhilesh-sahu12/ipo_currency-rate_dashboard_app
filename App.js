import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from './app/home/Layout'

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
       <Stack.Navigator initialRouteName="home">
        <Stack.Screen name='Home' component={Layout}/> 
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
