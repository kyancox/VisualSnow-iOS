import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'
import { MaterialIcons, Fontisto } from '@expo/vector-icons'
import { TabBarIcon } from '@/components-example/navigation/TabBarIcon'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA500",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: '#08080f',
            height: 94,
          },
        }}
      >
        <Tabs.Screen
          name='community'
          options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  borderRadius: 35,
                  backgroundColor: focused ? '#FFFFFF' : '#08080f',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className='w-11 h-11'
              >
                <MaterialIcons name='reddit' color={color} size={30} />
              </View>
            )
          }}
        />
        <Tabs.Screen
          name='chatbot'
          options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  borderRadius: 35,
                  backgroundColor: focused ? '#FFFFFF' : '#08080f',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className='w-11 h-11'
              >
                <MaterialIcons name='chat-bubble-outline' color={color} size={30} />
              </View>
            )
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: '',
            headerShown: false,
            tabBarActiveTintColor: '#000000',
            tabBarIcon: ({ color }) => (
              <View
                className='-top-5 h-20 rounded-full'
                style={{
                  backgroundColor: '#FFA500'
                }}
              >
                {/* <Fontisto/> */}
                <MaterialIcons name='add' color={color} size={77} />
              </View>
            )
          }}
        />
        <Tabs.Screen
          name='log'
          options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  borderRadius: 35,
                  backgroundColor: focused ? '#FFFFFF' : '#08080f',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className='w-11 h-11'
              >
                <MaterialIcons name='library-books' color={color} size={30} />
              </View>
            )
          }}
        />
        <Tabs.Screen
          name='resources'
          options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  borderRadius: 35,
                  backgroundColor: focused ? '#FFFFFF' : '#08080f',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className='w-11 h-11'
              >
                <MaterialIcons name='menu' color={color} size={30} />
              </View>
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout