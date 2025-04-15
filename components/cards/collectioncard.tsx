import { View, Text } from 'react-native'
import React from 'react'
import { SharedCardProps } from './types'
import { Image } from 'expo-image'

const CollectionCard = ({ name, image }: SharedCardProps) => {
    return (
        <View className='mb-4 flex-row w-full justify-between items-center rounded-xl bg-neutral-900/40 p-2   gap-5 border border-gray-100/5' >
            <View className='flex-row gap-2 items-center'>
                <Image source={image} style={{ width: 70, borderRadius: 10, height: 70 }} recyclingKey={name} />
                <View>
                    <Text className='text-gray-400 text-sm font-extrabold '>
                        {name}
                    </Text>
                    <Text numberOfLines={1} className='text-gray-600 text-xs pt-1'>
                        @Unwavering deepie
                    </Text>
                </View>
            </View>
            <View>
                <Text className='text-gray-400 text-sm font-extrabold'>0.07Eth</Text>
                <Text numberOfLines={1} className='text-gray-600 text-xs pt-1'>
                    0/2 sold
                </Text>
            </View>
            {/* <View className=' flex-row rounded-full py-1 self-center items-center justify-between '>


                <Pressable className='p-2 bg-black rounded-full'>
      <ArrowUpRight size={18} color={'lightgray'} />
    </Pressable>
            </View> */}
        </View>
    )
}

export default CollectionCard