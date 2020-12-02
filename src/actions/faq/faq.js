/**
 * Faq actions.
 * @module actions/faq/faq
 */

import { GET_FAQ } from '../../constants/ActionTypes';

/**
 * Get FAQ items.
 * @function getFaq
 * @returns {Object} Faq action.
 */
export function getFaq() {
  return {
    type: GET_FAQ,
    request: {
      op: 'get',
      path: `/@search?portal_type=faq`,
    },
  };
}

// addons: "volto-slate": "^1.0.0"
// dependencies: "@eeacms/volto-block-style": "^1.0.0"
// 