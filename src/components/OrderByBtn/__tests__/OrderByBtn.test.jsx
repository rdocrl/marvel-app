import { render } from '@testing-library/react';
import OrderByBtn from '../';

describe('<OrderByBtn /> tests', () => {
  describe('Snapshots', () => {
    it('Should render', () => {
      const { asFragment } = render(<OrderByBtn />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('Should render with current ascending order provided', () => {
      const { asFragment } = render(<OrderByBtn currentOrder={'+'} />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('Should render with current descending order provided', () => {
      const { asFragment } = render(<OrderByBtn currentOrder={'-'} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
