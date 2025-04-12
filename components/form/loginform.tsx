import { KeyboardAvoidingView, Platform, View } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema, type LoginSchemaType } from '@/utils/form-schemas/login'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '../ui/forminput'
import { Button } from '../ui/button'
import { Text } from '../ui/text'
import {  ArrowRight } from 'iconsax-react-native'
import { Checkbox } from '../ui/checkbox'
import { router } from 'expo-router'

const LoginForm = () => {
    const form = useForm<LoginSchemaType>({
        defaultValues: {
            // name: '',
            email: '',
            password: '',
        },
        resolver: zodResolver(LoginSchema),
    })
    const [checked, setChecked] = React.useState(false)
    return (
        <View className='pt-6  gap-5' style={{ flex: 1 }}>
            {/* <FormInput
                name='name'
                control={form.control}
                label='Name'
                placeholder='John Doe'
            /> */}
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
                <FormInput
                    name='email'
                    control={form.control}
                    label='Email address'
                    placeholder='you@yourmail.com'
                />

            </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
                <FormInput
                    name='password'
                    control={form.control}
                    label='Password'
                    placeholder='********'
                />
            </KeyboardAvoidingView>



            <View className='gap-4 absolute bottom-16  left-0 right-0' style={{ zIndex: -1 }}>
                <Button className='bg-cyan-600/20 border border-cyan-200/20 flex-row gap-2  rounded-full  left-0 right-0 ' onPress={()=>router.push('/(tabs)/home')}>
                    <Text className='text-cyan-500 text-lg font-semibold'>Login </Text>
                    <ArrowRight color='#06b6d4' size={20} />
                </Button>
                {/* <Button className=' border border-gray-200/20    rounded-full   left-0 right-0 ' onPress={form.handleSubmit((data) => console.log(data))}>
                    <Text className='text-gray-400 text-lg font-semibold'>Already have an account</Text>
                </Button> */}
            </View>

        </View>
    )
}

export default LoginForm