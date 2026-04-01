export interface Product {
  id: string
  name: string
  icon: string
  image: string
  shortDescription: string
  useCases: string
  customization: string
}

const products: Product[] = [
  {
    id: 'sacs-tisses-polypropylene',
    name: 'Sacs tisses en polypropylene',
    icon: 'package',
    image:
      'https://i.postimg.cc/28Ks6H48/pp-sacs.jpg',
    shortDescription:
      'Solution robuste pour le conditionnement et le transport de charges seches en environnement industriel.',
    useCases: 'Granules, matieres premieres, poudres, transport logistique en palette.',
    customization:
      'Formats, grammages, couleurs et impression jusqu\'a 4 couleurs selon cahier des charges.',
  },
  {
    id: 'sacs-agricoles',
    name: 'Sacs agricoles',
    icon: 'wheat',
    image:
      'sac_agrico.png',
    shortDescription:
      'Conçus pour proteger les recoltes et faciliter la manutention dans la chaine agricole.',
    useCases: 'Cereales, semences, aliments betail, stockage saisonnier.',
    customization:
      'Choix de dimensions, ventilation, marquage cooperative ou marque distributeur.',
  },
  {
    id: 'sacs-industriels',
    name: 'Sacs industriels',
    icon: 'factory',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Sacs techniques adaptes aux lignes de production et aux contraintes de chargement intensif.',
    useCases: 'Chimie, materiaux de construction, transformation industrielle.',
    customization:
      'Resistance renforcee, finitions specifiques, marquage codifie par lot.',
  },
  {
    id: 'sacs-valve',
    name: 'Sacs a valve (ciment, chaux, platre)',
    icon: 'hard-hat',
    image:
      'https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Remplissage rapide en station automatique grace a la valve, avec excellente tenue mecanique.',
    useCases: 'Cimenteries, unites de chaux, platreries.',
    customization:
      'Position et type de valve, grammage, impression technique et commerciale.',
  },
  {
    id: 'sacs-fond-carre',
    name: 'Sacs a fond carre',
    icon: 'box',
    image:
      'https://images.unsplash.com/photo-1635865165118-917ed9e20936?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Base stable pour empilage optimise et presentation soignee en entrepot ou point de vente.',
    useCases: 'Produits pulverulents, melanges industriels, conditionnement premium.',
    customization:
      'Structure multicouche, dimensions precises, options de fermeture.',
  },
  {
    id: 'sacs-alimentaires',
    name: 'Sacs alimentaires',
    icon: 'shield-check',
    image:
      'https://images.unsplash.com/photo-1576186726580-aed3f0d6ca2f?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Fabrication controlee pour les filieres alimentaires avec exigence d\'hygiene et de tracabilite.',
    useCases: 'Denrees seches, ingredients agroalimentaires, logistique export.',
    customization:
      'Couche interne adaptee, etiquetage reglementaire, impression conforme marque.',
  },
  {
    id: 'sacs-farine',
    name: 'Sacs farine',
    icon: 'badge-percent',
    image:
      'https://images.unsplash.com/photo-1610353563545-8e47e5de4b81?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Format dedie aux minoteries pour proteger la farine contre humidite et contamination externe.',
    useCases: 'Farine boulangere, semoule, melanges cerealiers.',
    customization:
      'Formats 5 kg a 50 kg, impression marque minoterie et informations produit.',
  },
  {
    id: 'sacs-sucre',
    name: 'Sacs sucre',
    icon: 'droplets',
    image:
      'https://images.unsplash.com/photo-1584473457493-17c4d16f7f58?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Conditionnement resistant pour sucre cristallise avec excellente tenue en stockage longue duree.',
    useCases: 'Raffineries, grossistes, distribution nationale et export.',
    customization:
      'Impression haute visibilite, options anti-humidite, formats logistiques standards.',
  },
  {
    id: 'sacs-engrais',
    name: 'Sacs engrais',
    icon: 'leaf',
    image:
      'https://images.unsplash.com/photo-1592982537447-6f2a6a0e3f5d?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Sacs renforces pour produits fertilisants avec resistance a la manutention et au stockage.',
    useCases: 'Engrais granules, fertilisants composes, produits agricoles techniques.',
    customization:
      'Traitements anti-UV, grammage adapte, impression par campagne saisonniere.',
  },
  {
    id: 'sacs-personnalises-logo',
    name: 'Sacs personnalises avec logo',
    icon: 'stamp',
    image:
      'https://images.unsplash.com/photo-1605600659873-d808a13e4f85?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Support de marque pour valoriser l\'identite visuelle et renforcer la presence commerciale.',
    useCases: 'Marques industrielles, distributeurs, cooperatives et exportateurs.',
    customization:
      'Charte graphique complete, logos, visuels techniques et informations multilingues.',
  },
]

export default products
