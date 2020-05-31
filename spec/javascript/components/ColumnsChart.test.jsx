import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
// import { expect } from 'chai';
import { Bar } from 'react-chartjs-2';


import ColumnsChart from '../../../app/javascript/components/ColumnsChart';

describe('ColumnsChart component', () => {
  let wrapper;
  let isLoading = true;
  
  let props = {
    isLoading: isLoading, 
    chartData: {           
      labels: [],
      datasets: [
      {
        data: [],
      },
      ]}
    };

  const flushPromise = () => new Promise(resolve => setImmediate(resolve));


  beforeEach(() => { wrapper = shallow(<ColumnsChart {...props} />) });
  
  it('renders correctly', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('props are passed correctly', () => {
    expect(wrapper.props()).toBeTruthy();
  });

  it('renders a title', () => {
    expect(wrapper.find('.main-title')).toHaveLength(1);
    expect(wrapper.find('.main-title').text().includes('Column chart displaying')).toBe(true);
  });

  it('renders a loading text before getting the data', () => {
    expect(wrapper.find('.loading')).toHaveLength(1);
    expect(wrapper.find('.loading').text().includes('Content is loading!')).toBe(true);
  });

  it('renders the Bar chart after getting the data', async () => {
    await flushPromise();
    wrapper.update();
    wrapper.setProps({ isLoading: false });
    expect(wrapper.find(Bar)).toHaveLength(1);
  })
});