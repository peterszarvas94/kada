export type ImageType = {
  src: string;
  alt: string;
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  images: ImageType[];
  stock: number;
  brand: string;
  category: string;
  rating: number;
};

// this is mock data to simulate the database
const data: ProductType[] = [
  {
    id: 1,
    name: "iPhone9",
    description: "An apple mobile which is nothig like apple",
    price: 549,
    discount: 12.96,
    images: [
      {
        src: "/img/iphone9_1.png",
        alt: "Ipone 9",
      },
      {
        src: "/img/iphone9_2.jpg",
        alt: "Ipone 9",
      },
      {
        src: "/img/iphone9_3.jpg",
        alt: "Ipone 9",
      },
    ],
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    rating: 4.69,
  },
  {
    id: 2,
    name: "iPhoneX",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with HDR and True Tone",
    price: 899,
    discount: 17.94,
    images: [
      {
        src: "/img/iphonex_1.png",
        alt: "Ipone X",
      },
      {
        src: "/img/iphonex_2.jpg",
        alt: "Ipone X",
      },
    ],
    stock: 12,
    brand: "Apple",
    category: "smartphones",
    rating: 4.73,
  },
  {
    id: 3,
    name: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen. Do it all with a perfect balance of sleek design, speed, immersive audio, and significantly longer battery life than before.",
    price: 1499,
    discount: 10.23,
    images: [
      {
        src: "/img/surface_1.png",
        alt: "Microsoft Surface Laptop 4",
      },
      {
        src: "/img/surface_2.jpg",
        alt: "Microsoft Surface Laptop 4",
      },
    ],
    stock: 2,
    brand: "Microsoft",
    category: "laptops",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Brown Perfume",
    description: "A perfume",
    price: 40,
    discount: 15.66,
    images: [
      {
        src: "/img/perfume.png",
        alt: "Brown Perfume",
      },
    ],
    stock: 30,
    brand: "Brown",
    category: "perfumes",
    rating: 2.49,
  },
];

export async function getProducts(): Promise<ProductType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, Math.random() * 1000);
  });
}

export async function getProduct(id: number): Promise<ProductType> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = data.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("Product not found");
      }
    }, Math.random() * 1000);
  });
}

