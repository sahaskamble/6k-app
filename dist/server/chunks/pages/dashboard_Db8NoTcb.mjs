/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BFAc5SXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './add_B6X65b5N.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Navbar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/doom/6k-app/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "RootDashboard", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/doom/6k-app/src/components/RootDashboard", "client:component-export": "default" })} </div> ` })}`;
}, "/home/doom/6k-app/src/pages/root/dashboard.astro", void 0);

const $$file = "/home/doom/6k-app/src/pages/root/dashboard.astro";
const $$url = "/root/dashboard";

export { $$Dashboard as default, $$file as file, $$url as url };
