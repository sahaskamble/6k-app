/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BFAc5SXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navbar, $ as $$Layout } from './add_B6X65b5N.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';
import axios from 'axios';
/* empty css                          */

const ProfilePanel = () => {
  useEffect(() => {
    axios.post("http://localhost:3000/api/student/account/details/fetch", {
      user: sessionStorage.getItem("Id")
    }).then((response) => {
      const res = response.data.output;
      console.log(res);
      res.Student_DOB;
      const item = document.getElementById("thisitem");
      const item2 = document.getElementById("image");
      item.innerHTML = `
					<div className="flex justify-center items-center">
						<div className="first">${res.Student_FirstName}</div>
						<div className="first">${res.Student_LastName}</div>
						<div className="first">${res.Student_DOB}</div>
						<div className="first">${res.Student_Address}</div>
					</div>
				`;
      item2.innerHTML = `
					<div className="flex justify-center items-center">
						<img src={res.} alt="" />
					</div> 
				`;
    });
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "w-full h-[92dvh] flex justify-center items-center bg-[#f6f7f9]", children: /* @__PURE__ */ jsxs("div", { className: "w-[90%] h-[80dvh] mx-auto bg-white flex justify-center items-center rounded-[20px] shadow-[--bg] shadow-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[30%] h-full flex justify-center items-center", children: /* @__PURE__ */ jsx("div", { id: "image", className: "w-[300px] h-[300px] flex justify-center items-center " }) }),
    /* @__PURE__ */ jsx("div", { className: "w-[50%] h-full p-8 ", children: /* @__PURE__ */ jsx("div", { id: "thisitem", className: "w-[80%] h-full px-8 flex flex-col justify-center" }) })
  ] }) });
};

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/doom/6k-app/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "ProfilePanel", ProfilePanel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/doom/6k-app/src/components/ProfileIndex", "client:component-export": "default" })} </div> ` })}`;
}, "/home/doom/6k-app/src/pages/profile/index.astro", void 0);

const $$file$2 = "/home/doom/6k-app/src/pages/profile/index.astro";
const $$url$2 = "/profile";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Root Panel" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Navbar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/doom/6k-app/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "LoginForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/doom/6k-app/src/components/RootLogin", "client:component-export": "default" })} </div> ` })}`;
}, "/home/doom/6k-app/src/pages/root/index.astro", void 0);

const $$file$1 = "/home/doom/6k-app/src/pages/root/index.astro";
const $$url$1 = "/root";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Navbar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/doom/6k-app/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "App", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/doom/6k-app/src/components/App", "client:component-export": "default" })} </div> ` })}`;
}, "/home/doom/6k-app/src/pages/index.astro", void 0);

const $$file = "/home/doom/6k-app/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
