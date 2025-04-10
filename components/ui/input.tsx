import * as React from 'react';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData, View, type TextInputProps } from 'react-native';
import { cn } from '@/lib/utils';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Eye, EyeSlash } from 'iconsax-react-native';
import { Button } from './button';

interface InputProps extends TextInputProps {
  label?: string;
  isInvalid?: boolean;
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, placeholderClassName, onFocus, onBlur, secureTextEntry,isInvalid, ...props }, ref) => {
    const focusProgress = useSharedValue(0);
    // check focused state of input to display validation feedback
    const [isFocused, setIsFocused] = React.useState(false);
    const borderColor = useSharedValue("#6b7280")
    function handlefocus(e: NativeSyntheticEvent<TextInputFocusEventData>) {
      setIsFocused(true);
      if(!isInvalid){
        borderColor.value = withTiming("#ffffff", { duration: 200 });
        return
      }
      onFocus?.(e);
    }
    function handleblur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
      setIsFocused(false);
      borderColor.value = withTiming("#6b7280", { duration: 200 });
      onBlur?.(e);
    }
    const containerAnimatedStyle = useAnimatedStyle(
      () => ({
        borderColor: borderColor.value,
        borderWidth: 1,
      })
    )
    const [secureText, setSecureText] = React.useState(false);
    React.useEffect(() => {
      setSecureText(secureTextEntry ?? false);
    }, [secureTextEntry]);

    React.useEffect(()=>{
      if(isInvalid){
        borderColor.value = withTiming("#f97314", { duration: 400 });
        return
      }
      if(!isInvalid && isFocused){
        borderColor.value = withTiming("#0dd4a3", { duration: 200 });
      }
    },[isInvalid])

    // handle the toggle of the secure text entry
    function handleToggle() {
      if (secureText) {
        setSecureText(false);
      }
      else{
        setSecureText(true);
      }
    }
    return (
      <Animated.View className=' rounded-xl justify-center relative ' style={[containerAnimatedStyle]}>
        <TextInput
          ref={ref}
          className={cn(
            '  rounded-lg h-12  bg-background px-3 web:py-2 text-sm lg:text-sm native:text-base native:leading-[1.25] placeholder:text-gray-500 file:border-0 file:bg-transparent file:font-medium text-gray-200 ',
            props.editable === false && 'opacity-50 web:cursor-not-allowed',
            className
          )}
          placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
          onFocus={(e) => {
            handlefocus(e)
          }}
          onBlur={(e) => {
            handleblur(e)
          }}
          secureTextEntry={secureText}
          autoCorrect={false}
          autoCapitalize='sentences'
          {...props}
        />
        {
          secureTextEntry && <Button onPress={handleToggle} className='absolute right-1 top-1/2 -translate-y-1/2 ' style={{

          }}>
            {secureText &&<EyeSlash className='absolute' size={18} color='#fff' />}
            {!secureText &&<Eye className='absolute' size={18} color='#fff' />}
          </Button>
        }
      </Animated.View>
    );
  }
);

Input.displayName = 'Input';

export { Input };
