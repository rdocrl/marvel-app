import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from '../';

describe('<Menu /> tests', () => {
  describe('Snapshots', () => {
    it('Should render', () => {
      const { asFragment } = render(
        <MemoryRouter>
          <Menu />
        </MemoryRouter>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
