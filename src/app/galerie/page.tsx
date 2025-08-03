import Link from 'next/link';

const galerieItems = [
  {
    id: 1,
    title: 'Peinture 1',
    category: 'Peintures',
    size: 'Dimensions',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture1.jpeg',
  },
  {
    id: 2,
    title: 'Peinture 2',
    category: 'Peintures',
    size: '29x29x1.5 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture2.jpeg',
  },
  {
    id: 23,
    title: 'Peinture 3',
    category: 'Peintures',
    size: '50x50 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture3.jpeg',
  },
  {
    id: 24,
    title: 'Peinture 4',
    category: 'Peintures',
    size: '50x50 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture4.jpeg',
  },
  {
    id: 11,
    title: 'Peinture 5',
    category: 'Peintures',
    size: '60x80 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture5.jpg',
  },
  {
    id: 12,
    title: 'Peinture 6',
    category: 'Peintures',
    size: 'Dimensions',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture6.jpg',
  },
  {
    id: 13,
    title: 'Peinture 7',
    category: 'Peintures',
    size: 'Dimensions',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture7.jpg',
  },
  {
    id: 14,
    title: 'Peinture 8',
    category: 'Peintures',
    size: '39x39x1.5 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture8.jpg',
  },
  {
    id: 26,
    title: 'Peinture 9',
    category: 'Peintures',
    size: '50x50x1.5 cm',
    price: '140 €',
    sold: false,
    imageUrl: '/images/peinture9.jpg',
  },
  {
    id: 27,
    title: 'Peinture 10',
    category: 'Peintures',
    size: '30x40 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture10.jpg',
  },
  {
    id: 28,
    title: 'Peinture 11',
    category: 'Peintures',
    size: '60x80 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture11.jpg',
  },
  {
    id: 29,
    title: 'Peinture 12',
    category: 'Peintures',
    size: 'Dimensions à préciser',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/peinture12.jpg',
  },
  {
    id: 3,
    title: 'Dessin Crayon 1',
    category: 'Dessins au crayon',
    size: 'A4',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/crayon1.jpeg',
  },
  {
    id: 4,
    title: 'Dessin Crayon 2',
    category: 'Dessins au crayon',
    size: 'A4',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/crayon2.jpeg',
  },
  {
    id: 5,
    title: 'Dessin Crayon 3',
    category: 'Dessins au crayon',
    size: 'A4',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/crayon3.jpeg',
  },
  {
    id: 6,
    title: 'Dessin Crayon 4',
    category: 'Dessins au crayon',
    size: 'A4',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/crayon4.jpeg',
  },
  {
    id: 7,
    title: 'Dessin Crayon 5',
    category: 'Dessins au crayon',
    size: 'A4',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/crayon5.jpeg',
  },
  {
    id: 8,
    title: 'Dessin Crayon 6',
    category: 'Dessins au crayon',
    size: 'A4',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/crayon6.jpeg',
  },
  {
    id: 9,
    title: 'Dessin Crayon 7',
    category: 'Dessins au crayon',
    size: 'A4',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/crayon7.jpeg',
  },
  {
    id: 10,
    title: 'Dessin Crayon 8',
    category: 'Dessins au crayon',
    size: 'A4',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/crayon8.jpeg',
  },
  {
    id: 15,
    title: 'Niaiz 4',
    category: 'Peintures',
    size: '29x29x1.5 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/niaiz4.jpg.jpeg',
  },
  {
    id: 25,
    title: 'Niaiz 5',
    category: 'Peintures',
    size: '50x50 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/niaiz5.jpg.jpeg',
  },
  {
    id: 16,
    title: 'Portrait 1',
    category: 'Peintures',
    size: '29x29x1.5 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/portrait1.jpeg',
  },
  {
    id: 17,
    title: 'Portrait 5',
    category: 'Peintures',
    size: '29x29x1.5 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/portrait5.jpeg',
  },
  {
    id: 18,
    title: 'Portrait 7',
    category: 'Peintures',
    size: '29x29x1.5 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/portrait7 (1).jpeg',
  },
  {
    id: 19,
    title: 'Portrait 8',
    category: 'Peintures',
    size: '29x29x1.5 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/portrait8.jpeg',
  },
  {
    id: 20,
    title: 'Portrait 9',
    category: 'Peintures',
    size: '29x29x1.5 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/portrait9.jpeg',
  },
  {
    id: 21,
    title: 'Portrait 6',
    category: 'Peintures',
    size: '39x39x1.5 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/portrait6.jpeg',
  },
  {
    id: 22,
    title: 'Portrait 11',
    category: 'Peintures',
    size: '39x39x1.5 cm',
    price: 'Prix',
    sold: false,
    imageUrl: '/images/portrait11.jpeg',
  },
];

export default function Galerie() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Galerie</h1>
      <h2 className="text-2xl font-semibold mb-8 text-center">Peintures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {galerieItems
          .filter(item => item.category === 'Peintures')
          .map(item => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md flex flex-col">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover mb-4 rounded-md" />
              {item.title && <h3 className="text-xl font-semibold mb-2">{item.title}</h3>}
              <p className="text-gray-600 flex-grow">Taille: {item.size}</p>
              <p className="text-gray-600">
                {item.sold ? 'Vendu' : `Prix: ${item.price}`}
              </p>
            </div>
          ))}
      </div>

      <h2 className="text-2xl font-semibold mb-8 text-center">Dessins au crayon</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galerieItems
          .filter(item => item.category === 'Dessins au crayon')
          .map(item => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md flex flex-col">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover mb-4 rounded-md" />
              {item.title && <h3 className="text-xl font-semibold mb-2">{item.title}</h3>}
              <p className="text-gray-600 flex-grow">Taille: {item.size}</p>
              <p className="text-gray-600">
                {item.sold ? 'Vendu' : `Prix: ${item.price}`}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
} 