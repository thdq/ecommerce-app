import { useTranslation } from 'react-i18next'
import { ViewProps } from 'react-native'
import { Button } from 'ui-rn'
import { MessageText, ProductListErrorContainer } from './ProductListError.styles'

type ProductListErrorProps = {
  onTryAgain: () => void
} & ViewProps

export const ProductListError = ({ onTryAgain, ...props }: ProductListErrorProps) => {
  const { t } = useTranslation()

  return (
    <ProductListErrorContainer {...props}>
      <MessageText>{t('components.product_list_error.title')}</MessageText>
      <Button onPress={onTryAgain} label={t('components.product_list_error.try_again') ?? ''} />
    </ProductListErrorContainer>
  )
}
