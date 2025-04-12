import { View } from 'react-native'
import { Text } from '../ui/text'
import React, { FunctionComponent } from 'react'
import Svg, { SvgProps } from 'react-native-svg'
import { IconProps } from 'iconsax-react-native'

interface TabIconProps {
    focused : boolean,
    Icon: FunctionComponent<IconProps>
}


const TabIcon = ({focused,Icon}:TabIconProps) => {
  return (
    <>
    <Icon height={20} width={20} color={focused?'white' : '#6b7280'}  strokeWidth={1.5}/>
    </>
  )
}

export default TabIcon