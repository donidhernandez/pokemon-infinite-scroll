import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PokemonList from './components/PokemonList';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
