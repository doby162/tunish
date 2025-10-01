import { federation } from '@module-federation/vite';

export default federation({
  name: 'consumer',
  remotes: {
    'provider': 'rslib_provider@http://localhost:3001/mf-manifest.json',
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
