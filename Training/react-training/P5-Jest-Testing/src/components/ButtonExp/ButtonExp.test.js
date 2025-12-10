import ButtonExp from "./ButtonExp";
import { render, screen,fireEvent } from "@testing-library/react";
import {userEvent } from "@testing-library/user-event";


describe('Button Exp Component', () => {
    test('Button description', () => {
        render(<ButtonExp />);
        const buttonElement = screen.getByText('Hello Testing', { exact: false });
        expect(buttonElement).toBeInTheDocument();
    });

    test('show button click', () => {
        render(<ButtonExp />);
        const showButtonElement = screen.getByText('show', { exact: true });
        expect(showButtonElement).toBeInTheDocument();
    })

    test('renders "good to see" you if the button was not clicked', () => {
        render(<ButtonExp />);
        const outputElement = screen.getByText("It's a good to see", { exact: true });
        expect(outputElement).toBeInTheDocument();
    })

    test('renders "Changed" you if the button was clicked', () => {
        render(<ButtonExp />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        const outputElement1 = screen.getByText("Changed!", { exact: false });
        expect(outputElement1).toBeInTheDocument();
    })

      test('renders "good to see" you if the button was clicked', () => {
        render(<ButtonExp />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        const outputElement2 = screen.queryByText("good to see!", { exact: true });
        expect(outputElement2).toBeNull();
    })
})


