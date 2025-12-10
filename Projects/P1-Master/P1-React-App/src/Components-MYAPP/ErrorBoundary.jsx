import { ErrorBoundary } from 'react-error-boundary';

export function FallbackComponent({ error, resetErrorBoundary }){
  return (
    <>
      <div role="alert">
        <p>Something went wrong</p>
        <p>{error}</p>
        <button onClick={resetErrorBoundary}>try again</button>
      </div>
    </>
  );
};
export function MyErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} onReset={() => {}}>
      {children}
    </ErrorBoundary>
  );
}
