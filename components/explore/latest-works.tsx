import { View } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import mk1 from '@/assets/images/nfts/mk1.jpg'
import mk2 from '@/assets/images/nfts/mk2.jpeg'
import mk3 from '@/assets/images/nfts/mk3.jpg'
import mk4 from '@/assets/images/nfts/mk4.jpg'
import { FlashList } from '@shopify/flash-list'
import { NFTCard } from '../cards'


const LatestWorks = () => {
  const data = [
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
        name:"FSpace Rouce",
        image:mk4
    }
]
return (
<View className=' pt-5 gap-4'>
  <Text className='text-gray-300 text-lg'>Latest collections</Text>
   <FlashList
        data={data}
        renderItem={({item,index})=>( <NFTCard {...item}/>)}
        horizontal
        estimatedItemSize={300}
        keyExtractor={(item)=>`key-latest-${item.name}`}
        showsHorizontalScrollIndicator={false}
    />

   
</View>
)
}


export default LatestWorks