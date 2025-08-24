'use client';

import { useState } from 'react';

export default function APropos() {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-8 py-12">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            À propos
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        {/* Section Image et Texte */}
        <div className="max-w-6xl mx-auto">
          {/* Image */}
          <div className="mb-12">
            <div className="relative">
              <div className="w-full h-96 md:h-[500px] rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/images/5798640187213991286.jpg" 
                  alt="Tanya, artiste dans son atelier entourée de ses peintures" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextSibling as HTMLDivElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg" style={{display: 'none'}}>
                  Image à ajouter dans /public/images/
                </div>
              </div>
              {/* Effet de décoration */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Texte */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                  Tanya
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg md:text-xl">
                    <strong>Tanya</strong>, née en 1976 à Lyon, est une artiste autodidacte polyvalente.
                  </p>
                  
                  <p className="text-base md:text-lg">
                    Bien qu&apos;elle ait toujours travaillé dans le domaine du marketing et de l&apos;accueil, elle a toujours été passionnée par les arts, la lecture et la photo depuis sa plus tendre enfance.
                  </p>
                  
                  <p className="text-base md:text-lg">
                    À l&apos;âge de 12 ans, elle remporte le concours de dessin lancé par Canal+ sur le thème du film &quot;L&apos;Ours&quot;. Participant à des tests et concours qu&apos;elle réussit avec succès, elle décide d&apos;abord de se diriger dans le Stylisme ayant un amour pour le dessin, la mode et les vêtements. Elle se voit malheureusement contrainte d&apos;abandonner ses rêves pour pouvoir se consacrer à l&apos;éducation de ses enfants.
                  </p>
                  
                  {/* Texte complet qui s'affiche conditionnellement */}
                  {showFullText && (
                    <div className="space-y-6">
                      <p className="text-base md:text-lg">
                        En 2021, sa passion la rattrape et elle se lance dans une collection de robes de soirée en tant que Styliste autodidacte à son compte.
                      </p>
                      
                      <p className="text-base md:text-lg">
                        Très ambitieuse, en Septembre 2022 elle s&apos;autoproclame portraitiste amateur parallèlement, et retrouve enfin son univers artistique, se consacrant uniquement au dessin au crayon.
                      </p>
                      
                      <p className="text-base md:text-lg">
                        En Décembre 2022, elle est sollicitée en tant qu&apos;illustratrice pour la vidéo d&apos;un groupe de rap pour le titre &quot;Angel&quot; (disponible sur YouTube).
                      </p>
                      
                      <p className="text-base md:text-lg">
                        En mai 2023, elle collabore en tant que photographe et monteuse vidéo pour un site d&apos;articles de maison.
                      </p>
                      
                      <p className="text-base md:text-lg">
                        Suite à un accident en Septembre 2023, elle perd la vue d&apos;un œil. Ce drame va marquer un tournant dans sa vie artistique qu&apos;elle décide d&apos;abord d&apos;abandonner se sentant incapable de pouvoir reprendre un jour un crayon et d&apos;essayer de dessiner à nouveau, son œil restant ayant une faible acuité.
                      </p>
                      
                      <p className="text-base md:text-lg">
                        En fin Décembre 2023 elle décide de se relever et s&apos;attaque à la peinture acrylique, certaines de ses œuvres reflétant le traumatisme qu&apos;elle vit.
                      </p>
                      
                      <p className="text-base md:text-lg font-semibold text-gray-800">
                        Elle décide à ce moment-là de ne se consacrer qu&apos;à l&apos;art et d&apos;essayer de se perfectionner dans la peinture.
                      </p>
                    </div>
                  )}
                  
                  {/* Bouton Lire la suite / Voir moins */}
                  <div className="text-center pt-6">
                    <button
                      onClick={() => setShowFullText(!showFullText)}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      {showFullText ? (
                        <>
                          <span>Voir moins</span>
                          <svg className="w-5 h-5 ml-3 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Lire la suite</span>
                          <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section de contact ou informations supplémentaires */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Disponible pour des commandes personnalisées
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 