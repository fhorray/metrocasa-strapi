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

export interface ImoveisPanorama extends Schema.Component {
  collectionName: 'components_imoveis_panoramas';
  info: {
    displayName: 'panorama';
    icon: 'code';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'[10, 10, 10]'>;
    panorama_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links_to: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'[0, 1, 2, 3]'>;
    link_id: Attribute.Integer;
    static_image_url: Attribute.String;
  };
}

export interface MateriaisBookDeValorizacao extends Schema.Component {
  collectionName: 'components_materiais_book_de_valorizacaos';
  info: {
    displayName: 'Book de Valoriza\u00E7\u00E3o';
    icon: 'layer';
    description: '';
  };
  attributes: {
    book_de_valorizacao: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Attribute.String;
  };
}

export interface MateriaisLinkUtil extends Schema.Component {
  collectionName: 'components_materiais_link_utils';
  info: {
    displayName: 'Link \u00DAtil';
    icon: 'information';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface MateriaisMateriaisGraficos extends Schema.Component {
  collectionName: 'components_materiais_materiais_graficos';
  info: {
    displayName: 'Material Gr\u00E1ficos';
    icon: 'crop';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MateriaisMateriais extends Schema.Component {
  collectionName: 'components_materiais_materiais';
  info: {
    displayName: 'Campanha da Semana';
    icon: 'folder';
    description: '';
  };
  attributes: {
    criativo_mobile: Attribute.Media<'images'>;
    criativo_desktop: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    material_de_apoio: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    relampago: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    flyers: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    planta_image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'facilities.facility': FacilitiesFacility;
      'imoveis.panorama': ImoveisPanorama;
      'materiais.book-de-valorizacao': MateriaisBookDeValorizacao;
      'materiais.link-util': MateriaisLinkUtil;
      'materiais.materiais-graficos': MateriaisMateriaisGraficos;
      'materiais.materiais': MateriaisMateriais;
      'plantas.planta': PlantasPlanta;
    }
  }
}
