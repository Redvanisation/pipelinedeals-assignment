import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from '../../../app/javascript/containers/App';
import ColumnsChart from '../../../app/javascript/components/ColumnsChart';

describe('App container', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<App />) });

  it('renders correctly', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Matches snapshot',  () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Has the columns chart component', () => {
    expect(wrapper.find(ColumnsChart)).toHaveLength(1);
  });

})