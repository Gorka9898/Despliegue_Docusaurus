import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ca/blog',
    component: ComponentCreator('/ca/blog', '7b4'),
    exact: true
  },
  {
    path: '/ca/blog/archive',
    component: ComponentCreator('/ca/blog/archive', '279'),
    exact: true
  },
  {
    path: '/ca/blog/first-blog-post',
    component: ComponentCreator('/ca/blog/first-blog-post', '1b1'),
    exact: true
  },
  {
    path: '/ca/blog/long-blog-post',
    component: ComponentCreator('/ca/blog/long-blog-post', 'b45'),
    exact: true
  },
  {
    path: '/ca/blog/mdx-blog-post',
    component: ComponentCreator('/ca/blog/mdx-blog-post', '477'),
    exact: true
  },
  {
    path: '/ca/blog/tags',
    component: ComponentCreator('/ca/blog/tags', '4e3'),
    exact: true
  },
  {
    path: '/ca/blog/tags/docusaurus',
    component: ComponentCreator('/ca/blog/tags/docusaurus', '112'),
    exact: true
  },
  {
    path: '/ca/blog/tags/facebook',
    component: ComponentCreator('/ca/blog/tags/facebook', '52f'),
    exact: true
  },
  {
    path: '/ca/blog/tags/hello',
    component: ComponentCreator('/ca/blog/tags/hello', 'c75'),
    exact: true
  },
  {
    path: '/ca/blog/tags/hola',
    component: ComponentCreator('/ca/blog/tags/hola', '039'),
    exact: true
  },
  {
    path: '/ca/blog/welcome',
    component: ComponentCreator('/ca/blog/welcome', '72f'),
    exact: true
  },
  {
    path: '/ca/markdown-page',
    component: ComponentCreator('/ca/markdown-page', '832'),
    exact: true
  },
  {
    path: '/ca/prueba',
    component: ComponentCreator('/ca/prueba', '031'),
    exact: true
  },
  {
    path: '/ca/prueba',
    component: ComponentCreator('/ca/prueba', '575'),
    exact: true
  },
  {
    path: '/ca/docs/next',
    component: ComponentCreator('/ca/docs/next', '165'),
    routes: [
      {
        path: '/ca/docs/next/category/tutorial---basics',
        component: ComponentCreator('/ca/docs/next/category/tutorial---basics', '424'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/category/tutorial---extras',
        component: ComponentCreator('/ca/docs/next/category/tutorial---extras', '325'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/intro',
        component: ComponentCreator('/ca/docs/next/intro', 'd4c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/Pruebas/Prueba',
        component: ComponentCreator('/ca/docs/next/Pruebas/Prueba', '5ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/tutorial-basics/congratulations',
        component: ComponentCreator('/ca/docs/next/tutorial-basics/congratulations', 'e19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/ca/docs/next/tutorial-basics/create-a-blog-post', 'cac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/tutorial-basics/create-a-document',
        component: ComponentCreator('/ca/docs/next/tutorial-basics/create-a-document', '7ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/tutorial-basics/create-a-page',
        component: ComponentCreator('/ca/docs/next/tutorial-basics/create-a-page', '996'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/ca/docs/next/tutorial-basics/deploy-your-site', '28d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/tutorial-basics/markdown-features',
        component: ComponentCreator('/ca/docs/next/tutorial-basics/markdown-features', 'bb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/ca/docs/next/tutorial-extras/manage-docs-versions', '774'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/next/tutorial-extras/translate-your-site',
        component: ComponentCreator('/ca/docs/next/tutorial-extras/translate-your-site', 'd13'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ca/docs',
    component: ComponentCreator('/ca/docs', 'd3d'),
    routes: [
      {
        path: '/ca/docs/category/tutorial---basics',
        component: ComponentCreator('/ca/docs/category/tutorial---basics', '6e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/category/tutorial---extras',
        component: ComponentCreator('/ca/docs/category/tutorial---extras', '00a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/intro',
        component: ComponentCreator('/ca/docs/intro', '9c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/Pruebas/Prueba',
        component: ComponentCreator('/ca/docs/Pruebas/Prueba', 'd64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/ca/docs/tutorial-basics/congratulations', 'ef6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/ca/docs/tutorial-basics/create-a-blog-post', 'a01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/ca/docs/tutorial-basics/create-a-document', 'd27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/ca/docs/tutorial-basics/create-a-page', 'b8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/ca/docs/tutorial-basics/deploy-your-site', '637'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/ca/docs/tutorial-basics/markdown-features', '0cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/ca/docs/tutorial-extras/manage-docs-versions', '323'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ca/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/ca/docs/tutorial-extras/translate-your-site', 'f6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ca/',
    component: ComponentCreator('/ca/', '267'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
