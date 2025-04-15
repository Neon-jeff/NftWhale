import { ScrollView, View, } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import { FlashList } from '@shopify/flash-list'
import { size } from '@/constants/sizes'
import { cn } from '@/lib/utils'

const HeaderScroller = () => {
    const data =[
        {
            name:"Collections"
        },
        {
            name:"Royalties"
        },
        {
            name:"NFTs"
        },
        {
            name:"Users"
        },
        {
            name:"Projects"
        }
    ]
  return (
    <View className='h-10'>
        <ScrollView className='' contentContainerStyle={{gap:50}} horizontal>
            {
                data.map((item,index)=>(
                    <ScrollTab {...item} index={index} key={item.name}/>
                ))
            }
        </ScrollView>
    </View>
  )
}

interface ScrollTabProps{
    name:string
    index:number
}
function ScrollTab({name,index}:ScrollTabProps){
    return (
        <View className=' mr-2 rounded-full  items-center ' style={{
          
        }}>
            <Text className={cn('text-gray-500  text-lg',index==0 && 'text-gray-300')}>{name}</Text>
        </View>
    )
}

export default HeaderScroller