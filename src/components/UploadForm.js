import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm() {
	const [file, setFile] = useState(null);
	const [barIndicator, setBarIndicator] = useState(false);
	const [error, setError] = useState(null);
	const fileTypes = ["image/png", "image/jpeg"];

	const fileHandler = (e) => {
		let selectedFile = e.target.files[0];

		if (selectedFile && fileTypes.includes(selectedFile.type)) {
			setFile(selectedFile);
			setError(null);
		} else {
			setFile(null);
			setError("Please upload only allowed extensions (png or jpeg)");
			console.log("foo");
		}
		console.log(file);
	};

	useEffect(() => {
		if (file) {
			setBarIndicator(true);
		}
	}, [file]);

	return (
		<>
			<form>
				<label>
					<input type="file" onChange={fileHandler} />
					<span>+</span>
				</label>
				<div className="output">
					{error && <div className="error">{error}</div>}
					{file && <div>{file.name}</div>}
					{file && barIndicator && (
						<ProgressBar
							file={file}
							setFile={setFile}
							setBarIndicator={setBarIndicator}
						/>
					)}
				</div>
			</form>
		</>
	);
}

export default UploadForm;
