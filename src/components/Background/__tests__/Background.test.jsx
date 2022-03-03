import { render } from '@testing-library/react';
import Background from '../';

describe('<Background /> tests', () => {
  describe('Snapshots', () => {
    it('Should render', () => {
      const { asFragment } = render(<Background />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
