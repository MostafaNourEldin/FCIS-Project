/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export const CATEGORIES: Category[] = [
  { id: 't-shirts', name: 'T-shirts', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800', count: 24 },
  { id: 'hoodies', name: 'Hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800', count: 18 },
  { id: 'shorts', name: 'Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800', count: 12 },
  { id: 'joggers', name: 'Joggers', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800', count: 15 },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1520218522547-3bc3964d749a?auto=format&fit=crop&q=80&w=800', count: 32 },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Apex Seamless Tee',
    price: 45,
    category: 'T-shirts',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=800',
    description: 'High-performance seamless construction with moisture-wicking technology.',
    rating: 4.8,
    reviews: 124,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Slate', 'Venom Green'],
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Core Performance Hoodie',
    price: 65,
    category: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-soft fleece back with a athletic fit and reflective detailing.',
    rating: 4.9,
    reviews: 89,
    sizes: ['M', 'L', 'XL'],
    colors: ['Black', 'Dark Gray'],
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'Stealth Training Shorts',
    price: 35,
    category: 'Shorts',
    image: 'https://images.unsplash.com/photo-1516246399438-8926f092306d?auto=format&fit=crop&q=80&w=800',
    description: 'Lightweight recycled polyester with 4-way stretch and zip pockets.',
    rating: 4.7,
    reviews: 210,
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Navy'],
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Infinity Tech Joggers',
    price: 55,
    category: 'Joggers',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
    description: 'Tapered fit with reinforced knees and breathable mesh panels.',
    rating: 4.6,
    reviews: 156,
    sizes: ['M', 'L', 'XL'],
    colors: ['Gray', 'Black'],
    isBestSeller: true,
  },
  {
    id: '5',
    name: 'Evo Training Belt',
    price: 40,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1520218522547-3bc3964d749a?auto=format&fit=crop&q=80&w=800',
    description: 'Lever-action support for heavy lifts, made from premium cowhide leather.',
    rating: 5.0,
    reviews: 45,
    sizes: ['One Size'],
    colors: ['Black'],
    isFeatured: true,
  },
  {
    id: '6',
    name: 'Graphic Oversized Tee',
    price: 38,
    category: 'T-shirts',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    description: 'Heavyweight cotton with a bold graphic print and dropped shoulders.',
    rating: 4.5,
    reviews: 72,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Vintage Black'],
  },
];
