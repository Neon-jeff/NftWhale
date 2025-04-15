import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { size } from '@/constants/sizes'

function NFTCard({name,image}:{name:string,image:string}) {
    return (
        <View className='mr-5 rounded-xl bg-neutral-900/40 p-2   gap-5 border border-gray-100/5' style={{height:size.screen.height*.23,width:size.screen.width*0.45}}>
        <Image source={image} style={{ width: '100%', borderRadius: 10, height: '70%' }} recyclingKey={name}/>
        <View className='w-11/12   flex-row rounded-full py-1 self-center items-center justify-between '>
        <View>
        <Text className='text-gray-400 text-sm font-extrabold '>
              {name}
            </Text>
          <Text numberOfLines={1} className='text-gray-600 text-xs pt-1'>
            @Unwavering deepie
          </Text>
        </View>
          <View>
            <Text className='text-gray-400 text-sm font-extrabold'>0.07Eth</Text>
            <Text numberOfLines={1} className='text-gray-600 text-xs pt-1'>
            0/2 sold
          </Text>
          </View>
          {/* <Pressable className='p-2 bg-black rounded-full'>
            <ArrowUpRight size={18} color={'lightgray'} />
          </Pressable> */}
        </View>
      </View>
    )
  }

  export default NFTCard