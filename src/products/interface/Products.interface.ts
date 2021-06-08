export class Asset {
  url: string;
}

export class Thumbnail {
  url: string;
}

export class Inventory {
  unit: string;

  pricePerUnit: number;

  quantity: number;
}

export class Tag {
  href: string;
}

export class Category {
  href: string;
}

export interface Product {
  href: string;
  id: string;
  name: string;
  slug: string;
  summary?: string;

  description?: string;

  categories: [Category];

  tags?: Tag[];

  seller: string;

  inventories?: Inventory[];

  thumbnail?: Thumbnail;

  assets?: Asset[];

  updatedOn?: string;

  createdOn?: string;
}
