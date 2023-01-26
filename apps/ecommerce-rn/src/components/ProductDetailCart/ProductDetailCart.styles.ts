import styled from 'styled-components/native'

export const CartContainer = styled.View`
  flex-direction: row;
  background-color: white;
  border-radius: 6px;
  margin: 4px 8px;
`
export const ProductContainerView = styled.View`
  width: 100%;
  flex: 1;
  padding: 16px;
`

export const ProductHeaderView = styled.View`
  width: 100%;
`

export const ProductContentView = styled.View`
  flex-direction: row;
`

export const ProductInfoView = styled.View`
  flex: 1;
  flex-wrap: nowrap;
  flex-direction: row;

  justify-content: flex-end;
`

export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const ShippingInfoView = styled.Text`
  margin-top: auto;
`

export const ShippingFreeText = styled.Text`
  font-weight: bold;
  color: #15803d;
`

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 6px;
`
