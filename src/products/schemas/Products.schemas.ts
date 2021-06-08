/* eslint-disable prettier/prettier */
import * as Mongoose from 'mongoose';
import {
  Category,
  Tag,
  Inventory,
  Thumbnail,
} from './../interface/Products.interface';
export const ProductsSchema = new Mongoose.Schema({
  href: { type: String },
  name: { type: String },
  id: { type: String },
  slug: { type: String },
  summary: { type: String },
  description: { type: String },
  categories: {
    type: [{ ...Category }],
  },
  tags: {
    type: [
      {
        ...Tag,
      },
    ],
  },
  seller: { type: String },
  inventories: {
    type: [{ ...Inventory }],
  },
  thumbnail: {
    type: {
      ...Thumbnail,
    },
  },
  assets: {
    type: [
      {
        url: String,
      },
    ],
  },
  updatedOn: { type: String },
  createdOn: { type: String },
});
