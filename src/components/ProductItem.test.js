import { render, screen, fireEvent } from '@testing-library/react';
import ProductItem from './ProductItem';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ToastContainer } from 'react-toastify';

const product = { id: 1, title: 'Test Product', price: 100, image: 'test.jpg' };

test('renders product item', () => {
  render(
    <Provider store={store}>
      <ProductItem product={product} />
      <ToastContainer />
    </Provider>
  );
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
});

test('adds product to cart and shows toast', () => {
  render(
    <Provider store={store}>
      <ProductItem product={product} />
      <ToastContainer />
    </Provider>
  );
  fireEvent.click(screen.getByText('Add to Cart'));
  expect(screen.getByText('Test Product has been added to cart')).toBeInTheDocument();
});