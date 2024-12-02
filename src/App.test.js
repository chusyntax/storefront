import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store/store';
import App from './App';

const queryClient = new QueryClient();

test('renders the app', () => {
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
          <ToastContainer position="bottom-right" />
        </Router>
      </QueryClientProvider>
    </Provider>
  );
});