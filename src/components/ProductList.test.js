import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ProductList from './ProductList';

const queryClient = new QueryClient();

test('renders loading state', () => {
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    </Provider>
  );
  expect(screen.getByText('Loading available products...')).toBeInTheDocument();
});

test('renders error state', async () => {
  const errorQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        queryFn: () => Promise.reject(new Error('Network Error')),
      },
    },
  });

  render(
    <Provider store={store}>
      <QueryClientProvider client={errorQueryClient}>
        <ProductList />
      </QueryClientProvider>
    </Provider>
  );

  expect(await screen.findByText((content, element) => content.startsWith('Error:'))).toBeInTheDocument();
});