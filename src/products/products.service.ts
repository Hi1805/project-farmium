import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as moment from 'moment';
import { Model } from 'mongoose';

import { Product } from './interface/Products.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private readonly productModel: Model<Product>,
  ) {}

  async create(newProduct) {
    const dateNow = moment().format();
    newProduct.updatedOn = dateNow;
    newProduct.createdOn = dateNow;
    const product = await new this.productModel(newProduct);
    return product.save();
  }

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    if (products.length === 0) {
      throw new NotFoundException('data is empty');
    }
    return products;
  }

  async getProduct(_id) {
    let product;
    try {
      product = await this.productModel.findById({ _id }).exec();
    } catch (error) {
      throw new NotFoundException("can't found product by your id");
    }
    if (!product) {
      throw new NotFoundException("can't found product by your id");
    }
    return product;
  }

  async updateProduct(id, editProduct) {
    const filter = {
      _id: id,
    };
    const dateNow = moment().format();
    const update = { ...editProduct, updatedOn: dateNow };
    const product = await this.productModel.findByIdAndUpdate(filter, update);
    return product;
  }

  async deleteProduct(_id) {
    const deleteProducts = await this.productModel.deleteOne({ _id }).exec();
    if (deleteProducts.deletedCount === 0) {
      throw new HttpException('notfound ', 404);
    }
    return deleteProducts;
  }
}
