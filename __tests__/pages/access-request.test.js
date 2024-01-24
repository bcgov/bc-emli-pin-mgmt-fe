import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Text from '../../assets/content/content.json'
import mockRouter from 'next-router-mock';
import UserManagement,  { getServerSideProps } from '../../pages/access-request';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('access-request', () => {
  it('renders a heading', () => {
    render(<UserManagement />)

    const heading = screen.getByTestId('access-request', {
      name: Text.app.title,
    })

    getServerSideProps()

    expect(heading).toBeInTheDocument()
  })
})

describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/access-request");

    // Render the component:
    render(<UserManagement href="/access-request" />);

    expect(mockRouter).toMatchObject({
      asPath: "/access-request",
      pathname: "/access-request",
    });
  });
});