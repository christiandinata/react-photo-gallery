import React from "react";
import firebase from "firebase";
import { fire } from "../fire";

function SignIn() {
	const auth = fire.auth();

	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<div>
			<button className="sign-in" onClick={signInWithGoogle}>
				Sign in with Google
			</button>
		</div>
	);
}

export default SignIn;
