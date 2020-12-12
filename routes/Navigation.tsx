import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AstroidSearch from '../screens/AstroidSearch'
import Astroid from '../screens/Astroid'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='AstroidSearch'
          component={AstroidSearch}
          options={{
            title: 'Astroid Search',
            headerStyle: {
              backgroundColor: '#e67e22'
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTintColor: '#fff'

          }}
        />
        <Stack.Screen
          name='Astroid'
          component={Astroid}
          options={{
            title: 'Astroid Details',
            headerStyle: {
              backgroundColor: '#e67e22'
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTintColor: '#fff'

          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

