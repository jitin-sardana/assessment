import React from 'react';
import FavouriteCatImages from '../FavouriteCatImages';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { render, screen, fireEvent } from '@testing-library/react';

const mockStore = configureMockStore([thunk]);

describe('Testing Cats Components', () => {
  it('Test Favourite Cat Images Component', () => {
    const store = mockStore({
        catsAssessment: {
          loading: false,
          favCatsList: [
            {
              id: 2171834,
              user_id: 'mnbcvv',
              image_id: 'boe',
              sub_id: null,
              created_at: '2022-05-18T13:47:57.000Z',
              image: {
                id: 'boe',
                url: 'https://cdn2.thecatapi.com/images/boe.jpg'
              }
            },
            {
              id: 2171835,
              user_id: 'mnbcvv',
              image_id: 'MTY0MDgwOA',
              sub_id: null,
              created_at: '2022-05-18T13:49:02.000Z',
              image: {
                id: 'MTY0MDgwOA',
                url: 'https://cdn2.thecatapi.com/images/MTY0MDgwOA.jpg'
              }
            },
            {
              id: 2171843,
              user_id: 'mnbcvv',
              image_id: '3qp',
              sub_id: null,
              created_at: '2022-05-18T14:35:51.000Z',
              image: {
                id: '3qp',
                url: 'https://cdn2.thecatapi.com/images/3qp.gif'
              }
            },
            {
              id: 2172022,
              user_id: 'mnbcvv',
              image_id: '2oo',
              sub_id: null,
              created_at: '2022-05-19T02:12:31.000Z',
              image: {
                id: '2oo',
                url: 'https://cdn2.thecatapi.com/images/2oo.gif'
              }
            },
            {
              id: 2172032,
              user_id: 'mnbcvv',
              image_id: '19l',
              sub_id: null,
              created_at: '2022-05-19T02:42:46.000Z',
              image: {
                id: '19l',
                url: 'https://cdn2.thecatapi.com/images/19l.gif'
              }
            },
            {
              id: 2172069,
              user_id: 'mnbcvv',
              image_id: '5jb',
              sub_id: null,
              created_at: '2022-05-19T03:13:10.000Z',
              image: {
                id: '5jb',
                url: 'https://cdn2.thecatapi.com/images/5jb.gif'
              }
            },
            {
              id: 2172070,
              user_id: 'mnbcvv',
              image_id: '4pd',
              sub_id: null,
              created_at: '2022-05-19T03:24:12.000Z',
              image: {
                id: '4pd',
                url: 'https://cdn2.thecatapi.com/images/4pd.gif'
              }
            }
          ]
        }
      });
      render(
        <Provider store={store}>
          <FavouriteCatImages />
        </Provider>
      );
      const btn = screen.getByTestId('remove-from-fav-0');
      fireEvent.click(btn);

      const linkElement = screen.getByText(/Favourite Images/i);
      expect(linkElement).toBeInTheDocument();
  });
})