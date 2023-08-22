import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'
import Text from '../../content.json'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: Text.app.title,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/");
    
    // Render the component:
    render(<Home href="/" />);
    // expect(screen.getByRole('button')).toHaveText(
    //   'The current route is: "/initial-path"'
    // );

    // Click the button:
    // fireEvent.click(screen.getByRole('button'));
    
    // Ensure the router was updated:
    expect(mockRouter).toMatchObject({ 
      asPath: "/",
      pathname: "/",
      // query: { bar: "baz" },
    });
  });
});