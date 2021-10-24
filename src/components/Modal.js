import React from "react";
import { motion } from "framer-motion";
import useFirestore from "../hooks/useFirestore";
import { Firestore } from "../fire";

function Modal({ selectedImg, setSelectedImg }) {
	// const handleClick = (e) => {
	// 	if (e.target.classList.contains("backdrop")) {
	// 		setSelectedImg(null);
	// 	}
	// };

	const { docs } = useFirestore("images");

	const deleteHandler = () => {
		{
			Firestore.collection("images")
				.doc(selectedImg.id)
				.delete()
				.then(() => {
					console.log(selectedImg.id);
					console.log("Document successfully deleted!");
				})
				.catch((error) => {
					console.error("Error removing document: ", error);
				});

			setSelectedImg(null);
		}
	};

	return (
		<motion.div
			className="backdrop"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}>
			<motion.div
				className="backdrop-wrap"
				initial={{ y: "-100vh" }}
				animate={{ y: 0 }}>
				<img src={selectedImg.url} alt="enlarged pic" />
				<button
					className="exitbtn"
					onClick={() => setSelectedImg(null)}>
					X
				</button>
				<button className="deletebtn" onClick={deleteHandler}>
					Delete
				</button>
			</motion.div>
		</motion.div>
	);
}

export default Modal;
