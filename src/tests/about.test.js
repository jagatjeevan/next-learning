//https://medium.com/wesionary-team/mocking-axios-in-jest-c68933a1a4fb
//https://jestjs.io/docs/mock-functions
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import About from '../../pages/about/index';
import React from 'react';
import axios from 'axios';

describe('App', () => {
  it('renders a text with props', () => {
    const { getByText } = render(<About userName="jeevan" />);
    expect(getByText('About Page')).toBeInTheDocument();
    expect(getByText(/Welcome jeevan/i)).toBeInTheDocument();
  });

  it('renders a text without props', () => {
    const { getByText } = render(<About />);
    expect(getByText('About Page')).toBeInTheDocument();
  });

  it('renders a snaps̵hot', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should fetch users', async () => {
    const users = { data: { name: 'John Doe123' } };
    axios.get.mockResolvedValueOnce(users);

    const { getByText } = render(<About />);
    const fetchButton = getByText('Fetch Data');
    fireEvent.click(fetchButton);

    await waitFor(() => {
      expect(screen.queryByText(/John Doe123/i)).toBeInTheDocument();
    });
  });

  it('Should reject with an error when API call fails', async () => {
    const err = new Error('test error');
    axios.get.mockRejectedValueOnce('test err');

    const { getByText } = render(<About />);
    const fetchButton = getByText('Fetch Data');
    fireEvent.click(fetchButton);
    await waitFor(() => {
      expect(screen.getByText('test err')).toBeInTheDocument();
    });
  });
});
