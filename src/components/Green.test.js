import { render, screen } from "@testing-library/react"
import Green from "./Green"

test('should return text', function() {
    render(<Green />)
    const elementText = screen.getByText('Hello')
    expect(elementText).toBeInTheDocument()
})

test('should return name', function() {
    render(<Green name="Prince"/>)
    const elementText = screen.getByText('Hello Prince')
    expect(elementText).toBeInTheDocument()
})