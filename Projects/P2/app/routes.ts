import { remixRoutesOptionAdapter } from 'react-router';
import { flatRoutes } from 'remix-flat-routes';

export default remixRoutesOptionAdapter((defineRoutes) => {
  return flatRoutes('app/routes', defineRoutes);
});
