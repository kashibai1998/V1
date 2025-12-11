import { render, screen, cleanup } from "@testing-library/react";
import Hello from '../Hello';

test('Simple Hello component Test', () => {
    render(<Hello />);
    const helloComponent = screen.getByTestId('hello');
    expect(helloComponent).toBeInTheDocument();
})

test('Check text contain in the Hello component Test', () => {
    render(<Hello />);
    const helloComponent = screen.getByTestId('hello');
    expect(helloComponent).toHaveTextContent('Hello');
})

test('Check HTML text in the Hello component On Browser side', () => {
    render(<Hello />);
    const helloComponent = screen.getByTestId('hello');
    // expect(helloComponent).toContainHTML('Lucky');
    expect(helloComponent).toContainHTML('div');
    expect(helloComponent).toContainHTML('h1');

})