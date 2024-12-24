import areaConfig from '../../../lib/area.js';
import aosSchema from '../../../lib/aosSchema.js';

export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Accordion',
    icon: 'menu-open-icon',
    description: 'Add expandable content to your page',
    previewImage: 'svg'
  },
  icons: {
    'menu-open-icon': 'MenuOpen'
  },
  fields: {
    add: {
      accordions: {
        type: 'array',
        label: 'Accordions',
        titleField: 'title',
        inline: true,
        fields: {
          add: {
            title: {
              type: 'string',
              label: 'Title'
            },
            content: {
              type: 'area',
              label: 'Content',
              options: {
                widgets: areaConfig.apos
              }
            }
          }
        }
      },
      ...aosSchema
    }
  }
};
