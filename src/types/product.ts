export type ScaleCategory =
  | 'Grocery / Counter Scales'
  | 'Platform Scales'
  | 'Heavy-Duty Platform Scales'
  | 'Hanging Scales'
  | 'Jewellery / Precision Scales'
  | 'Other Commercial Scales'
  | 'Weighbridge Equipment';

export type GasCategory =
  | 'Gas Stoves'
  | 'Burners'
  | 'Regulators'
  | 'Hoses'
  | 'Valves / Jets / Knobs'
  | 'Spare Parts'
  | 'Repair / Service';

export type ProductCategory = ScaleCategory | GasCategory;

export interface Product {
  id: string;
  section: 'scale' | 'gas';
  category: ProductCategory;
  categoryGu: string;
  categoryEn: string;
  subcategory: string;
  nameGu: string;
  nameEn: string;
  descGu: string;
  descEn: string;
  badgeGu: string;
  badgeEn: string;
  capacityGu?: string;
  capacityEn?: string;
  capacities?: string[];
  brand?: string;
  bestUseGu?: string;
  bestUseEn?: string;
  repairAvailable?: boolean;
  gallery?: string[];
  src: string;
  alt: string;
  featured?: boolean;
  whatsappMsg: string;
}

export interface Brand {
  id: string;
  name: string;
  fullName: string;
  logo: string;
  alt: string;
  tag: string;
}

export interface ScaleCategoryItem {
  nameGu: string;
  nameEn: string;
  range: string;
  icon: string;
}

export interface ScaleServiceItem {
  titleGu: string;
  titleEn: string;
  descGu: string;
  descEn: string;
  badgeGu: string;
  badgeEn: string;
}

export interface GasRepairServiceItem {
  id: string;
  titleGu: string;
  titleEn: string;
  descGu: string;
  descEn: string;
  tagGu: string;
  tagEn: string;
  icon: string;
}
