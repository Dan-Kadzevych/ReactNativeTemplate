import React from 'react';
import renderer from 'react-test-renderer';

import F from '../FavoritesScreen';

describe('Favourite Screen', () => {
  test('Renders correctly', () => {
    const component = renderer.create(<F />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
