import { useFetcher } from '@remix-run/react';
import { action } from '~/routes/form+/_layout';

export default function Component() {
  const { data } = useFetcher<typeof action>({ key: 'my-form' });
  return (
    <div>
      This is a component file.
      {data !== undefined && (
        <div>
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
          <h1>{data.address}</h1>
        </div>
      )}
    </div>
  );
}
