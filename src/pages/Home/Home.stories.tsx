import React from 'react';

import Home from './Home';
import Settings from '../Settings/Settings';

export default {
  title: 'Welcome'
};

export const toStorybook = () => <Settings />;

toStorybook.story = {
  name: 'to Storybook'
};
