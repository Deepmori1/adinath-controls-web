import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  subProducts?: { name: string; pdfUrl?: string }[];
}

export async function getProducts(): Promise<Product[]> {
  const querySnapshot = await getDocs(collection(db, 'products'));

  const products = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  console.log('📦 Firestore Products:', products);

  return products as Product[];
}
