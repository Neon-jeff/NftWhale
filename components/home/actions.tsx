import { Pressable, View } from 'react-native'
import React from 'react'
import { Add, BoxAdd, Eye, IconProps, Send2 } from 'iconsax-react-native'
import { Text } from '../ui/text'
import Animated, { useAnimatedStyle, withRepeat, withSequence, withTiming } from 'react-native-reanimated'

const Actions = () => {
    const actions = [
        {
            title: "Create NFT",
            icon(props?: IconProps) {
                return <BoxAdd {...props} />
            }
        },
        {
            title: "View biddings",
            icon(props?: IconProps) {
                return <Eye {...props} />
            }
        },
        {
            title: "Send NFT",
            icon(props?: IconProps) {
                return <Send2 {...props} />
            }
        }
    ]
    const flashingStyle = useAnimatedStyle(()=>({
        transform:[{
            scale:withRepeat(
                withSequence(
                    withTiming(0.6,{duration:700}),
                    withTiming(.9,{duration:700}),
                ),
                -1,    
                true
            )
        }]
    }))
    // const bg='bg-zinc-900/30 border border-neutral-800/40 '
    return (
        <View className='py-5 px-5 gap-5 mx-5 mt-10 rounded-2xl'>
            <View className='border border-gray-700/40 p-3 rounded-full flex-row items-center gap-2 self-center'>
                <Animated.View className='w-3 h-3 bg-blue-500/70 rounded-full' style={[flashingStyle]} />
                <Text className='text-gray-400 text-xs font-light'>
                    You have an incoming gift from @IbitsMayo
                </Text>
                
            </View>
            <View className='gap-0.5'>
                <Text className='text-gray-600 text-center text-sm pb-2'>Your earnings</Text>
                <Text className='text-gray-400 text-3xl font-semibold text-center'>
                    0.00 ETH
                </Text>
                {/* <Text className=' text-green-500/60 text-center'>+0.00%</Text> */}

            </View>

            <View className='flex-row gap-3 justify-center'>
                {
                    actions.map((btn, index) => (
                        <Pressable key={`home-action-button-${index}`} className='flex-row gap-2 items-center border border-gray-600/30 p-3 rounded-full bg-neutral-900/90'>
                            {btn.icon({ color: '#9ca3af', size: 17 })}
                            <Text className='text-gray-400 text-xs'>{btn.title}</Text>
                        </Pressable>
                    ))
                }
            </View>
        </View>
    )
}

export default Actions