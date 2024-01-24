import { render, screen } from '@testing-library/react'
import RequestAccess, { getServerSideProps } from '../../pages/request-access';
import '@testing-library/jest-dom'
import Text from '../../assets/content/content.json'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('request-access', () => {
  it('renders a heading', () => {
    render(<RequestAccess userName={'test'} userInfo={{
        role: "Admin",
        identity_provider: "idir"
    }} />)

    const heading = screen.getByTestId('request-access', {
      name: Text.app.title,
    })

    getServerSideProps()

    expect(heading).toBeInTheDocument()
  })
})


describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/request-access");

    // Render the component:
    render(<RequestAccess href="/request-access" userName={'test'} userInfo={{
        role: "Admin",
        identity_provider: "idir"
    }} />);

    expect(mockRouter).toMatchObject({
      asPath: "/request-access",
      pathname: "/request-access",
    });
  });
});