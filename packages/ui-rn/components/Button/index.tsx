import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

type ButtonSize = 'small' | 'medium' | 'large'
type ButtonVariant = 'primary' | 'info' | 'warning' | 'danger'

export type ButtonProps = {
  label?: string | undefined
  size?: ButtonSize
  outline?: boolean
  loading?: boolean
  loadingLabel?: string
  variant?: ButtonVariant
} & TouchableOpacityProps

export function Button({
  label,
  size = 'medium',
  variant = 'primary',
  loading,
  loadingLabel,
  children,
  ...props
}: ButtonProps) {
  return (
    <>
      {loading ? (
        <ButtonLoadingContainer disabled {...props} size={size}>
          <ActivityIndicator size={'small'} />
          <ButtonDisabledText>{loadingLabel}</ButtonDisabledText>
        </ButtonLoadingContainer>
      ) : (
        <ButtonContainer size={size} variant={variant} {...props}>
          {label ? <ButtonLabel variant={variant}>{label}</ButtonLabel> : children}
        </ButtonContainer>
      )}
    </>
  )
}

type ButtonContainer = Omit<ButtonProps, keyof TouchableOpacityProps>
const ButtonContainer = styled.TouchableOpacity<ButtonContainer>`
  background-color: ${({ variant, outline }) =>
    outline
      ? 'transparent'
      : variant === 'primary'
      ? '#86efac'
      : variant === 'danger'
      ? '#fb7185'
      : variant === 'info'
      ? '#94a3b8'
      : ''};
  padding: 12px;
  padding: ${({ size }) => (size === 'large' ? '18px' : size === 'medium' ? '12px' : '6px')};
  border-radius: 6px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`

const ButtonLabel = styled.Text<{ variant: string }>`
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: ${({ variant }) =>
    variant === 'primary'
      ? '#14532d'
      : variant === 'danger'
      ? '#b6253a'
      : variant === 'info'
      ? '#727881'
      : ''};
`

const ButtonLoadingContainer = styled.TouchableOpacity<{ size: ButtonSize }>`
  padding: 12px;
  padding: ${({ size }) => (size === 'large' ? '18px' : size === 'medium' ? '12px' : '6px')};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #d1d5db;
`

const ButtonDisabledText = styled.Text`
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: #404040;
`
