import { View, } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import mk1 from '@/assets/images/nfts/mk1.jpg'
import mk2 from '@/assets/images/nfts/mk2.jpeg'
import mk3 from '@/assets/images/nfts/mk3.jpg'
import mk4 from '@/assets/images/nfts/mk4.jpg'
import mk5 from '@/assets/images/nfts/mk5.jpg'
import mk6 from '@/assets/images/nfts/mk8.jpg'
import { FlashList } from '@shopify/flash-list'
import { CollectionCard } from '../cards'


const AllCollections = () => {
    const data = [
        {
            name:"Spice Alien",
            image:mk5
        },
        {
            name:"FSpace Rouce",
            image:mk4
        },
        {
            name:"Blood Fauve",
            image:mk1
        },
        {
            name:"Rising Dreams",
            image:mk2
        },
        {
            name:"Love Mama",
            image:mk3
        },
        {
            name:"Flo Molli",
            image:mk6
        },
 
    ]
    return (
        <View className='gap-5 h-[900px] ' >
        <Text className='text-gray-400 text-lg'>All collections</Text>
        <FlashList
        data={data}
        renderItem={({item,index})=>( <CollectionCard {...item}/>)}
        estimatedItemSize={300}
        keyExtractor={(item)=>`key-collection-${item.name}`}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
    />
        </View>
    )
}

export default AllCollections