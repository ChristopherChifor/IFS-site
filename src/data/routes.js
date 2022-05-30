export const ROUTES_SOURCE = [
  {
    path: "/",
    label: "home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "Home" }
  },
  {
    path: "/about",
    label: "about",
    name: "about",
    component: () => import("@/views/about/index.vue"),
    meta: { title: "About" }
  },
  {
    path: "/services",
    label: "services",
    name: "services",
    component: () => import("@/views/services/index.vue"),
    meta: { title: "Services" }
  },
  {
    path: "/birds",
    label: "birds",
    name: "birds",
    component: () => import("@/views/birds/index.vue"),
    meta: { title: "Our Birds" }
  },
  {
    path: "/industries",
    label: "industries",
    name: "industries",
    component: () => import("@/views/industries/index.vue"),
    meta: { title: "Industries" }
  },
  {
    path: "/areas",
    label: "areas",
    name: "areas",
    component: () => import("@/views/areas/index.vue"),
    meta: { title: "Areas" }
  },
  {
    path: "/faq",
    label: "FAQ",
    name: "faq",
    component: () => import("@/views/faq/index.vue"),
    meta: { title: "FAQ" }
  },
  {
    path: "/blog",
    label: "blog",
    name: "blog",
    component: () => import("@/views/blog/index.vue"),
    meta: { title: "Blog" }
  },
  {
    path: "/contact",
    label: "contact",
    name: "Contact",
    component: () => import("@/views/contact/index.vue"),
    meta: { title: "Contact Us" }
  },

];
