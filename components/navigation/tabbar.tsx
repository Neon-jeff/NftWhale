import { Pressable, View } from 'react-native'
import { Text } from '../ui/text'
import React, { FunctionComponent, useEffect } from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { Home, IconProps,GlobalSearch,ProfileCircle, Wallet } from 'iconsax-react-native'
import TabIcon from './tabicon'


interface TabBarProps extends BottomTabBarProps {

}

type iconType = {[key:string]:FunctionComponent<IconProps>}


const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
    const icons : iconType = {
        home: Home,
        explore:GlobalSearch,
        account : ProfileCircle,
        transactions:Wallet
    }
const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
    return (
        <View className='bg-zinc-900/90 border border-gray-500/20 bottom-32 rounded-full  p-4  h-20 w-[80%] self-center flex-row items-center  justify-center gap-10' style={{
            backdropFilter:''
        }}>
            {
                state.routes.map((routeToScreen, index) => {
                    const scaleProgress = useSharedValue<number>(0)
                    const styles = useAnimatedStyle(()=>{
                        const scale = interpolate(scaleProgress.value,[0,1],[.87,1])
                        return {
                            transform:[{scale}],
                          
                        }
                    })
                    const isFocused = state.index === index
                    const handleMove = () =>{
                        if(isFocused) return
                        navigation.navigate(routeToScreen.name)
                    }

                    useEffect(()=>{
                        if(!isFocused){
                            scaleProgress.value = withTiming(0)
                        }
                        if(isFocused){
                            scaleProgress.value = withTiming(1)
                        }
                    },[isFocused])

                                       
                    return (<AnimatedPressable key={routeToScreen.key} className={`p-3 py-3 rounded-full gap-1.5 items-center`} onPress={handleMove} style={[styles]}>
                        <TabIcon focused={isFocused} Icon={icons[routeToScreen.name]} />
                        {isFocused && <View className='w-1.5 h-1.5 bg-white rounded-full'/>}
                    </AnimatedPressable>)
                })
            }
        </View>
    )
}

export default TabBar