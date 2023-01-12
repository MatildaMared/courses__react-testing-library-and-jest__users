import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

describe("UserForm component", () => {
	it("displays two inputs and a button", () => {
		render(<UserForm />);

		const inputs = screen.getAllByRole("textbox");
		const button = screen.getByRole("button");

		expect(inputs).toHaveLength(2);
		expect(button).toBeInTheDocument();
	});

	it("calls addUser function when the form is submitted", () => {
		const mock = jest.fn();

		render(<UserForm addUser={mock} />);

		const nameInput = screen.getByLabelText(/name/i);
		const emailInput = screen.getByLabelText(/email/i);

		user.type(nameInput, "Anna");

		user.type(emailInput, "anna@gmail.com");

		const button = screen.getByRole("button");
		button.click();

		expect(mock).toHaveBeenCalled();
		expect(mock).toHaveBeenCalledWith({
			name: "Anna",
			email: "anna@gmail.com",
		});
	});

	it("empties the inputs whenever the user clicks the submit button", async () => {
		render(<UserForm addUser={() => {}} />);

		const name = "Lars";
		const email = "lars@gmail.com";

		const nameInput = screen.getByLabelText(/name/i);
		const emailInput = screen.getByLabelText(/email/i);
		const button = screen.getByRole("button");

		user.type(nameInput, name);
		user.type(emailInput, email);
		user.click(button);

		expect(nameInput).toHaveValue("");
		expect(emailInput).toHaveValue("");
	});
});
