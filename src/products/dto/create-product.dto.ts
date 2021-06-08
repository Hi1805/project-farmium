import {
  Asset,
  Category,
  Tag,
  Inventory,
  Thumbnail,
} from './../property/Product.property';
import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty({ type: String, required: true })
  name: string;

  @ApiProperty({ type: String, required: false })
  summary: string;

  @ApiProperty({ type: String, required: false })
  description: string;

  @ApiProperty({ type: [Category], required: true })
  categories: [Category];

  @ApiProperty({ type: [Tag], required: false })
  tags: Tag[];

  @ApiProperty({ type: String, required: true })
  seller: string;

  @ApiProperty({ type: [Inventory], required: false })
  inventories: Inventory[];

  @ApiProperty({ type: Thumbnail, required: false })
  thumbnail: Thumbnail;

  @ApiProperty({ type: [Asset], required: false })
  assets: Asset[];

  @ApiProperty({ type: String, required: false })
  updatedOn: string;

  @ApiProperty({ type: String, required: false })
  createdOn: string;
}
