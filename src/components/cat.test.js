import React from 'react';
import { shallow } from 'enzyme';
import Cat from './cat';
import CatsList from './cats-list';

describe('cat component tests', () => {
  const props = {
    name: 'Snuggles',
    picture: 'https://picsofsnugglez/com/1',
  }

  const listOfCats = [
    { name: 'Snuggles', picture: 'https://picsofsnugglez/com/1'},
    { name: 'Maurice', picture: 'https://picsofmaurice/com/1'},
    { name: 'MauriceJr', picture: 'https://picsofmauricejr/com/1'},
  ]

  it('should render the cats name', () => {
    const wrapper = shallow(<Cat {...props} />);
    const name = 'Snuggles';

    expect(wrapper.contains(name)).toEqual(true);
  });

  it('should render the cats image', () => {
    const wrapper = shallow(<Cat {...props} />);
    const image = <img className='cat-img' src={props.picture} />;

    expect(wrapper.contains(image)).toEqual(true);
  })

  it('should render the correct number of cats', () => {
    const wrapper = shallow(<CatsList cats={listOfCats} />);

    expect(wrapper.find(Cat).length).toBe(listOfCats.length)
  })
})