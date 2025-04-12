import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/navigation/tabbar'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false,sceneStyle:{backgroundColor:'black',flex:1},tabBarActiveBackgroundColor:'black',}}   tabBar={(props:BottomTabBarProps)=><View className='bg-black h-0 p-0'>
            <TabBar {...props}/>
        </View>} >
            <Tabs.Screen name='home' options={{
                
            }} />
            <Tabs.Screen name='explore'  />
            <Tabs.Screen name='transactions' />
            {/* <Tabs.Screen name='orders' /> */}
            <Tabs.Screen name='account' />
        </Tabs>
    )
}

export default TabsLayout