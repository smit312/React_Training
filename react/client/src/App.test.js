import { render, screen , fireEvent } from '@testing-library/react';
import Test from './Test';

test('button has correct initial color ', () => {
 render(<Test />);
  const colorButton = screen.getByRole('button' , {name : 'change to blue'});

  expect(colorButton).toHaveStyle({backgroundColor : 'red'})

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor : 'blue'});
  expect(colorButton.textContent).toBe('change to red');
});

