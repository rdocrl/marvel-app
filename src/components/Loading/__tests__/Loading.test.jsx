import { render } from '@testing-library/react';
import Loading from '../';

describe('<Loading /> tests', () => {
  describe('Snapshots', () => {
    it('Should render', () => {
      const { asFragment } = render(<Loading />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
