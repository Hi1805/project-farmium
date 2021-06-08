import { ApiProperty } from '@nestjs/swagger';

export class Asset {
  @ApiProperty({ type: String })
  url: string;
}

export class Thumbnail {
  @ApiProperty({ type: String })
  url: string;
}

export class Inventory {
  @ApiProperty({ type: String, required: true })
  unit: string;
  @ApiProperty({ type: Number, required: true })
  pricePerUnit: number;
  @ApiProperty({ type: Number, required: true })
  quantity: number;
}

export class Tag {
  @ApiProperty({ type: String })
  href: string;
}

export class Category {
  @ApiProperty({ type: String })
  href: string;
}
