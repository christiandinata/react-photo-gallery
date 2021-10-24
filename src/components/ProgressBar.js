import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

function ProgressBar(props) {
	const { progress, url } = useStorage(props.file);

	useEffect(() => {
		if (url) {
			props.setBarIndicator(null);
		}
	}, [url, props.setBarIndicator]);

	return (
		<>
			<motion.div
				className="progress-bar"
				initial={{ width: 0 }}
				animate={{ width: progress + "%" }}></motion.div>
		</>
	);
}

export default ProgressBar;
