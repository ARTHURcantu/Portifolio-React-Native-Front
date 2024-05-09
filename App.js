//imports de bibliotecas
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//imports de funções proprias
import Home from './screens/Home';
import Teste from './screens/Teste';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="teste" component={Teste} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};