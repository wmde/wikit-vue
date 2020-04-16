import { addParameters } from '@storybook/vue';
// Register Globally
import '../src/components/index.js';

// Prevent iframe
addParameters({
  docs: {
    inlineStories: true,
  },
});


