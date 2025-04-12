import { ScrollView, View } from 'react-native'
import React from 'react'
import { BlurMask, Canvas, Circle } from '@shopify/react-native-skia'
import { size } from '@/constants/sizes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Actions, HomeHeader, TopSellers, Trending } from '@/components/home'

const Home = () => {
  return (
    <View className='flex-1 pt-16 '>
      <BlurHeader />
      {/* Header Element */}
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
       
        <Actions />
        <TopSellers/>
        <Trending/>
      </ScrollView>

    </View>
  )
}

function BlurHeader() {
  const BLURSIZE = size.screen.width / 3
  return (
    <View className=' h-96 absolute top-0 right-0 left-0'>
      <Canvas style={{ flex: 1 }}>
        <Circle r={BLURSIZE * 3} cx={BLURSIZE * 1.5} cy={-180} color={'#cddc4410'}></Circle>
        <BlurMask blur={100} style={'normal'} />
      </Canvas>
    </View>
  )
}

export default Home