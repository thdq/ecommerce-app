export type ProductType = {
  id: string
  title: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

class Product implements ProductType {
  constructor(
    public id: string,
    public title: string,
    public price: number,
    public discountPercentage: number,
    public rating: number,
    public stock: number,
    public brand: string,
    public category: string,
    public thumbnail: string,
    public images: string[],
  ) {}
}

export { Product }
