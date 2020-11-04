/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */

import SuccessStory from '@package/components/Views/SuccessStory';
import HighlightsViewBlock from '@package/components/Blocks/Highlights/View';
import HighlightsEditBlock from '@package/components/Blocks/Highlights/Edit';
import { RatingWidget } from './components';




import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
} from '@plone/volto/config';

import MainSliderViewBlock from '@package/components/Blocks/MainSlider/View';
import MainSliderEditBlock from '@package/components/Blocks/MainSlider/Edit';
import sliderSVG from '@plone/volto/icons/slider.svg';

import { defineMessages } from 'react-intl';

defineMessages({
  mainslider: {
    id: 'Main Slider',
    defaultMessage: 'Main Slider',
  },
});

const customBlocks = {
  mainslider: {
    id: 'mainslider',
    title: 'Main Slider',
    icon: sliderSVG,
    group: 'common',
    view: MainSliderViewBlock,
    edit: MainSliderEditBlock,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
  },
  highlights: {
    id: 'highlights',
    title: 'Highlights',
    icon: sliderSVG,
    group: 'common',
    view: HighlightsViewBlock,
    edit: HighlightsEditBlock,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
  },
};

// export const tiles = {
//   ...defaultTiles,
//   tilesConfig: { ...defaultTiles.tilesConfig, ...customTiles },
// };

export const settings = {
  ...defaultSettings,
};

export const views = {
  ...defaultViews,
  contentTypesViews: {
    ...defaultViews.contentTypesViews,
    success_story: SuccessStory,
  },
};

// export const widgets = {
//   ...defaultWidgets,
// };

export const widgets = {
  ...defaultWidgets,
  id: {
    ...defaultWidgets.id,
    rating: RatingWidget,
  },
};

export const blocks = {
         ...defaultBlocks,
         requiredBlocks: [],
         blocksConfig: { ...defaultBlocks.blocksConfig, ...customBlocks },
       };


// export const widgets = {
//   ...defaultWidgets,
//   id: {
//     ...defaultWidgets.id,
//     rating: RatingWidget,
//   },
// };       