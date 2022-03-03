import { render } from '@testing-library/react';
import ErrorComponent from '../';

describe('<ErrorComponent /> tests', () => {
  describe('Snapshots', () => {
    it('Should render', () => {
      const { asFragment } = render(<ErrorComponent />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
