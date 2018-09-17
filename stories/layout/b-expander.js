
  import React from 'react';
  import { BExpander } from '../../src/components/layout/b-expander';

  import PropsViewer from '../base/props-viewer';
  import Playground from '../base/playground';
  import ComponentInfo from '../base/info';

  const data = require('../../src/components/layout/b-expander/docs/content.json');
  const defaults = require('../../src/components/layout/b-expander/assets/data/defaults.json');

  export default () => {
    return (
      <div style={{ padding: 20, background: 'white' }}>
        <ComponentInfo component={BExpander} content={data} defaults={defaults} />
        <Playground component={BExpander} content={data} defaults={defaults} />
        <PropsViewer component={BExpander} content={data} defaults={defaults} />
      </div>);
  };