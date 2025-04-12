import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '../ui/button'
import { Iconoir, NavArrowLeft } from 'iconoir-react-native';
import { router } from 'expo-router';



const GoBack = () => {
  return (
    <Button className='bg-transparent p-0 h-0 w-0' onPress={()=>{router.back()}}>
        <NavArrowLeft  color={'white'} height={25} width={25}  />
    </Button>
  )
}

export default GoBack