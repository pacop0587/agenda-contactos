//----> Start Imports

import { useUserContext } from "../UseProvider";

//----> End Imports

const Header = () => {
	const { loggedUser } = useUserContext();
	return (
		<nav className="navbar navbar-expand-lg">
			<ul className="navbar-brand">
				<li className="navbar-item text-light">
					Bienvenido {loggedUser}
				</li>
			</ul>
		</nav>
	);
};

export default Header;
