import { View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import { Redirect } from 'expo-router'

const Index = () => {
  if(true){
    return <Redirect href='/onboarding' />
  }
  return (
    <View className='p-10'>
      <Text className='text-4xl mt-10 '>Index page</Text>
    </View>
  )
}

export default Index