import { ScrollView, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import BlurHeader from '@/components/shared/blurheader'
import { AllCollections, HeaderScrollBar, LatestWorks } from '@/components/explore'
import SharedHeader from '@/components/shared/header'

const Explore = () => {
  return (
    <View className='flex-1 px-4  gap-10 pt-10'>
      <BlurHeader color='#fa837d15' />
      <SharedHeader />
      <View className='gap-5'>
        <Text className='text-zinc-300 font-medium text-3xl'>Discover community </Text>
        <HeaderScrollBar />
        <ScrollView contentContainerStyle={{ gap: 20 }} showsVerticalScrollIndicator={false}  style={{height:'100%'}}>
          <LatestWorks />
          <AllCollections/>
        </ScrollView>
      </View>

    </View>
  )
}

export default Explore