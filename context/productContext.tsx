// context/ProductContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  stock: number;
  createdAt: Date;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'Premium noise-canceling wireless headphones',
      price: 199.99,
      category: 'Electronics',
      imageUrl: 'https://placehold.co/400',
      stock: 25,
      createdAt: new Date('2023-10-15')
    },
    {
      id: '2',
      name: 'Smart Watch',
      description: 'Fitness and health tracking smartwatch',
      price: 249.99,
      category: 'Wearables',
      imageUrl: 'https://placehold.co/400',
      stock: 18,
      createdAt: new Date('2023-11-01')
    },
    {
      id: '3',
      name: 'Ergonomic Keyboard',
      description: 'Comfortable typing experience with programmable keys',
      price: 129.99,
      category: 'Computer Accessories',
      imageUrl: 'https://placehold.co/400',
      stock: 32,
      createdAt: new Date('2023-12-05')
    }
  ]);

  const addProduct = (product: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: string, updatedProductData: Partial<Product>) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, ...updatedProductData } 
        : product
    ));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      addProduct, 
      updateProduct, 
      deleteProduct,
      getProductById
    }}>
      {children}
    </ProductContext.Provider>
  );
};