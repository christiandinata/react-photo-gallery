import "./App.css";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Title from "./components/Title";
import SignIn from "./components/SignIn";
import { fire } from "./fire";
import SignOut from "./components/SignOut";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
	const auth = fire.auth();
	const [user] = useAuthState(auth);
	const [selectedImg, setSelectedImg] = useState(null);
	// const [imgClicked, setImgClicked] = useState(false);

	return (
		<div className="App">
			<Title />
			{user ? <SignOut /> : <SignIn />}
			<UploadForm />
			<ImageGrid setSelectedImg={setSelectedImg} />
			{selectedImg && (
				<Modal
					selectedImg={selectedImg}
					setSelectedImg={setSelectedImg}
				/>
			)}
		</div>
	);
}

export default App;
