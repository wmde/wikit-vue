import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import WikitButton from '../src/components/WikitButton.vue';

export default {
  title: 'Button',
  component: WikitButton,
};

export const Primary = () => '<wikit-button>Click Me</wikit-button>';