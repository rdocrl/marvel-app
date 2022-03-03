import { fireEvent, render, screen } from '@testing-library/react';
import Filter from '../';
import { filterOptions } from '../../../constants';

describe('<Filter /> tests', () => {
  describe('Snapshots', () => {
    it('Should render', () => {
      const { asFragment } = render(<Filter options={filterOptions.characters} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Functional', () => {
    it('Should call onTypeChange', () => {
      const onTypeChangeMock = jest.fn();
      render(<Filter options={filterOptions.characters} onTypeChange={onTypeChangeMock} />);
      fireEvent.click(screen.getByLabelText('Comic'));
      expect(onTypeChangeMock).toBeCalled();
    });

    it('Should call onTextChange', () => {
      const onTextChangeMock = jest.fn();
      render(<Filter options={filterOptions.characters} onTextChange={onTextChangeMock} />);
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'Spider' } });
      expect(onTextChangeMock).toBeCalled();
    });
  });
});
