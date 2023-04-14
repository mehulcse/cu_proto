import React from "react";

function Loader() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-white opacity-75">
			<div className="w-16 h-16 border-4 border-blue-600 rounded-full animate-spin"></div>
		</div>
	);
}

export default Loader;
