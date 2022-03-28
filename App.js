import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/welcome';
import Home from './screens/home';
//import AddTask from './screens/addtask';

import { Provider } from "react-redux";
import store from './store/store';

const Stack=createNativeStackNavigator();


const App=()=>{
 return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='welcome' component={Welcome}/>
            <Stack.Screen name='Home' component={Home}/>
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default App;