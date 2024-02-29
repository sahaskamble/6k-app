import{j as s}from"./jsx-runtime.K1e75nIr.js";import{a as c}from"./axios.Bo0ATomq.js";import{r as l}from"./index.NEDEFKed.js";const x=()=>(l.useEffect(()=>{c.get("http://localhost:3000/api/root/fetch/university").then(a=>{const e=a.data.output,r=document.getElementById("tbody1"),o=e.map(t=>`
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							${t.University_Name}
						</th>
						<td class="px-6 py-4">
							${t.University_Location}
						</td>
						<td class="px-6 py-4">
							${t.Description}
						</td>
						<td class="px-6 py-4">
							${t.University_Ranking}
						</td>
						<td class="px-6 py-4">
							${t.University_AdmissionProcess}
						</td>
						<td class="px-6 py-4 text-right">
							<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					`);r.innerHTML=o.join(""),console.log(e)})},[]),s.jsx(s.Fragment,{children:s.jsx("section",{className:"w-full h-screen",children:s.jsxs("div",{children:[s.jsx("h3",{className:"text-3xl px-8 py-5",children:"University"}),s.jsxs("div",{className:"w-[80dvw] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg",children:[s.jsx("a",{href:"/root/university",children:s.jsx("button",{className:"px-4 py-2 my-3 bg-blue-400 text-white rounded-lg",children:"Add"})}),s.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[s.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Name"}),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Location"}),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Description"}),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Ranking"}),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Admission Process"}),s.jsx("th",{scope:"col",className:"px-6 py-3",children:s.jsx("span",{className:"sr-only",children:"Edit"})})]})}),s.jsx("tbody",{id:"tbody1"})]})]})]})})}));export{x as default};
