import type { Product, Brand, ScaleCategory, GasCategory, ProductCategory } from '../types/product';
import { weighingProducts, scaleCategories, scaleServices } from './weighing';
import { gasProducts, repairServices } from './gas';
import { brandLogos } from './brands';

export type { ScaleCategory, GasCategory, ProductCategory };
export type ProductAsset = Product;
export type BrandAsset = Brand;

export const scaleAssets = weighingProducts;
export const gasAssets = gasProducts;
export const brandAssets = brandLogos;

export { weighingProducts, gasProducts, brandLogos, scaleCategories, scaleServices, repairServices };

export const allAssets: Product[] = [...weighingProducts, ...gasProducts];

export function getScaleAssetsByCategory(category: ScaleCategory): Product[] {
  return weighingProducts.filter((item) => item.category === category);
}

export function getGasAssetsByCategory(category: GasCategory): Product[] {
  return gasProducts.filter((item) => item.category === category);
}

export function getAssetById(id: string): Product | undefined {
  return allAssets.find((item) => item.id === id);
}

export function getCategoryCounts() {
  const scaleCounts: Record<string, number> = {};
  for (const item of weighingProducts) {
    scaleCounts[item.category] = (scaleCounts[item.category] || 0) + 1;
  }

  const gasCounts: Record<string, number> = {};
  for (const item of gasProducts) {
    gasCounts[item.category] = (gasCounts[item.category] || 0) + 1;
  }

  return {
    scales: scaleCounts,
    gas: gasCounts,
    totalScales: weighingProducts.length,
    totalGas: gasProducts.length,
    totalBrands: brandLogos.length,
  };
}
