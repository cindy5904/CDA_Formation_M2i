import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/redux/store'
import MyId from './component/MyId'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import idPage from './screens/idPage'
import Btn from './screens/Btn'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='idPage' component={idPage}/>
            <Tab.Screen name='Btn' component= {Btn}/>
        </Tab.Navigator>
      </NavigationContainer>
    {/* <View>
      <Text>App</Text>
      <MyId />
    </View> */}
    </Provider>
    
  )
}

const styles = StyleSheet.create({})