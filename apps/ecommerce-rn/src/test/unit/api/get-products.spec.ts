import { getProducts } from '../../../api/get-products'
import { productListMock } from '../../../../__mocks__/product-list'

import mockAxios from 'jest-mock-axios'

describe('fetch products', () => {
  describe('when API call is successful', () => {
    it('should return product list', async () => {
      mockAxios.request.mockResolvedValue(productListMock)

      const result = await getProducts({})
      expect(result).toEqual(productListMock)
    })
  })
})
