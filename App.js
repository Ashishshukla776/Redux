
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Store from './Store';
import Login from './src/Redux/Login';

const Stack=createNativeStackNavigator();
function App(){
    return(
        <Provider Store={Store}>
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen name='Login' component={Login}/>
           </Stack.Navigator>
       </NavigationContainer>
       </Provider>
    )
}

export default App;