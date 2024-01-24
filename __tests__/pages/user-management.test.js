import { render, screen } from '@testing-library/react'
import UserManagement, { getServerSideProps } from '../../pages/user-management';
import '@testing-library/jest-dom'
import Text from '../../assets/content/content.json'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('user-management', () => {
  it('renders a heading', () => {
    render(<UserManagement userName={'test'} userInfo={{
        role: "Admin",
        identity_provider: "idir"
    }}/>)

    const heading = screen.getByTestId('user-management', {
      name: Text.app.title,
    })

    getServerSideProps()

    expect(heading).toBeInTheDocument()
  })
})


describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/user-management");

    // Render the component:
    render(<UserManagement href="/user-management" userName={'test'} userInfo={{
        role: "Admin",
        identity_provider: "idir"
    }}/>);

    expect(mockRouter).toMatchObject({
      asPath: "/user-management",
      pathname: "/user-management",
    });
  });
});