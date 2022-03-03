import { render } from '@testing-library/react';
import Card from '../';

describe('<Card /> tests', () => {
  describe('Snapshots', () => {
    it('Should render with no props', () => {
      const { asFragment } = render(<Card />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('Should render with props', () => {
      const { asFragment } = render(<Card title="Card title" thumbnail="" onClick={() => {}} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
