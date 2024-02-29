import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BFAc5SXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { i as img1, N as Navbar, $ as $$Layout } from './add_B6X65b5N.mjs';
import { useEffect } from 'react';
import axios from 'axios';
/* empty css                          */

const ProfilePanel = () => {
  const handelSubmit = (event) => {
    event.preventDefault();
    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const dob = event.target.dob.value;
    const address = event.target.address.value;
    const image = event.target.image.value;
    const user = sessionStorage.getItem("Id");
    console.log(image);
    axios.post("http://localhost:3000/api/student/account/details/add", {
      first_name,
      last_name,
      dob,
      address,
      image,
      user
    }).then((response) => {
      console.log(response);
    });
  };
  useEffect(() => {
    axios.post("http://localhost:3000/api/student/account/details/fetch", {
      user: sessionStorage.getItem("Id")
    }).then((response) => {
      const data = response.data.output.Student_ProfilePic;
      console.log(data);
      const test = document.getElementById("Test");
      test.innerHTML = `<img src=${data} alt="profile"/>`;
    });
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "w-full h-[92dvh] flex justify-center items-center bg-[#f6f7f9]", children: /* @__PURE__ */ jsxs("div", { className: "w-[90%] h-[80dvh] mx-auto bg-white flex justify-center items-center rounded-[20px] shadow-[--bg] shadow-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[30%] h-full flex justify-center items-center", children: /* @__PURE__ */ jsx("div", { className: "w-[300px] h-[300px] flex justify-center items-center ", children: /* @__PURE__ */ jsx("img", { id: "img", className: "rounded-full w-[200px] h-[200px] border-[5px] border-[#1d1d1b]", src: img1.src, alt: "profile pic" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-[50%] h-full p-8 ", children: /* @__PURE__ */ jsxs("form", { className: "w-[80%] h-full px-8 flex flex-col justify-center", encType: "multipart/form-data", onSubmit: handelSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "First name" }),
        /* @__PURE__ */ jsx("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "first_name", type: "text", placeholder: "First name" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Last name" }),
        /* @__PURE__ */ jsx("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "last_name", type: "text", placeholder: "Lastname" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Date of birth" }),
        /* @__PURE__ */ jsx("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "dob", type: "date", placeholder: "Dob" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Address" }),
        /* @__PURE__ */ jsx("textarea", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "address", type: "", placeholder: "Address", rows: 5 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Profile Picture" }),
        /* @__PURE__ */ jsx("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "image", type: "text", placeholder: "File Path" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start gap-8", children: [
        /* @__PURE__ */ jsx("button", { className: "bg-gradient-to-r from-[--ui] to-[--bg] hover:bg-gradient-to-r hover:from-[--bg] hover:to-[--ui] transition-colors font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "submit", children: "Submit" }),
        /* @__PURE__ */ jsx("button", { className: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "reset", children: "Cancel" })
      ] })
    ] }) })
  ] }) });
};

const $$Astro = createAstro();
const $$Documents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Documents;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/doom/6k-app/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "ProfilePanel", ProfilePanel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/doom/6k-app/src/components/ProfilePanel", "client:component-export": "default" })} </div> ` })}`;
}, "/home/doom/6k-app/src/pages/profile/documents.astro", void 0);

const $$file = "/home/doom/6k-app/src/pages/profile/documents.astro";
const $$url = "/profile/documents";

export { $$Documents as default, $$file as file, $$url as url };
