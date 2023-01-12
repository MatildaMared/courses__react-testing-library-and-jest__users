import { useState } from "react";

export default function UserForm({ addUser }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		addUser({ name, email });
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					id="name"
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					id="email"
				/>
			</div>
			<button type="submit">Add User</button>
		</form>
	);
}
