import { render, screen } from '@testing-library/react'
import Custom404 from '../../pages/404';
import '@testing-library/jest-dom'
import Text from '../../assets/content/content.json'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'))
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('404', () => {
  it('renders a heading', () => {
    render(<Custom404 />)

    const heading = screen.getByTestId('404', {
      name: Text.app.title,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/404");

    // Render the component:
    render(<Custom404 href="/404" />);

    expect(mockRouter).toMatchObject({
      asPath: "/404",
      pathname: "/404",
    });
  });
});