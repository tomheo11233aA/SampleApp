import React from 'react'
import { fonts } from '@themes/fonts'
import { width, height } from '@utils/responsive'
import Input from '@common/Input'
import Txt from '@common/Txt'

interface FormProps {
    email: string
    setEmail: (email: string) => void
    password: string
    setPassword: (password: string) => void
    security: boolean
    setSecurity: (security: boolean) => void
    color: any,
    t: any
}

const Form: React.FC<FormProps> = ({
    t,
    email,
    setEmail,
    password,
    setPassword,
    security,
    setSecurity,
    color
}) => {
    return (
        <>
            <Input
                height={height * 0.07}
                width={width * 0.9}
                hint={t('Email')}
                hintColor={'#5f5f5f'}
                backgroundColor={color.input}
                radius={width * 0.05}
                color={color.white}
                font={fonts.MAIN}
                sizeIcon={width * 0.06}
                iconOne={require('@images/unAuth/email.png')}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                marginTop={height * 0.04}
                height={height * 0.07}
                width={width * 0.9}
                hint={t('Password')}
                hintColor={'#5f5f5f'}
                backgroundColor={color.input}
                radius={width * 0.05}
                color={color.white}
                font={fonts.MAIN}
                sizeIcon={width * 0.06}
                iconOne={require('@images/unAuth/lock.png')}
                security={security}
                onPress={() => setSecurity(!security)}
                iconTwo={security ? require('@images/unAuth/show.png') : require('@images/unAuth/hide.png')}
                value={password}
                onChangeText={setPassword}
            />
            <Txt
                marginVertical={height * 0.04}
                onPress={() => {
                    console.log('Forgot the password?')
                }}
                size={width * 0.04}
                fontFamily={fonts.MAINB}
                color={color.mainColor}
                center
            >
                {t('Forgot the password?')}
            </Txt>
        </>
    )
}

export default Form