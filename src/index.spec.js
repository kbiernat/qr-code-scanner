import React from 'react';
import renderer from 'react-test-renderer';
import QrCodeScanner from './index';

describe('QrCodeScanner', () => {
  it('should render', () => {
    const component = renderer.create(
      <QrCodeScanner />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
