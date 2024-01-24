import { render, screen } from '@testing-library/react'
import Custom500 from '../../pages/500';
import '@testing-library/jest-dom'
import Text from '../../assets/content/content.json'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('500', () => {
  it('renders a heading', () => {
    render(<Custom500 />)

    const heading = screen.getByTestId('500', {
      name: Text.app.title,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/500");

    // Render the component:
    render(<Custom500 href="/500" />);

    expect(mockRouter).toMatchObject({
      asPath: "/500",
      pathname: "/500",
    });
  });
});