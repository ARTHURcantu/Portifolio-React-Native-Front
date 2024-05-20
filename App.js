//imports de bibliotecas
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//imports de funções proprias
import Home from './screens/Imagens';
import Projeto from './screens/projetos';
import CadastrarProjeto from './screens/Criaprojeto.js';
import CadastrarImagem from './screens/Criaimagem.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const createNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='CriarImagem'
        component={CadastrarImagem}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='CriarProjeto'
        component={CadastrarProjeto}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Imagens" component={Home} />
    <Tab.Screen name="Projetos" component={Projeto} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='mainTabs'
        component={MainTabs}
        options={{
          headerShown: false
        }} />
        <Stack.Screen
        name='Creates'
        component={createNavigator}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
