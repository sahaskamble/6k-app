/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BFAc5SXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navbar, $ as $$Layout } from './add_B6X65b5N.mjs';

const $$Astro = createAstro();
const $$Update = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Update;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Profile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/doom/6k-app/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "ProfilePanel", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/doom/6k-app/src/components/ProfilePanel", "client:component-export": "default" })} </div> ` })}`;
}, "/home/doom/6k-app/src/pages/profile/update.astro", void 0);

const $$file = "/home/doom/6k-app/src/pages/profile/update.astro";
const $$url = "/profile/update";

export { $$Update as default, $$file as file, $$url as url };
