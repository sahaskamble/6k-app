// Profile Panel using Reactjs
// doing POST request using axios for the first time
import { useEffect, useState } from "react";
import axios from "axios";
import "../components/LoginForm";
import StudentInfo from "../components/ApplicationInfo";

const ProfilePanel = () => {

	// const [data, setData] = useState([]);
	//
	// useEffect(() => {
	//
	// 	const fetchdata = async () => {
	//
	// 		const user = parseInt(sessionStorage.getItem("Id"));
	// 		const res = await axios.post("http://localhost:3000/api/student/account/details/fetch", {
	// 			user: user
	// 		})
	// 		setData(res.data.output);
	// 	}
	//
	// 	fetchdata();
	// }, []);

	// console.log(data)

	const data = {
		name: "mailman",
		last: "ohaio",
		dob: "2000-01-01",
		address: "kigali",
		pic: "https://static.vecteezy.com/system/resources/previews/012/692/377/non_2x/female-student-pixel-perfect-rgb-color-ui-icon-graduate-alumna-of-university-simple-filled-line-element-gui-ux-design-for-mobile-app-isolated-pictogram-editable-stroke-vector.jpg"
	}

	console.log(data.pic)

	return (
		<div className="w-full h-[92dvh] flex justify-center items-center bg-[--background]">
			<div className="w-[90%] h-full mx-auto bg-[--background] flex gap-[3rem] justify-center items-center">
				<div className="w-[450px] h-[80%] bg-[--primary] text-[--background] flex flex-col justify-center items-center">
					<div className="w-[40%] h-full flex justify-center items-center">
						<div id="profile" className="flex justify-center items-center border-black border">
							<img className="" src={data.pic} alt="this is image" />
						</div>
					</div>

					<div className="w-[50%] h-full p-8 ">
						<div id="thisitem" className="w-auto h-full px-8 flex flex-col justify-center bg-[--bg] p-8 rounded-xl">
							<div className="flex flex-col justify-center items-center gap-8 text-3xl">
								<div className="first text-center">{data.name}</div>
								<div className="first text-center">{data.last}</div>
								<div className="first text-center">{data.dob}</div>
								<div className="first text-center">{data.address}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full h-[80%] border border-[--accent]"></div>
			</div>
		</div>
	);
}

export default ProfilePanel;
