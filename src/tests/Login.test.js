// __tests__/Login.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";

describe("Login Component", () => {
  const mockOnLogin = jest.fn();

  it("renders the login form correctly", () => {
    render(<Login onLogin={mockOnLogin} />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it("shows an error message for incorrect credentials", () => {
    render(<Login onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "wronguser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByText(/login/i));
    expect(
      screen.getByText(/invalid username or password/i)
    ).toBeInTheDocument();
  });

  it("calls the onLogin callback with valid credentials", () => {
    render(<Login onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wellics123" },
    });

    fireEvent.click(screen.getByText(/login/i));
    expect(mockOnLogin).toHaveBeenCalledWith({
      firstName: "Test",
      lastName: "User",
    });
  });
});
