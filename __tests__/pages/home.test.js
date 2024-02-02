import { render, screen } from '@testing-library/react'
import Home from '../../pages/home'
import '@testing-library/jest-dom'
import Text from '../../assets/content/content.json'
import mockRouter from 'next-router-mock';

jest.mock('../../public/snowplow', () => ({
  customSnowplowCall: jest.fn(() => {}),
}));

jest.mock('next/router', () => jest.requireActual('next-router-mock'))
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByTestId('homepage', {
      name: Text.app.title,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/home");

    // Render the component:
    render(<Home href="/home" />);
    // expect(screen.getByRole('button')).toHaveText(
    //   'The current route is: "/initial-path"'
    // );

    // Click the button:
    // fireEvent.click(screen.getByRole('button'));

    // Ensure the router was updated:
    expect(mockRouter).toMatchObject({
      asPath: "/home",
      pathname: "/home",
      // query: { bar: "baz" },
    });
  });
});