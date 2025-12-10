import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
describe("Terms And Conditions Test", () => {
    it('Check User Profile is heading is there or not', () => {
        render(<TermsAndConditions />)
        expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
    })

    const renderCompnent = () => {
        render(<TermsAndConditions />);
        return {
            heading: screen.getByRole('heading'),
            checkbox: screen.getByRole('checkbox'),
            button: screen.getByRole('button')
        }
    }

    it('Should check whether div conatiner has checkbox disabled', () => {
        const { checkbox, button} = renderCompnent();

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    it('Should enable button when user is clicked', async () => {
        // Arrange
        render(<TermsAndConditions />);

        // Act
        const userBtn = screen.getByRole('checkbox');
        const user = userEvent.setup();
        await user.click(userBtn);

        // Asseration
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
})