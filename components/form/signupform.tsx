import { KeyboardAvoidingView, Platform, View } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { SignupSchema, type SignupSchemaType } from '@/utils/form-schemas/signup'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '../ui/forminput'
import { Button } from '../ui/button'
import { Text } from '../ui/text'
import { Sms } from 'iconsax-react-native'
import { Checkbox } from '../ui/checkbox'
import { router } from 'expo-router'

const SignupForm = () => {
    const form = useForm<SignupSchemaType>({
        defaultValues: {
            // name: '',
            email: '',
            // password: '',
        },
        resolver: zodResolver(SignupSchema),
    })
    const [checked, setChecked] = React.useState(false)
    return (
        <View className='pt-6  ' style={{ flex: 1 }}>
            {/* <FormInput
                name='name'
                control={form.control}
                label='Name'
                placeholder='John Doe'
            /> */}
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
                <FormInput
                    name='email'
                    control={form.control}
                    label='Email address'
                    placeholder='you@yourmail.com'
                />

                <View className='flex-row  gap-4 mt-5'>
                    <Checkbox className='border-white mt-2' checked={checked} onCheckedChange={setChecked} />
                    <View className='w-11/12'>
                        <Text className='text-gray-400 text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at molestias fuga, iusto officiis aperiam. Asperiores aperiam facilis eligendi porro.
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
            {/* <FormInput
                name='password'
                control={form.control}
                label='Password'
                placeholder='********'
            /> */}
            
  
                <View className='gap-4 absolute bottom-10  left-0 right-0' style={{zIndex:-1}}>
                    <Button className='bg-cyan-600/20 border border-cyan-200/20 flex-row gap-2  rounded-full  left-0 right-0 ' onPress={form.handleSubmit((data) => console.log(data))}>
                        <Sms color='#06b6d4' size={20} />
                        <Text className='text-cyan-500 text-lg font-semibold'>Continue with email</Text>
                    </Button>
                    <Button className=' border border-gray-200/20    rounded-full   left-0 right-0 ' onPress={()=>{router.push('/auth/login')}}>
                        <Text className='text-gray-400 text-lg font-semibold'>Already have an account</Text>
                    </Button>
                </View>
         
        </View>
    )
}

export default SignupForm