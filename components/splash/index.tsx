import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import animation from '@/assets/images/splash-ease.json'

const AnimatedSplash = () => {
  return (
    <View className=''>
     <LottieView
     style={{
        height:300,
     }}
     source={animation}
     autoPlay
     speed={1}
     loop
     />
    </View>
  )
}

export default AnimatedSplash