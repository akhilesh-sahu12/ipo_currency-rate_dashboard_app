import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Layout from "./app/home/Layout";
import LoginScreen from "./app/LoginScreen";
import RegistrationScreen from "./app/RegistrationScreen";
import UpcomingIPOs from "./app/dashboard/UpcomingIPOs";
import CurrencyRates from "./app/dashboard/CurrencyRates";
import { AuthProvider } from "./app/context/AuthContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="Home" component={Layout} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="IPOs" component={UpcomingIPOs} />
          <Stack.Screen name="CurrencyRates" component={CurrencyRates} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
