'use client';

import { useState } from 'react';

const galerieItems = [
  {
    id: 0,
    title: 'Peinture 29',
    category: 'Peintures',
    size: '50x100 cm',
    price: '350 €',
    sold: false,
    imageUrl: '/images/peinture29.jpg',
    description: "Reproduction de l'oeuvre de l'artiste Daria Barbara Santos",
  },
  {
    id: 1,
    title: 'Peinture 13',
    category: 'Peintures',
    size: '78x50 cm',
    price: '400 €',
    sold: false,
    imageUrl: '/images/peinture13.jpg',
  },
  {
    id: 2,
    title: 'Peinture 11',
    category: 'Peintures',
    size: '78x50 cm',
    price: '400 €',
    sold: false,
    imageUrl: '/images/peinture11.jpg',
  },
  {
    id: 3,
    title: 'Peinture 12',
    category: 'Peintures',
    size: '40x30 cm',
    price: '150 €',
    sold: false,
    imageUrl: '/images/peinture12.jpg',
  },
  {
    id: 4,
    title: 'Peinture 17',
    category: 'Peintures',
    size: '70x50 cm',
    price: '300 €',
    sold: false,
    imageUrl: '/images/peinture17.jpg',
  },
  {
    id: 5,
    title: 'Peinture 10',
    category: 'Peintures',
    size: '50x30 cm',
    price: '250 €',
    sold: false,
    imageUrl: '/images/peinture10.jpg',
  },
  {
    id: 6,
    title: 'Peinture 6',
    category: 'Peintures',
    size: '40x30 cm',
    price: '150 €',
    sold: false,
    imageUrl: '/images/peinture6.jpg',
    description: "Reproduction de l'oeuvre de l'artiste Daria Barbara Santos",
  },
  {
    id: 7,
    title: 'Peinture 14',
    category: 'Peintures',
    size: '100x80 cm',
    price: '600 €',
    sold: false,
    imageUrl: '/images/peinture14.jpg',
  },
  {
    id: 8,
    title: 'Peinture 7',
    category: 'Peintures',
    size: '40X30 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/peinture7.jpg',
  },
  {
    id: 9,
    title: 'Peinture 8',
    category: 'Peintures',
    size: '39x39 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/peinture8.jpg',
  },
  {
    id: 10,
    title: 'Peinture 3',
    category: 'Peintures',
    size: '50x50 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/peinture3.jpeg',
    description: "Oeuvre acquise par la mairie de mions",
  },
  {
    id: 11,
    title: 'Peinture 4',
    category: 'Peintures',
    size: '50x50 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/peinture4.jpeg',
    description: "Oeuvre acquise par la mairie de mions",
  },
  {
    id: 12,
    title: 'Peinture 18',
    category: 'Peintures',
    size: '80x60 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/peinture18.jpg',
  },
  {
    id: 13,
    title: 'Peinture 15',
    category: 'Peintures',
    size: '50x50 cm',
    price: '300 €',
    sold: false,
    imageUrl: '/images/peinture15.jpg',
  },
  {
    id: 14,
    title: 'Portrait 5',
    category: 'Peintures',
    size: '40x60 cm',
    price: '200 €',
    sold: false,
    imageUrl: '/images/portrait5.jpeg',
  },
  {
    id: 15,
    title: 'Portrait 6',
    category: 'Peintures',
    size: '39x39 cm',
    price: '150 €',
    sold: false,
    imageUrl: '/images/portrait6.jpeg',
  },
  {
    id: 16,
    title: 'Peinture 9',
    category: 'Peintures',
    size: '40x60 cm',
    price: '140 €',
    sold: false,
    imageUrl: '/images/peinture9.jpg',
  },
  {
    id: 17,
    title: 'Portrait 8',
    category: 'Peintures',
    size: '40x60 cm',
    price: '300 €',
    sold: false,
    imageUrl: '/images/portrait8.jpeg',
  },
  {
    id: 18,
    title: 'Portrait 9',
    category: 'Peintures',
    size: '40x60 cm',
    price: '300 €',
    sold: false,
    imageUrl: '/images/portrait9.jpeg',
  },
  {
    id: 19,
    title: 'Portrait 7',
    category: 'Peintures',
    size: '40x60 cm',
    price: '300 €',
    sold: false,
    imageUrl: '/images/portrait7 (1).jpeg',
  },
  {
    id: 20,
    title: 'Peinture 16',
    category: 'Peintures',
    size: '29x24 cm',
    price: '150 €',
    sold: false,
    imageUrl: '/images/peinture16.jpg',
  },
  {
    id: 21,
    title: 'Peinture 20',
    category: 'Peintures',
    size: '40x60 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/niaiz4.jpg.jpeg',
  },
  {
    id: 22,
    title: 'Peinture 21',
    category: 'Peintures',
    size: '60x80 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/niaiz5.jpg',
  },
  {
    id: 23,
    title: 'Portrait 11',
    category: 'Peintures',
    size: '39x39 cm',
    price: '150 €',
    sold: false,
    imageUrl: '/images/portrait11.jpeg',
  },
  {
    id: 32,
    title: 'Peinture 19',
    category: 'Peintures',
    size: '39X39 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/crayon9.jpg',
  },
  {
    id: 40,
    title: 'Peinture 22',
    category: 'Peintures',
    size: '20X30 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/peinture22.jpg',
  },
  {
    id: 24,
    title: 'Dessin Crayon 1',
    category: 'Dessins au crayon',
    size: 'A4',
    price: '50 €',
    sold: false,
    imageUrl: '/images/crayon1.jpeg',
  },
  {
    id: 25,
    title: 'Dessin Crayon 2',
    category: 'Dessins au crayon',
    size: 'A4',
    price: '50 €',
    sold: false,
    imageUrl: '/images/crayon2.jpeg',
  },
  {
    id: 26,
    title: 'Dessin Crayon 3',
    category: 'Dessins au crayon',
    size: 'A4',
    price: '50 €',
    sold: false,
    imageUrl: '/images/crayon3.jpeg',
  },
  {
    id: 27,
    title: 'Dessin Crayon 4',
    category: 'Dessins au crayon',
    size: 'A4',
    price: '50 €',
    sold: false,
    imageUrl: '/images/crayon4.jpeg',
  },
  {
    id: 28,
    title: 'Dessin Crayon 5',
    category: 'Dessins au crayon',
    size: 'A4',
    price: '50 €',
    sold: false,
    imageUrl: '/images/crayon5.jpeg',
  },
  {
    id: 29,
    title: 'Dessin Crayon 6',
    category: 'Dessins au crayon',
    size: 'A4',
    price: '50 €',
    sold: false,
    imageUrl: '/images/crayon6.jpeg',
  },
  {
    id: 30,
    title: 'Dessin Crayon 7',
    category: 'Dessins au crayon',
    size: 'A4',
    price: '50 €',
    sold: false,
    imageUrl: '/images/crayon7.jpeg',
  },
  {
    id: 31,
    title: 'Dessin Crayon 8',
    category: 'Dessins au crayon',
    size: 'A4',
    price: '50 €',
    sold: false,
    imageUrl: '/images/crayon8.jpeg',
  },
  {
    id: 33,
    title: 'Dessin Crayon 10',
    category: 'Dessins au crayon',
    size: 'A4',
    price: '50 €',
    sold: false,
    imageUrl: '/images/crayon10.jpg',
  },
  {
    id: 34,
    title: 'Dessin Crayon 11',
    category: 'Dessins au crayon',
    size: 'A4',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/crayon11.jpg',
  },
  // Ajouts demandés
  {
    id: 42,
    title: 'Peinture 23',
    category: 'Peintures',
    size: '39X39 cm',
    price: '250 €',
    sold: false,
    imageUrl: '/images/peinture23.jpg',
  },
  {
    id: 43,
    title: 'Peinture 24',
    category: 'Peintures',
    size: '60x80 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/peinture24.jpg',
  },
  {
    id: 44,
    title: 'Peinture 25',
    category: 'Peintures',
    size: '60x80 cm',
    price: '200 €',
    sold: false,
    imageUrl: '/images/peinture25.jpg',
  },
  {
    id: 45,
    title: 'Peinture 26',
    category: 'Peintures',
    size: '40X60 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/peinture26.jpg',
  },
  {
    id: 46,
    title: 'Peinture 27',
    category: 'Peintures',
    size: '40X60 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/peinture27.jpg',
  },
  {
    id: 47,
    title: 'Peinture 28',
    category: 'Peintures',
    size: '40X60 cm',
    price: 'Vendu',
    sold: true,
    imageUrl: '/images/peinture28.jpg',
  },
];

export default function Galerie() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-8 py-12">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Galerie
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        {/* Section Peintures */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Peintures
            </h2>
            <p className="text-gray-600 text-lg">
              Découvrez ma collection de peintures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galerieItems
          .filter(item => item.category === 'Peintures')
          .map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity duration-200" 
                      onClick={() => openModal(item.imageUrl)}
                    />
                    {item.sold && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Vendu
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    {item.title && <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>}
                    {item.description && (
                      <p className="text-sm text-blue-700 italic mb-2">{item.description}</p>
                    )}
                    <div className="space-y-2">
                      <p className="text-gray-600 flex items-center">
                        <span className="font-medium mr-2">Taille:</span>
                        {item.size}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <span className="font-medium mr-2">Prix:</span>
                        {item.sold ? 'Vendu' : item.price}
                      </p>
                    </div>
                  </div>
            </div>
          ))}
      </div>
        </div>

        {/* Section Dessins au crayon */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Dessins au crayon
            </h2>
            <p className="text-gray-600 text-lg">
              Mes œuvres au crayon graphite
            </p>
          </div>
          
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galerieItems
          .filter(item => item.category === 'Dessins au crayon')
          .map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity duration-200" 
                      onClick={() => openModal(item.imageUrl)}
                    />
                    {item.sold && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Vendu
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 flex items-center">
                        <span className="font-medium mr-2">Taille:</span>
                        {item.size}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <span className="font-medium mr-2">Prix:</span>
                        {item.sold ? 'Vendu' : item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Section informations supplémentaires */}
        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Œuvres disponibles à la vente
            </span>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-gray-800">
                Négociations possibles
              </h3>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-center leading-relaxed">
              Je suis ouverte aux négociations concernant le prix des toiles. 
              N&apos;hésitez pas à me contacter pour discuter des conditions de vente.
            </p>
          </div>

          <div className="bg-white border-2 border-blue-300 rounded-2xl p-6 max-w-2xl mx-auto shadow-xl">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              <h3 className="text-lg font-semibold text-gray-800">Commande de portrait personnalisé</h3>
            </div>
            <p className="text-gray-800 text-center font-medium">
              Je réalise des portraits sur-mesure à partir de vos photos. Contactez-moi pour les délais et tarifs. Format A4 au crayon uniquement.
            </p>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-full p-4">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage} 
                alt="En grand" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
              />
            </div>
          </div>
        )}


      </div>
    </div>
  );
} 