import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe('Greet', () => {
    test('Renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })
    
    test('Renders correctly with name', () => {
        render(<Greet name='Sashrika' />)
        const textElement = screen.getByText('Hello Sashrika')
        expect(textElement).toBeInTheDocument()
    })
})