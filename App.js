import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {createStackNavigator} from '@react-navigation/native-stack'; 

const Stack = createNativeStackNavigator();
//import Menu from './screens/Menu';
//import Coffee from './screens/Coffee'
import CoffeeComponent from './screens/Components/CoffeeComponent';

const App = () =>{
    return(
         <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen
            name="CoffeeComponent"
            component={CoffeeComponent}  
            options={{headerShown:false}}     
          />
        </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;