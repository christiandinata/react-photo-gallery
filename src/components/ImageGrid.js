import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
	const { docs } = useFirestore("images");

	return (
		<div layout className="img-grid">
			{docs &&
				docs.map((doc) => {
					return (
						<motion.div
							onClick={() => setSelectedImg(doc)}
							className="img-wrap"
							layout
							whileHover={{}}
							key={doc.id}>
							<motion.img
								src={doc.url}
								alt="uploaded pic"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1 }}
							/>
						</motion.div>
					);
				})}
		</div>
	);
}

export default ImageGrid;
