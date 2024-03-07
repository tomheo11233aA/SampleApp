import React from 'react';
import {
    StyleSheet, Text, ImageBackground,
    TouchableOpacity, View
} from 'react-native';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSharedValue, interpolateColor } from 'react-native-reanimated';
import { fonts } from '@themes/fonts';
import { colors } from '@themes/colors';
import { navigate } from '@utils/navigationRef';
import { screens } from '@contants/screens';
import Box from '@common/Box';
import { width, height } from '@utils/responsive';

const images = [
    { id: 1, image: require('@images/background.png') },
    { id: 2, image: require('@images/background2.png') },
    { id: 3, image: require('@images/background3.png') }
];

const Onboarding = () => {
    const { t } = useTranslation()
    const progressValue = useSharedValue<number>(0);
    return (
        // <View style={{ flex: 1 }}>
        <Box flex={1} backgroundColor={'#000000'}>
            <Carousel
                data={images}
                renderItem={({ item }) => (
                    <ImageBackground
                        source={item.image}
                        style={styles.backgroundImage}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                            style={styles.backgroundGradient}
                        />
                    </ImageBackground>
                )}
                width={width}
                height={height}
                autoPlay
                onProgressChange={(_, absoluteProgress) =>
                    (progressValue.value = absoluteProgress)
                }
            />

        </Box>
    )
}

const PaginationItem: React.FC<{
    index: number
    backgroundColor: string
    length: number
    animValue: Animated.SharedValue<number>
    isRotate?: boolean
}> = (props) => {
    const { animValue, index, length, backgroundColor, isRotate } = props;
    const width = 10;
    const selectedWidth = 32;
    const widthStyle = useAnimatedStyle(() => {
        const inputRange = [index - 1, index, index + 1];
        const outputRange = [width, selectedWidth, width];
        const interpolatedWidth = interpolate(
            animValue.value,
            inputRange,
            outputRange,
            Extrapolation.CLAMP
        );

        const opacity = interpolate(
            animValue.value,
            inputRange,
            [0.2, 1, 0.2],
            Extrapolation.CLAMP
        );

        const myBackground = interpolateColor(
            animValue.value,
            inputRange,
            ["white", backgroundColor, "white"]
        );

        return {
            width: interpolatedWidth,
            opacity: opacity,
            backgroundColor: myBackground,
        };
    }, [animValue, index]);



    return (
        <Animated.View
            style={[
                {
                    width: width,
                    height: width,
                    borderRadius: 50,
                    marginHorizontal: 5,
                    overflow: "hidden",
                    transform: [
                        {
                            rotateZ: isRotate ? "90deg" : "0deg",
                        },
                    ],
                },
                widthStyle
            ]}
        >
            <View
                style={{
                    borderRadius: 50,
                    flex: 1,
                }}
            />
        </Animated.View>
    );
};

export default Onboarding

const styles = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: hp('2%'),
        
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    backgroundGradient: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
})