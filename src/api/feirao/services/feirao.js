'use strict';

/**
 * feirao service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feirao.feirao');
