import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const users = [
	{ name: "Anna", email: "anna@gmail.com" },
	{ name: "Vincent", email: "vincent@email.com" },
];

describe("UserList component", () => {
	it("renders one row per user", () => {
		render(<UserList users={users} />);

		const rows = within(screen.getByTestId("users")).getAllByRole("row");

		expect(rows).toHaveLength(2);
	});

	it("renders the name and email of each user", () => {
		render(<UserList users={users} />);

		users.forEach((user) => {
			const name = screen.getByRole("cell", { name: user.name });
			const email = screen.getByRole("cell", { name: user.email });

			expect(name).toBeInTheDocument();
			expect(email).toBeInTheDocument();
		});
	});
});
