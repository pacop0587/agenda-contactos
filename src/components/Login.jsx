import React from "react";

const Login = () => {
	return (
		<div className="container ">
			<div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
				<div className=" shadow p-3 mb-5 bg-body rounded">
					<h2 className="">Iniciar Sesion</h2>
					<form action="" className="d-flex flex-column">
						<div className="mb-3">
							<label className="form-label">Email</label>
							<input type="email" className="form-control" />
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
		</div>
	);
};

export default Login;
