import React from 'react'
import Txt from '@common/Txt'
import Box from '@common/Box'
import { fonts } from '@themes/fonts'
import Btn from '@common/Btn'
import { useTranslation } from 'react-i18next'
import { goBack } from '@utils/navigationRef'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { width, height } from '@utils/responsive'
import { useTheme } from '@hooks/redux'

const Header = () => {
  const { t } = useTranslation()
  const color = useTheme()
  return (
    <>
      <Box row alignCenter>
        <Btn
          onPress={() => goBack()}>
          <IonIcon name={'arrow-back'} size={width * 0.06} color={color.black} />

        </Btn>
        <Txt
          fontFamily={fonts.MAINB}
          size={22}
          marginLeft={16}
        >
          {t('Fill Your Profile')}
        </Txt>
      </Box>
    </>
  )
}

export default React.memo(Header)
