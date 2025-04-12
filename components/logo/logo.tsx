import { View, Text } from 'react-native'
import React from 'react'
import Logo from '@/assets/images/icons/open-whale.svg'

const WhaleLogo = () => {
  return (
    <View className='opacity-80  p-2 items-center justify-center  rounded-full bg-cyan-950/40 border border-cyan-900/30 w-16 h-16'>
      <Logo height={40} width={40}/>
    </View>
  )
}

export default WhaleLogo