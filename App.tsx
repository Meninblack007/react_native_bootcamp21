import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList } from './src/global'
import Home from './src/homepage'
import ProductList from './src/listpage'
import ProductDescription from './src/descpage'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name={'home'} component={Home} options={{ headerShown: false }} />
                <Stack.Screen name={'list'} component={ProductList} options={{ title: 'Product List' }} />
                <Stack.Screen
                    name={'description'}
                    component={ProductDescription}
                    options={{ title: 'Product Description' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
