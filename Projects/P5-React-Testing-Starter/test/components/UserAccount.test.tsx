import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";
import "@testing-library/jest-dom/vitest";
describe("User Account Test",() => {
    it('Check User Profile is heading is there or not', () => {
        const user: User = { id: 1, name: 'lucky' }
        render(<UserAccount user={user} />)

        const userAccName = screen.getByText('User Profile');
        expect(userAccName).toBeInTheDocument();
    })

    it('Should render username', () => {
        const user: User = { id: 1, name: 'lucky' }
        render(<UserAccount user={user} />)

        expect(screen.getByText(user.name)).toBeInTheDocument();
    })


    it('Check the edit button render or not', () => {
        const user: User = { id: 1, name: 'lucky', isAdmin: true }
        render(<UserAccount user={user} />)

        const btn = screen.getByRole('button');
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent(/edit/i);
    })

    it('Check the edit button not rendered', () => {
        const user: User = { id: 1, name: 'lucky' }
        render(<UserAccount user={user} />)

        const btn = screen.queryByRole('button');
        expect(btn).not.toBeInTheDocument();
    })
})