import styled from 'styled-components/native'
import { FlatList as FlatListNative } from 'react-native'

export const ProductListContainer = styled.View`
  flex: 1;
`

export const FlatList = styled.FlatList`
  flex: 1;
  margin: 0 4px 0 4px;
` as unknown as typeof FlatListNative
