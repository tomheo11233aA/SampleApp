import React from 'react'
import Header from './Header'
import Form from './Form'
import { useTheme } from '@hooks/redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Platform } from 'react-native'
import Scroll from '@common/Scroll'
import KeyBoardSafe from '@reuse/KeyBoardSafe'

const FillProfile = () => {
  const theme = useTheme()
  return (
    <KeyBoardSafe
    extraRollHeight={50}
    >
      <Scroll
        flex={1}
        padding={24}
        backgroundColor={theme.bg}
      >
        <Header />
        <Form />
      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(FillProfile)
