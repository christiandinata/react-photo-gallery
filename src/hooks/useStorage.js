import { Firestorage, Firestore, Timestamp } from "../fire";
import React, { useState, useEffect } from "react";

function useStorage(file) {
	// progress of uploading
	const [progress, setProgress] = useState(0);
	// error of uploading
	const [error, setError] = useState(null);
	// image url from firestorage after the image is fully uploaded
	const [url, setUrl] = useState(null);

	useEffect(() => {
		// references
		const storageRef = Firestorage.ref(file.name);
		const firestoreRef = Firestore.collection("images");
		// add event listener using "on"
		// snap function will be called many times due to changes of progress bar
		storageRef.put(file).on(
			"state_changed",
			(snap) => {
				let percentage =
					(snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => {
				setError(err);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				const createdAt = Timestamp();
				setUrl(url);
				firestoreRef.add({
					url,
					createdAt,
				});
			}
		);
	}, [file]);

	return { progress, error, url };
}

export default useStorage;
