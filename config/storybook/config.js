/* eslint-disable import/no-extraneous-dependencies */
import { configure, addParameters, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const req = require.context('../../src/stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const newViewports = {
  1440: {
    name: '1440 * 900',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
  1920: {
    name: '1920 * 1080',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  '4k': {
    name: '3480 * 2160',
    styles: {
      width: '3480px',
      height: '2160px',
    },
  },
};
addParameters({
  viewport: {
    viewports: {
      ...newViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
});

addDecorator(withInfo);

configure(loadStories, module);
