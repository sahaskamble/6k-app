// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect, useState } from "react";
import axios from "axios";
import "../components/LoginForm";
// import StudentInfo from "../components/ApplicationInfo";

const ProfilePanel = () => {

	const [res, setResponse] = useState([]);
	const [docus, setDocus] = useState([]);
	//
	const fetchdata = async () => {
		try {
			const user = parseInt(sessionStorage.getItem("Id"));
			const data = await axios.post("http://localhost:3000/api/student/account/details/fetch", {
				user: user
			})
			setResponse(data.data.output);
		}
		catch (error) {
			window.location.href = "/profile/add";
		}
	}

	// const fetchdoc = async () => {
	// 	try {
	// 		const user = parseInt(sessionStorage.getItem("Id"));
	// 		const docs = await axios.post("http://localhost:3000/api/student/account/document/fetch", {
	// 			user: user
	// 		})
	// 		setDocus(docs.data.output);
	// 	}
	// 	catch (error) {
	// 		alert(error)
	// 	}
	// }

	useEffect(() => {
		fetchdata();
		// fetchdoc();
	}, []);


	// const data = res.data.out;

	return (
		<div className="w-full h-auto my[3rem] flex justify-center items-center bg-[--background]">
			<div className="w-[90%] h-auto mx-auto my-[3rem] bg-[--background] flex gap-[3rem] flex-col justify-center items-center">
				<div className="w-full h-[30%] bg-[] text-[--text] flex justify-center items-center">
					<div className="w-[300px] h-[300px] flex justify-center items-center">
						<div id="profile" className="flex justify-center items-center border-black border">
							<img className="w-[200px] h-[200px] rounded-full" src={res.Student_ProfilePic} alt="this is image" />
						</div>
					</div>

					<div className="w-[50%] h-full p-8 ">
						<div id="thisitem" className="w-auto h-full px-8 flex justify-center bg-[--bg] p-8 rounded-xl">
							<div className="flex flex-col justify-center items-center gap-8 text-3xl">
								<div className="first text-center">{res.Student_FirstName}</div>
								<div className="first text-center">{res.Student_LastName}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full">
					<div id="thisitem" className="w-auto h-full px-8 flex justify-center p-8 rounded-xl">
						<div className="flex flex-col justify-center items-center gap-8 text-3xl">
							<div className="first">{docus}</div>
							<div className="first">{docus}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePanel;
