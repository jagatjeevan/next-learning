import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Button from './index';

test('Button component', () => {
  const handleClick = jest.fn();
  render(
    <Button type="button" onClick={handleClick}>
      Click Me
    </Button>,
  );

  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
