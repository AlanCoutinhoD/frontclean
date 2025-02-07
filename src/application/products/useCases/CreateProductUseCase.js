export class CreateProductUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(name, price) {
    return await this.productRepository.createProduct(name, price);
  }
} 