import type { Schema, Attribute } from '@strapi/strapi';

export interface ImoveisBooks extends Schema.Component {
  collectionName: 'components_imoveis_books';
  info: {
    displayName: 'Materiais';
    icon: 'book';
    description: '';
  };
  attributes: {
    a3: Attribute.Media<'files'>;
    fase_1: Attribute.Media<'files'>;
    fase_2: Attribute.Media<'files'>;
    fase_3: Attribute.Media<'files'>;
    ri: Attribute.Media<'files'>;
    is_active: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ImoveisEvolucaoDeObras extends Schema.Component {
  collectionName: 'components_imoveis_evolucao_de_obras';
  info: {
    displayName: 'Evolu\u00E7\u00E3o de Obras';
    icon: 'check';
  };
  attributes: {
    is_active: Attribute.Boolean;
    percentual_de_obras: Attribute.Integer;
    demolicao: Attribute.Integer;
    terraplanagem: Attribute.Integer;
    fundacao_superficial: Attribute.Integer;
    fundacao_profunda: Attribute.Integer;
    estrutura: Attribute.Integer;
    fechamento: Attribute.Integer;
    acabamento: Attribute.Integer;
    gallery: Attribute.Media<'images', true>;
  };
}

export interface ImoveisFacility extends Schema.Component {
  collectionName: 'components_facilities_facilities';
  info: {
    displayName: 'facilidades';
    description: '';
  };
  attributes: {
    facilidades: Attribute.Enumeration<
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

export interface ImoveisPlanta extends Schema.Component {
  collectionName: 'components_plantas_plantas';
  info: {
    displayName: 'plantas';
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'imoveis.books': ImoveisBooks;
      'imoveis.evolucao-de-obras': ImoveisEvolucaoDeObras;
      'imoveis.facility': ImoveisFacility;
      'imoveis.panorama': ImoveisPanorama;
      'imoveis.planta': ImoveisPlanta;
      'materiais.book-de-valorizacao': MateriaisBookDeValorizacao;
      'materiais.link-util': MateriaisLinkUtil;
      'materiais.materiais-graficos': MateriaisMateriaisGraficos;
      'materiais.materiais': MateriaisMateriais;
    }
  }
}
