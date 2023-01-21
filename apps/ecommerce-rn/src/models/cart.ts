export type CartType = {
  id: string
  price: number
  quantity: number
  thumbnail: string
}

class Cart implements CartType {
  constructor(
    public id: string,
    public price: number,
    public quantity: number,
    public thumbnail: string,
  ) {}
}

export { Cart }
