import { Pressable, useWindowDimensions, View } from 'react-native'
import React, { useEffect } from 'react'
import { Text } from '@/components/ui/text'
import { Image } from 'expo-image'
import blod from '@/assets/images/onboarding/blob1.png'
import blod2 from '@/assets/images/onboarding/blob2.png'
import blod3 from '@/assets/images/onboarding/blob3.png'
import { ArrowRight } from 'iconsax-react-native'
import { cn } from '@/lib/utils'
import Animated, { FadeInUp, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated'
import { Button } from '@/components/ui/button'
import { router } from 'expo-router'
import { BlurMask, Canvas, Circle } from '@shopify/react-native-skia'
const onboardingData = [
  {
    title: 'Largest Digital NFT Marketplace',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, itaque.',
    image: blod
  },
  {
    title: 'Explore a community of 1000+ artists',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, itaque.',
    image: blod2
  },
  {
    title: 'Instant auctions and payments',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, itaque.',
    image: blod3
  }
]
const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0) // current index of the onboarding screen
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
  const width = useSharedValue(50) // width of the skip button
  const color = useSharedValue('#fff') // color of the skip button
  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
    height: 50,
    backgroundColor: color.value,
  }))
  useEffect(() => {
    if (currentIndex == 2) {
      width.value = withTiming(150, { duration: 100 })
      color.value = withTiming('#cddc44', { duration: 100 })
    }
  }, [currentIndex])
  return (
    <View className='flex-1 bg-black px-5 items-center pt-36 gap-20'>

      <Button className='absolute top-10 right-0 z-20 ' onPress={() => {

        router.replace('/auth/signup')
      }}>
        <Text className='text-white text-xl font-semibold'>Skip</Text>
      </Button>
      <View className='absolute left-0 right-0  h-[500px] '>
        <BlurCircle />
      </View>
      {
        onboardingData.map((item, index) => (
          <React.Fragment key={index}>
            {
              index == currentIndex && <OnboardingItem item={item} index={index} />
            }
          </React.Fragment>
        ))
      }

      {/* skip button */}


      {/* bottom navigation slider */}
      <View className='absolute bottom-20 left-0 right-0 flex-row items-center justify-between   px-5'>
        <View className='flex-row gap-2'>
          {
            [...Array(3).keys()].map((_, index) => (
              <View key={index} className={cn('w-3 h-2 rounded-full', index == currentIndex ? 'bg-white w-8' : 'bg-gray-500')} />
            ))
          }
        </View>
        <AnimatedPressable style={[animatedStyle]} className=' h-16 w-16 bg-white border-2 flex-row  gap-2  rounded-full items-center justify-center' onPress={() => {
          if (currentIndex == 2) {
            router.replace('/auth/signup')
            return
          }
          setCurrentIndex(prev => prev + 1)
        }}>
          {
            currentIndex == 2 && <Text className='text-zinc-800 text-base'>Get Started</Text>
          }
          <ArrowRight color='#000' size={20} variant='Linear' />
        </AnimatedPressable>
      </View>
    </View>
  )
}

interface OnboardingItemProps {
  item?: {
    title: string
    description: string
    image: string
  }
  index?: number
}

function OnboardingItem({ item, index }: OnboardingItemProps) {
  const rotate = useSharedValue(-5)
  const scale = useSharedValue(1)

  useEffect(() => {
    rotate.value = withRepeat(withSpring(10, { duration: 2000 }), -1, true)
    scale.value = withRepeat(withSpring(1.1, { duration: 2000 }), -1, true)
  }, [])
  const animateStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotate.value}deg` },
      { scale: scale.value }
    ]
  }))
  return (
    <Animated.View className='gap-20'>
      <Animated.View
        style={[animateStyle]} className=' items-center justify-center'>
        {/* <View className='w-40 h-40 absolute bg-white rounded-full '/> */}
        <Image source={item?.image} className='aspect-square self-center' style={{
          height: 324,
          width: 324,
          aspectRatio: 1,
          transform: [
            {
              rotate: '-5deg'
            }
          ]
        }}
          contentFit='contain'
        />
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(200)} className='self-start gap-3'>
        <View className='w-2/3'>
          <Text className='text-white font-medium text-3xl '>
            {item?.title}
          </Text>
        </View>
        <Text className='text-gray-400'>{item?.description}</Text>
      </Animated.View>
    </Animated.View>
  )
}

function BlurCircle() {
  const {width,height} = useWindowDimensions()
  const size = width/2.5;
  const r = useSharedValue(size);
  const cx = useSharedValue(width/2)
  // useEffect(() => {
  //   // r.value = withRepeat(withTiming(size * 0.73, { duration: 5000 }), -1);
  //   cx.value = withRepeat(
  //     withSequence(
  //       withTiming((width/2)-40,{duration:2000}),
  //       withTiming((width/2)+40,{duration:2000}),
  //       withTiming((width/2)-0,{duration:2000}),
  //     )
  //     ,-1)
  // }, []);
  return (
    <Canvas style={{flex:1}}>
      <Circle r={size} cx={width/2} cy={300} color={'#f5f5fd25'}></Circle>
      <BlurMask blur={200} style={'normal'}/>
    </Canvas>
  )
}

export default Onboarding