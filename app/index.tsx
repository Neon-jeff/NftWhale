import { View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import { Redirect } from 'expo-router'
import AnimatedSplash from '@/components/splash'

const Index = () => {
  if(!false){
    return <Redirect href='/(tabs)/explore' />
  }
  return (
    <View className='p-10 flex-1 bg-black justify-center '>
      <AnimatedSplash/>
      <Text className='text-white text-center text-lg font-semibold  -translate-y-24'>
        Open Whale
      </Text>
    </View>
  )
}

export default Index