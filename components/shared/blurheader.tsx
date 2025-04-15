import { View, Text } from 'react-native'
import React from 'react'
import { size } from '@/constants/sizes'
import { BlurMask, Canvas, Circle } from '@shopify/react-native-skia'

interface BlurProps {
    color?: string
}
function BlurHeader({ color }: BlurProps) {
    const BLURSIZE = size.screen.width / 3
    return (
        <View className=' h-96 absolute top-0 right-0 left-0'>
            <Canvas style={{ flex: 1 }}>
                <Circle r={BLURSIZE * 3} cx={BLURSIZE * 1.5} cy={-180} color={color ? color : '#cddc4410'}></Circle>
                <BlurMask blur={100} style={'normal'} />
            </Canvas>
        </View>
    )
}

export default BlurHeader