import { render, screen } from '@testing-library/react'
import Home, { getServerSideProps } from '../../pages/property-search';
import '@testing-library/jest-dom'
import Text from '../../assets/content/content.json'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('property-search', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByTestId('property-search', {
      name: Text.app.title,
    })

    getServerSideProps()

    expect(heading).toBeInTheDocument()
  })
})


describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/property-search");

    // Render the component:
    render(<Home href="/property-search" />);

    expect(mockRouter).toMatchObject({
      asPath: "/property-search",
      pathname: "/property-search",
    });
  });
});