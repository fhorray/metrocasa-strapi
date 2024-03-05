import type { Schema, Attribute } from '@strapi/strapi';

export interface PlantasPlanta extends Schema.Component {
  collectionName: 'components_plantas_plantas';
  info: {
    displayName: 'planta';
    icon: 'book';
    description: '';
  };
  attributes: {
    planta_title: Attribute.Enumeration<
      [
        'um_dormitorio',
        'dois_dormitorios',
        'um_dormitorio_plus_studio',
        'um_dormitorio_plus_office',
        'cobertura_duplex',
        'studio',
        'garden',
        'penthouse'
      ]
    >;
    planta_image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'plantas.planta': PlantasPlanta;
    }
  }
}
