import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
	it("can receive a new user and show it on a list", () => {
		render(<App />);
		const name = "Anna";
		const email = "anna@gmail.com";

		const nameInput = screen.getByLabelText(/name/i);
		const emailInput = screen.getByLabelText(/email/i);
		const button = screen.getByRole("button");

		user.type(nameInput, name);
		user.type(emailInput, email);
		user.click(button);

		const nameOnScreen = screen.getByRole("cell", { name: name });
		const emailOnScreen = screen.getByRole("cell", { name: email });

		expect(nameOnScreen).toBeInTheDocument();
		expect(emailOnScreen).toBeInTheDocument();
	});
});
