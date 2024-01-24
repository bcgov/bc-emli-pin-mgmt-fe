import { render, screen } from '@testing-library/react'
import Dashboard, { getServerSideProps } from '../../pages/dashboard';
import '@testing-library/jest-dom'
import Text from '../../assets/content/content.json'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('dashboard', () => {
  it('renders a heading', () => {
    render(<Dashboard />)

    const heading = screen.getByTestId('dashboard', {
      name: Text.app.title,
    })

    getServerSideProps()

    expect(heading).toBeInTheDocument()
  })
})


describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/dashboard");

    // Render the component:
    render(<Dashboard href="/dashboard" />);

    expect(mockRouter).toMatchObject({
      asPath: "/dashboard",
      pathname: "/dashboard",
    });
  });
});