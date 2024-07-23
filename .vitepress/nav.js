export default [
    { text: "主页", link: "/" },
    {
        text: "前端学习1",
        items: [
            { text: "JS", link: "/fontend/js/js", activeMatch: "/fontend/js" },
            { text: "CSS", link: "/fontend/css/css" },
            { text: "Vue", link: "/fontend/framework/vue" },
        ],
        activeMatch: "/fontend",
    },
    {
        text: "后端学习",
        link: "/afterend/java.md",
    },
]
