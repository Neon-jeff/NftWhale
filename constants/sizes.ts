import { Dimensions } from "react-native"


const {width,height} = Dimensions.get('screen')

export const size={
    screen:{
        width,
        height
    }
}