/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro_BFAc5SXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-s6tr6vzr> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">${renderHead()}</head> <body data-astro-cid-s6tr6vzr> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/doom/6k-app/src/layout/Layout.astro", void 0);

const img1 = new Proxy({"src":"/_astro/img1.BcA-bFn1.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/doom/6k-app/src/assets/img/img1.jpg";
							}
							
							return target[name];
						}
					});

const Navbar = () => {
  useEffect(() => {
    const btn = document.getElementById("navbar_menu_button");
    const menu = document.getElementById("navbar_float_menu");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);
  return /* @__PURE__ */ jsx("header", { className: "w-full h-[8dvh] bg-gradient-to-r from-[--ui] to-[--bg]", children: /* @__PURE__ */ jsxs("nav", { className: "flex justify-between items-center px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "navbar_title h-[8dvh] flex justify-between items-center gap-8", children: /* @__PURE__ */ jsx("div", { className: "title text-3xl text-gray-900 font-bold", children: "StudyWings" }) }),
    /* @__PURE__ */ jsxs("div", { className: "navbar_menu text-lg flex items-center gap-8", children: [
      /* @__PURE__ */ jsx("span", { className: "navbar_items", children: "Application" }),
      /* @__PURE__ */ jsx("span", { className: "navbar_items", children: "University" }),
      /* @__PURE__ */ jsx("span", { className: "navbar_items", children: "Country" }),
      /* @__PURE__ */ jsx("span", { className: "navbar_items", children: "Courses" })
    ] }),
    /* @__PURE__ */ jsx("div", { id: "navbar_float_menu", className: "hidden absolute top-[9dvh] right-3 w-[300px] h-[250px] py-3 rounded-lg bg-[--bg]", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col justify-between items-center px-2 text-xl ", children: [
      /* @__PURE__ */ jsxs("div", { className: "container flex justify-between items-center gap-8 py-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[40%] flex justify-center items-center", children: /* @__PURE__ */ jsx("img", { className: "rounded-full", src: img1.src, alt: "dummy image", width: 50 }) }),
        /* @__PURE__ */ jsx("span", { className: "section w-[70%]", children: "Name" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center hover:bg-[--color2] px-4 w-full h-[40px] rounded-lg", children: /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center hover:bg-[--color2] px-4 w-full h-[40px] rounded-lg", children: /* @__PURE__ */ jsx("a", { href: "/profile", children: "Profile" }) }),
      /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center hover:bg-[--color2] px-4 bg-[--color2] w-full h-[40px] rounded-lg", children: /* @__PURE__ */ jsxs("a", { className: "flex gap-4", href: "/login", children: [
        /* @__PURE__ */ jsx("i", { className: "bi bi-box-arrow-right block" }),
        " Sign in"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { id: "navbar_menu_button", className: "navbar_menu_button text-2xl flex items-center gap-2 bg-[--color2] px-3 py-1 rounded-full cursor-pointer", children: [
      /* @__PURE__ */ jsx("i", { className: "bi bi-list" }),
      /* @__PURE__ */ jsx("img", { id: "image", className: "w-[25px] h-[25px] rounded-full border-[2px] border-[#1d1d1b]", src: img1.src, alt: "profile pic" })
    ] })
  ] }) });
};

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Profile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/doom/6k-app/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "ProfilePanel", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/doom/6k-app/src/components/ProfilePanel", "client:component-export": "default" })} </div> ` })}`;
}, "/home/doom/6k-app/src/pages/profile/add.astro", void 0);

const $$file = "/home/doom/6k-app/src/pages/profile/add.astro";
const $$url = "/profile/add";

const add = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Add,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Navbar as N, add as a, img1 as i };
