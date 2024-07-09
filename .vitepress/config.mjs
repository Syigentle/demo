import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/demo/",
    title: "Syigenle文档",
    description: "A VitePress Site", // SEO用到的，无需太关注
    // 网页图标
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/logo.svg",
            },
        ],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/demo/logo.svg", // 左上角的logo
        nav: [
            { text: "主页", link: "/" },
            {
                text: "下拉框",
                items: [
                    { text: "示例", link: "/markdown-examples" },
                    { text: "Api", link: "/api-examples" },
                ],
            },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
            {
                text: "Examples2",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
            { icon: "twitter", link: "https://twitter.com/vuejs" },
        ],
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },

        footer: {
            copyright: "Copyright © 2024 Syigentle",
        },
    },
})
