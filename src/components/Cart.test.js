import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ToastContainer } from 'react-toastify';
import Cart from './Cart';
import { addToCart } from '../store/cartSlice';

const product = { id: 1, title: 'Test Product', price: 100, image: 'test.jpg', quantity: 1 };

test('renders empty cart', () => {
  render(
    <Provider store={store}>
      <Cart />
      <ToastContainer />
    </Provider>
  );
  expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
  expect(screen.getByText('Total: $0.00')).toBeInTheDocument();
});

test('renders cart with items and removes item', () => {
  store.dispatch(addToCart(product));

  render(
    <Provider store={store}>
      <Cart />
      <ToastContainer />
    </Provider>
  );

  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
  expect(screen.getByText('Total: $100.00')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Remove'));
  expect(screen.getByText('Test Product has been removed from cart')).toBeInTheDocument();
  expect(screen.getByText('Total: $0.00')).toBeInTheDocument();
});