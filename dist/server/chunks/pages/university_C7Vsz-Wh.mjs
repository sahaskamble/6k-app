/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BFAc5SXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './add_B6X65b5N.mjs';

const $$Astro = createAstro();
const $$University = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$University;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "University page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Navbar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/doom/6k-app/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "UniversityPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/doom/6k-app/src/components/University", "client:component-export": "default" })} </div> ` })}`;
}, "/home/doom/6k-app/src/pages/root/university.astro", void 0);

const $$file = "/home/doom/6k-app/src/pages/root/university.astro";
const $$url = "/root/university";

export { $$University as default, $$file as file, $$url as url };
