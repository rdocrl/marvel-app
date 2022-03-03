import { render } from '@testing-library/react';
import Detail from '../';

describe('<Detail /> tests', () => {
  describe('Snapshots', () => {
    it('Should render', () => {
      const { asFragment } = render(<Detail />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
