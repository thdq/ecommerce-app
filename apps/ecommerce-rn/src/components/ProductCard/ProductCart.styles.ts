import styled from 'styled-components/native'

export const CardContainer = styled.View`
  width: 100%;
  padding: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  margin: 8px;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.1;
  elevation: 3;
`

export const Image = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 8px;
`

export const ProductFooterView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`

export const ShippingInfoView = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ShippingFreeText = styled.Text`
  font-weight: bold;
  color: #15803d;
`

export const AddToCartView = styled.View`
  color: '#22c55e';
  margin-left: auto;
`

export const RemoveToCartView = styled.View`
  padding: 0 8px;
  width: 100%;
  margin-bottom: 15px;
`

export const ProductInfoView = styled.View`
  width: 100%;
  margin: 12px 0;
  padding: 0 8px;
`

export const ProductTitleText = styled.Text`
  font-size: 16px;
  color: #374151;
  margin-bottom: 2px;
`

export const PriceText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #111827;
`
export const View = styled.View`
  width: 100%;
`
