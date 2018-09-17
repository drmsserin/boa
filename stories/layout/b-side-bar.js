
  import React from 'react';
  import { undefined } from '../../src/components/layout/b-side-bar';

  import PropsViewer from '../base/props-viewer';
  import Playground from '../base/playground';
  import ComponentInfo from '../base/info';

  const data = require('../../src/components/layout/b-side-bar/docs/content.json');
  const defaults = require('../../src/components/layout/b-side-bar/assets/data/defaults.json');

  export default () => {
    return (
      <div style={{ padding: 20, background: 'white' }}>
        <ComponentInfo component={undefined} content={data} defaults={defaults} />
        <Playground component={undefined} content={data} defaults={defaults} />
        <PropsViewer component={undefined} content={data} defaults={defaults} />
      </div>);
  };