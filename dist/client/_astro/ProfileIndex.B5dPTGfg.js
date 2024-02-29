import{j as t}from"./jsx-runtime.K1e75nIr.js";import{r as d}from"./index.NEDEFKed.js";import{a as l}from"./axios.Bo0ATomq.js";const m=()=>(d.useEffect(()=>{l.post("http://localhost:3000/api/student/account/details/fetch",{user:sessionStorage.getItem("Id")}).then(s=>{const e=s.data.output;console.log(e),e.Student_DOB;const i=document.getElementById("thisitem"),a=document.getElementById("image");i.innerHTML=`
					<div className="flex justify-center items-center">
						<div className="first">${e.Student_FirstName}</div>
						<div className="first">${e.Student_LastName}</div>
						<div className="first">${e.Student_DOB}</div>
						<div className="first">${e.Student_Address}</div>
					</div>
				`,a.innerHTML=`
					<div className="flex justify-center items-center">
						<img src={res.} alt="" />
					</div> 
				`})},[]),t.jsx("div",{className:"w-full h-[92dvh] flex justify-center items-center bg-[#f6f7f9]",children:t.jsxs("div",{className:"w-[90%] h-[80dvh] mx-auto bg-white flex justify-center items-center rounded-[20px] shadow-[--bg] shadow-xl",children:[t.jsx("div",{className:"w-[30%] h-full flex justify-center items-center",children:t.jsx("div",{id:"image",className:"w-[300px] h-[300px] flex justify-center items-center "})}),t.jsx("div",{className:"w-[50%] h-full p-8 ",children:t.jsx("div",{id:"thisitem",className:"w-[80%] h-full px-8 flex flex-col justify-center"})})]})}));export{m as default};
