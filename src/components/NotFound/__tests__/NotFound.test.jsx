import { render } from '@testing-library/react';
import NotFound from '../';

describe('<NotFound /> tests', () => {
  describe('Snapshots', () => {
    it('Should render', () => {
      const { asFragment } = render(<NotFound />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
