import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//screens
import Onboarding from "@screens/OnBoarding";
import HowToLogin from "@screens/HowToLogin";
import SignUp from "@screens/SignUp";
import SignIn from "@screens/SignIn";
import FillProfile from "@screens/FillProfile";
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useTheme } from '@hooks/redux'
import { useAppSelector } from '@hooks/redux'

const Stack = createNativeStackNavigator()
const UnAuthNavigation = () => {
  const theme = useAppSelector(themeUserSelector)
  const colorOfTheme = useTheme()
  changeNavigationBarColor(theme === 'light' ? colorOfTheme.bg : colorOfTheme.bg, true, true)
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      animation: 'ios'
    }}>
      <Stack.Screen name={screens.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={screens.HOWTOLOGIN} component={HowToLogin} />
      <Stack.Screen name={screens.SIGNIN} component={SignIn} />
      <Stack.Screen name={screens.SIGNUP} component={SignUp} />
      <Stack.Screen name={screens.FILLPROFILE} component={FillProfile} />
    </Stack.Navigator>
  )
}
export default UnAuthNavigation
