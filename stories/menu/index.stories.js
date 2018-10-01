
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Menu', module);
stories.add('BIconMenu', require('./b-icon-menu').default);
stories.add('BMenu', require('./b-menu').default);
stories.add('BMenuItem', require('./b-menu-item').default);