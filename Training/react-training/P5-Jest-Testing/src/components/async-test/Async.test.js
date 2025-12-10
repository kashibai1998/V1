import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async Testing', () => {
    test('render rendring for all the api', async () => {
        render(<Async />);

        const asyncElement = await screen.findAllByRole('listitem');
        expect(asyncElement).not.toHaveLength(0);
    });
});
