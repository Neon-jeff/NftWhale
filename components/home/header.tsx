import { Pressable, View } from 'react-native'
import React from 'react'
import { ProfileIcon } from '../icons'
import { EthereumClassic, Notification } from 'iconsax-react-native'
import { Text } from '../ui/text'

const HomeHeader = () => {
  return (
    <View className=' flex-row px-5 pb-5  border-gray-700/30 justify-between items-center'>
      <View className='flex-row  items-center gap-3'>
        <ProfileIcon />
        <View className='gap-1'>
          <Text className='text-gray-300 '>
            Kyle Andersen
          </Text>

        </View>
      </View>

      <View className='flex-row items-center gap-5'>
        <View className='flex-row items-center gap-1 '>
          <EthereumClassic variant='Bulk' size={20} color='#0ad4a2' />
          <Text className='text-gray-400  font-bold '>0.00 ETH</Text>
        </View>
        <Pressable className='p-3 border bg-gray-900/40  border-gray-700/50 rounded-full'>
          <Notification size={20} color='gray' />
        </Pressable>
      </View>

    </View>
  )
}

export default HomeHeader