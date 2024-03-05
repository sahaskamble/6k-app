import axios from "axios";
import { useEffect, useState } from "react";

const ViewDocuments = () => {

	const [data, setData] = useState([]);

	const fetchView = () => {
		const user = sessionStorage.getItem("Sid");
		const res = axios.post("http://localhost:3000/api/student/account/document/fetch", {
			user: user,
		})
		setData(res)
	}

	useEffect(() => {
		fetchView();
	}, [])

	return <div>
		<div>
			<div className="hidden border border-white rounded-xl w-full h-[90dvh] bg-[--background] m-4 p-4">
				<div className="text-4xl"><i className="bi bi-x"></i></div>
				<div className="w-full h-full flex justify-center items-center">
					<h1>Hello </h1>
				</div>
			</div>
		</div>
	</div>
}

export default ViewDocuments;
