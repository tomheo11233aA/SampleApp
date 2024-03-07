import React from 'react'
import Box from '@common/Box'
import { width } from '@utils/responsive'
import LottieView from 'lottie-react-native'
import Img from '@common/Img'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'

const Hello = () => {
    React.useEffect(() => {
        setTimeout(() => {
            navigate(screens.ONBOARDING)
        }, 500)
    }, [])
    return (
        <Box
            flex={1}
            alignCenter
            justifyCenter
            backgroundColor={'#11181e'}
        >
            <Img
                source={require('@images/logo.png')}
                width={width * 40 / 100}
                height={width * 40 / 100}
            />
            <LottieView
                source={require('@lotties/loading.json')}
                autoPlay
                loop
                style={{
                    width: width * 40 / 100,
                    height: width * 40 / 100,
                }}
            />
        </Box>
    )
}

export default Hello
