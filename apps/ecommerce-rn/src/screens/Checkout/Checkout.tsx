import { ViewProps } from 'react-native'
import { CheckoutContainer, TitleText } from './Checkout.styles'
import { Button } from 'ui-rn'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StackNavigationProps } from '@app/navigation/AppNavigation'

import { useTranslation } from 'react-i18next'

type CheckoutProps = {
  navigation: StackNavigationProps
} & ViewProps

export const Checkout = ({ navigation, ...props }: CheckoutProps) => {
  const { t } = useTranslation()

  return (
    <CheckoutContainer {...props}>
      <MaterialCommunityIcons name='cart-heart' size={120} color='#14532d' />
      <TitleText>{t('screens.checkout.title')}</TitleText>
      <Button
        onPress={() => navigation.navigate('Products')}
        label={t('screens.checkout.see_more') ?? ''}
      />
    </CheckoutContainer>
  )
}
