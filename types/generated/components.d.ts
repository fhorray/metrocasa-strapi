import type { Schema, Attribute } from '@strapi/strapi';

export interface FacilitiesFacility extends Schema.Component {
  collectionName: 'components_facilities_facilities';
  info: {
    displayName: 'facility';
    description: '';
  };
  attributes: {
    facility: Attribute.Enumeration<
      [
        'Academia',
        'Biciclet\u00E1rio',
        'Brinquedoteca',
        'Churrasqueira',
        'Churrasqueira com Pergolado',
        'Coworking',
        'Delivery Space',
        'Ducha',
        'Espa\u00E7o com Espelho D\u2019\u00E1gua',
        'Espa\u00E7o Cross Training',
        'Espa\u00E7o Gourmet',
        'Espa\u00E7o Kids',
        'Espa\u00E7o Leitura',
        'Espa\u00E7o Multiuso',
        'Espa\u00E7o Pet Care',
        'Espa\u00E7o Sport Bar',
        'Espa\u00E7o Zen',
        'Fitness Externo',
        'Hall de Acesso',
        'Hall Social',
        'Lavanderia',
        'Living',
        'Lobby',
        'Lounge',
        'Market',
        'Paisagismo',
        'Patinete Place',
        'Pet Place',
        'Piscina',
        'Playground',
        'Portaria',
        'Portaria com Clausura',
        'Pra\u00E7a da Fogueira',
        'Pra\u00E7a de Conviv\u00EAncia',
        'Pra\u00E7a de Leitura',
        'Quadra Poliesportiva',
        'Quadra Recreativa',
        'Red\u00E1rio',
        'Sala de Estudos',
        'Sal\u00E3o de Festas',
        'Sal\u00E3o de Jogos',
        'Sauna',
        'Sky Lounge',
        'Sol\u00E1rio',
        'Spa / Sauna',
        'Sport Play'
      ]
    >;
  };
}

export interface ImoveisMateriais extends Schema.Component {
  collectionName: 'components_imoveis_materiais';
  info: {
    displayName: 'Materiais';
    icon: 'stack';
    description: '';
  };
  attributes: {
    ri: Attribute.String;
    books: Attribute.JSON;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
  };
}

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
      'facilities.facility': FacilitiesFacility;
      'imoveis.materiais': ImoveisMateriais;
      'layout.link': LayoutLink;
      'plantas.planta': PlantasPlanta;
    }
  }
}
