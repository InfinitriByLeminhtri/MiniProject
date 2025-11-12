import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-blue-600 text-center">
            Quiz App
          </h1>
          <p className="text-center mt-4 text-gray-600">
            React + TailwindCSS + React Query
          </p>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
