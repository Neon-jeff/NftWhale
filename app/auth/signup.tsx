import { View } from 'react-native'
import React from 'react'
import SignupForm from '@/components/form/signupform'
import { Text } from '@/components/ui/text'
import { Image } from 'expo-image'
import head from '@/assets/images/onboarding/head.jpeg'

const SignupScreen = () => {
  return (
    <View className='flex-1 pt-32 justify-center relative   bg-black px-5'>

       <View className='h-72 w-full  self-center '>
       <Image source={head} style={{
        aspectRatio:1.4,
        borderRadius:20
       }}
       
       />
       </View>
        <View className='pt-20 gap-1  justify-end'>
            <Text className='text-white text-3xl font-semibold'>Create an account</Text>
            <Text className='text-gray-400 text-sm'>Create your NFT to get started</Text>
        </View>
      <SignupForm/>
    </View>
  )
}

export default SignupScreen