import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
describe('With React Testing Library', () => {
  it('Test App.js', () => {
    const store = mockStore({
      catsAssessment: { loading: false }
    });
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(wrapper.find('Coding Assessment').length).toEqual(0);
  });
})