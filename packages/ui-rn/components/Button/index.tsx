import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

export type ButtonProps = {
  label?: string
} & TouchableOpacityProps

export function Button({ label, children, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {label ? <ButtonLabel>{label}</ButtonLabel> : children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: #86efac;
  padding: 12px;
  border-radius: 6px;
`

const ButtonLabel = styled.Text`
  font-weight: bold;
  color: #14532d;
`
