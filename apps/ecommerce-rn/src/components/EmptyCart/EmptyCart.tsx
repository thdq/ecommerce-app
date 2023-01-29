import { DescriptionText, EmptyCartContainer, TitleText } from './EmptyCart.styles'
import { ViewProps } from 'react-native'
import { Button } from 'ui-rn'
import { useTranslation } from 'react-i18next'

type EmptyCartProps = {
  onShowProducts: () => void
} & ViewProps

export const EmptyCart = ({ onShowProducts, ...props }: EmptyCartProps) => {
  const { t } = useTranslation()

  return (
    <EmptyCartContainer {...props}>
      <TitleText>{t('components.empty_cart.title')}</TitleText>
      <DescriptionText>{t('components.empty_cart.description')}</DescriptionText>
      <Button testID='show-products-button' onPress={onShowProducts} label={t('components.empty_cart.show_products') ?? ''} />
    </EmptyCartContainer>
  )
}
