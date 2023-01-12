export default function UserList({ users }) {
	return (
		<ul>
			{users.map((user, index) => (
				<li key={index}>
					{user.name} - {user.email}
				</li>
			))}
		</ul>
	);
}
