export const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      name: "Главная"
    },
    component: () => import("@/pages/home/views/indexView.vue")
  },
  {
    path: "/about",
    name: "about",
    meta: {
      name: "О компании профиль-с"
    },
    component: () => import("@/pages/about/views/indexView.vue")
  },
  {
    path: "/collections",
    name: "collections",
    meta: {
      name: "Каталог продукции"
    },
    component: () => import("@/pages/collections/views/indexView.vue"),

    children: [
      {
        path: ":id",
        name: "collection",
        component: () => import("@/pages/collections/views/indexPage.vue")
      }
    ]
  },
  {
    path: "/posts",
    name: "posts",
    meta: {
      name: "Новости"
    },
    component: () => import("@/pages/posts/views/indexView.vue"),

    children: [
      {
        path: ":id",
        name: "post",
        component: () => import("@/pages/posts/views/indexPage.vue")
      }
    ]
  },
  {
    path: "/hr",
    name: "hr",
    meta: {
      name: "Вакансии"
    },
    component: () => import("@/pages/hr/views/indexView.vue"),
    children: [
      {
        path: ":id",
        name: "hr-page",
        component: () => import("@/pages/hr/views/indexPage.vue")
      }
    ]
  },
  {
    path: "/contacts",
    name: "contacts",
    meta: {
      name: "Контакты"
    },
    component: () => import("@/pages/contacts/views/indexView.vue")
  }
];
