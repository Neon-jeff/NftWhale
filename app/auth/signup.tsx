import { Keyboard, KeyboardAvoidingView, Platform, Pressable, View } from 'react-native'
import React from 'react'
import SignupForm from '@/components/form/signupform'
import { Text } from '@/components/ui/text'
import { Image } from 'expo-image'
import head from '@/assets/images/onboarding/head.jpeg'
import WhaleLogo from '@/components/logo/logo'

const SignupScreen = () => {
  return (
    <Pressable className='flex-1 pt-20  justify-center relative   bg-black px-5' onPress={()=>Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <WhaleLogo/>
        <View className='pt-5 gap-1  justify-end'>
            <Text className='text-gray-300 text-3xl font-semibold'>Create an account</Text>
            <Text className='text-gray-400 text-sm'>Create your NFT to get started</Text>
        </View>
      <SignupForm/>
      </KeyboardAvoidingView>
    </Pressable>
  )
}

export default SignupScreen