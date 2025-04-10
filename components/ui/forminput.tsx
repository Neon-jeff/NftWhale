import { View } from 'react-native'
import React, { useEffect } from 'react'
import { Control, Controller, FieldValues, Path, PathValue, RegisterOptions, useController } from "react-hook-form"
import { Text } from './text'
import { Input } from './input'
import Animated, { FadeInLeft, FadeOutLeft, FadeOutRight, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { EyeSlash } from 'iconsax-react-native'
import { Button } from './button'

interface FormInputProps<T extends FieldValues> {
    name: Path<T>
    control: Control<T>
    rules?: RegisterOptions<T>
    defaultValue?: PathValue<T, Path<T>>
    label: string;
    placeholder?: string;
}

const FormInput = <T extends FieldValues>({ name, control, rules, defaultValue, label, placeholder }: FormInputProps<T>) => {
    const textcolor = useSharedValue("#9ca3af")
    const animatedTextStyle = useAnimatedStyle(() => (
        {
            color: textcolor.value,
        }
    ))
    function handleFocusTextAnimation() {
        textcolor.value = withTiming("#ffffff", { duration: 200 });
    }
    function handleBlurTextAnimation() {
        textcolor.value = withTiming("#9ca3af", { duration: 200 });
    }
    const { field, fieldState } = useController({
        name,
        control,
        rules,
        defaultValue,
    })

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={() => (
                <Animated.View className='gap-2 relative'>
                    <Animated.Text style={[animatedTextStyle]} className=' text-base'>{label}</Animated.Text>
                    <Input
                        onFocus={handleFocusTextAnimation}
                        onBlur={handleBlurTextAnimation}
                        onChangeText={field.onChange}
                        placeholder={placeholder}
                        secureTextEntry={name == 'password'}
                        isInvalid={!!fieldState.error}
                        />

                    {fieldState.error && <Animated.View entering={FadeInLeft.duration(500)} exiting={FadeOutLeft.duration(100)} className='bg-orange-950/30 p-2  rounded-md border border-red-500/10'>
                        <Text className='text-orange-600/90  text-xs '>{fieldState.error.message}</Text>
                    </Animated.View>}
                </Animated.View>
            )}
        />
    )
}

export default FormInput