import { Pressable, View} from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import { Image } from 'expo-image'
import nft from '@/assets/images/onboarding/nft1.jpeg'
import nft2 from '@/assets/images/onboarding/nft2.jpeg'
import nft3 from '@/assets/images/onboarding/nft3.jpeg'
import nft4 from '@/assets/images/onboarding/3dblob.png'
import {FlashList} from '@shopify/flash-list'
import { size } from '@/constants/sizes'
import { ArrowUpRight } from 'lucide-react-native'
import { ArrowRight } from 'iconsax-react-native'

const Trending = () => {
    const data = [
        {
            name:"Blood Fauve",
            image:nft
        },
        {
            name:"Rising Dreams",
            image:nft2
        },
        {
            name:"Love Mama",
            image:nft3
        },
        {
            name:"FSpace Rouce",
            image:nft4
        }
    ]
  return (
    <View className='mx-5 pt-5 gap-4'>
     <View className='flex-row items-center justify-between'>
     <Text className='text-gray-300 text-lg'>All Collections</Text>
     <View className='flex-row gap-1 items-center'>
        <Text className='text-gray-400'>See All</Text>
        <ArrowRight size={18} color='#9ca3af'/>
     </View>
     </View>
       <FlashList
            data={data}
            renderItem={({item,index})=>( <BestSellerCard {...item}/>)}
            estimatedItemSize={300}
            keyExtractor={(item)=>`key-flashlist-${item.name}`}
            showsHorizontalScrollIndicator={false}
        />

       
    </View>
  )
}

function BestSellerCard ({name,image}:{name:string,image:string}){
    return(
        <View className='w-full mb-5 rounded-xl bg-neutral-900/80'>
            <Image source={image} style={{width:'100%',borderRadius:10,height:400}}/>
            <View className='w-11/12 bg-neutral-500/50 border flex-row border-gray-200/10 rounded-full py-3 self-center items-center justify-between px-5 absolute bottom-2'>
                <View>
                <Text className='text-white/80 text-sm '>
                    {name}
                </Text>
                <Text className='text-white text-lg font-extrabold'>0.07Eth</Text>
                </View>
                <Pressable className='p-2 bg-black rounded-full'>
                    <ArrowUpRight size={18} color={'lightgray'}/>
                </Pressable>
            </View>
        </View>
    )
}

export default Trending