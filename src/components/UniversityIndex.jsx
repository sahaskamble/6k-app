import axios from "axios";
import { useEffect, useState, useRef } from "react";

const UniversityIndex = () => {

	const [data, setData] = useState([]);
	let id ;

	const fetchdata = async () => {
		// const university_id = parseInt(sessionStorage.getItem("uni_id"))
		const university_id = 1
		const res = await axios.post("http://localhost:3000/api/application/fetch/admin", {
			university_id: university_id
		})
		setData(res.data.output)
	}

	function handleDoc(){
		window.location("/application")
	}

	useEffect(() => {

		fetchdata();
		sessionStorage.setItem("Sid", id);

		console.log(data)
	}, [])


	return (
		<div className="container mx-auto">
			<div className="mt-[100px]">
				<div className="w-full mx-auto relative overflow-x-auto z-0">
					<table className="w-full text-sm text-left rtl:text-right bg-[--background]">
						<thead className="text-xl text-white uppercase bg-[--bg] bg-[--primary]">
							<tr>
								<th scope="col" className="px-6 text-center py-3">
									Student Name
								</th>
								<th scope="col" className="px-6 text-center py-3">
									Course name
								</th>
								<th scope="col" className="px-6 text-center py-3">
									Phone
								</th>
								<th scope="col" className="px-6 text-center py-3">
									Documents
								</th>
								<th scope="col" className="px-6 text-center py-3">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="text-xl">
							{
								data.map((items) => (
									<tr className="bg-[--background] border-b text-white border-gray-700">
										<th scope="row" className="px-6 py-4 text-center font-medium text-white whitespace-nowrap">
											{items.Student_UserName}
										</th>
										<td className="px-6 text-center py-4">
											{items.Course_Name}
										</td>
										<td className="px-6 text-center py-4">
											{items.Student_Phone}
											{ 
												id = items.Student_Id
											}
										</td>
										<td className="px-6 text-center py-4">
											<button onClick={} className="px-3 py-1 mx-2 bg-blue-500 text-white rounded-lg">View</button>
										</td>
										<td className="px-6 text-center py-4">
											<button className="px-3 py-1 mx-2 bg-green-500 text-white rounded-lg">Accept</button>
											<button className="px-3 py-1 mx-2 bg-red-500 text-white rounded-lg">Reject</button>
										</td>
									</tr>
								))
							}

						</tbody>
					</table>

				</div>
			</div>
		</div>
	);
}

export default UniversityIndex;
