import "../global.css";
import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import {
    useFonts,
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';
import { SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated'



SplashScreen.preventAutoHideAsync()

export const unstable_settings = {
    initialRouteName: 'index',
}
const RootLayout = () => {
    const [loaded] = useFonts({
        extralight: Manrope_200ExtraLight,
        light: Manrope_300Light,
        regular: Manrope_400Regular,
        medium: Manrope_500Medium,
        semibold: Manrope_600SemiBold,
        bold: Manrope_700Bold,
        extrabold: Manrope_800ExtraBold,
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }
    return (
        <>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' />
                <Stack.Screen name='onboarding' />
                <Stack.Screen name='auth' />
            </Stack>

            <StatusBar style='auto' />
        </>
    )
}

export default RootLayout