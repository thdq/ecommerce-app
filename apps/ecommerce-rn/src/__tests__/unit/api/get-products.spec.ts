import { getProducts } from '@app/api'
import { productListMock } from '../../../../__mocks__/product-list'

import mockAxios from 'jest-mock-axios'

describe('fetch products', () => {
  describe('when API call is successful', () => {
    it('should return product list', async () => {
      mockAxios.request.mockResolvedValueOnce(productListMock)

      const result = await getProducts({})
      expect(result).toEqual(productListMock)
    })
  })

  describe('when API call fails', () => {
    it('should throw an error', async () => {
      const error = new Error('An error occurred while fetching the product list')
      mockAxios.request.mockRejectedValueOnce(new Error())

      const result = getProducts({})
      await expect(result).rejects.toThrow(error)
    })
  })
})
