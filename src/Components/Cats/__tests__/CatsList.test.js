import React from 'react';
import CatsList from '../CatsList';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { render, screen, fireEvent } from '@testing-library/react';

const mockStore = configureMockStore([thunk]);

describe('Testing Cats Components', () => {
  it('Test CatsList Component', () => {
    const store = mockStore({
        catsAssessment: {
          loading: false,
          catsList: [
            {
              breeds: [],
              id: 'bgc',
              url: 'https://25.media.tumblr.com/tumblr_lh0db9xY4j1qgnva2o1_250.png',
              width: 500,
              height: 373
            },
            {
              breeds: [],
              id: 'bls',
              url: 'https://25.media.tumblr.com/tumblr_lq3obnizbw1qla9hqo1_250.png',
              width: 765,
              height: 1024
            },
            {
              breeds: [],
              id: 'ci8',
              url: 'https://cdn2.thecatapi.com/images/ci8.gif',
              width: 500,
              height: 283
            },
            {
              breeds: [],
              id: 'ctq',
              url: 'https://cdn2.thecatapi.com/images/ctq.gif',
              width: 800,
              height: 536
            },
            {
              breeds: [],
              id: 'ZfkswZtCc',
              url: 'https://cdn2.thecatapi.com/images/ZfkswZtCc.png',
              width: 2232,
              height: 1920
            },
            {
              breeds: [],
              id: 'm_PWrPcyK',
              url: 'https://cdn2.thecatapi.com/images/m_PWrPcyK.png',
              width: 2232,
              height: 1920
            },
            {
              breeds: [],
              id: 'dYAMfao5k',
              url: 'https://cdn2.thecatapi.com/images/dYAMfao5k.png',
              width: 2232,
              height: 1920
            }
          ],
          favCatsList: null
        }
      });
      render(
        <Provider store={store}>
          <CatsList />
        </Provider>

      );
      const btn = screen.getByTestId('add-to-fav-0');
      fireEvent.click(btn);

      const linkElement = screen.getByText(/Uploaded Images/i);
      expect(linkElement).toBeInTheDocument();

  });
})