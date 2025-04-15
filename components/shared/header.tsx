import { Pressable, View } from 'react-native'
import React from 'react'
import { ProfileIcon } from '../icons'
import { EthereumClassic, Notification, Profile, Wallet } from 'iconsax-react-native'
import { Text } from '../ui/text'

const SharedHeader = () => {
  return (
    <View className=' flex-row pt-2  border-gray-700/30 justify-end  items-center'>
      <View className='flex-row bg-gray-500/10 items-center gap-5 p-3 rounded-full  '>
        <View className='flex-row items-center gap-1 '>
          <Profile variant='Bulk' size={20} color='gray' />
          <Text className='text-gray-500 text-sm font-bold '>0x2345...HY7</Text>
        </View>
        {/* <Pressable className=''>
          <Wallet size={20} color='gray' />
        </Pressable> */}
      </View>

    </View>
  )
}

export default SharedHeader