import React from "react";
import { fire } from "../fire";

function SignOut() {
	const auth = fire.auth();
	const user = auth.currentUser;

	return (
		<div className="sign-out">
			<h2>{user.displayName}</h2>
			<div className="signout_button">
				<button onClick={() => auth.signOut()}>Sign Out</button>
			</div>
		</div>
	);
}

export default SignOut;
