import React from "react";

const Login = () => {
	return (
		<div className="container ">
			<div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
				<h2 className="">Iniciar Sesion</h2>
				<form action="" className="d-flex flex-column">
					<div className="mb-3">
						<label className="form-label">Usuario</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input type="text" className="form-control" />
					</div>
					<button type="submit" className="btn btn-success">
						Iniciar Sesion
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
