import React from 'react';
import { mount } from 'enzyme';
import Cats from '../Cats';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('With React Testing Library - Cats', () => {
  it('Test Cats Component', () => {
    const store = mockStore({
        catsAssessment: { loading: false }
      });
      const wrapper = mount(
        <Provider store={store}>
          <Cats />
        </Provider>
      );
  });
})