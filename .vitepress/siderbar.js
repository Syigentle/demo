import { set_sidebar } from "./util/auto-gen-sidebar"
console.log("@@@", JSON.stringify(set_sidebar("fontend")))
export default {
    "/fontend": set_sidebar("fontend"),
    // "/fontend": [
    //     {
    //         text: "CSS",
    //         items: [{ text: "css基础", link: "/fontend/css/css.md" }],
    //     },
    //     {
    //         text: "JS",
    //         collapsed: true,
    //         items: [
    //             { text: "js基础", link: "/fontend/js/js.md" },
    //             { text: "js高级", link: "/fontend/js/super-js.md" },
    //         ],
    //     },
    //     { text: "Vue", link: "/fontend/framework/vue.md" },
    // ],
    // "/fontend": [
    //     { text: "css", items: [{ text: "css", link: "fontend/css/css.md" }] },
    //     {
    //         text: "framework",
    //         items: [
    //             { text: "react", link: "fontend/framework/react.md" },
    //             { text: "vue", link: "fontend/framework/vue.md" },
    //         ],
    //     },
    //     {
    //         text: "js",
    //         items: [
    //             { text: "js", link: "/fontend/js/js.md" },
    //             { text: "super-js", link: "/fontend/js/super-js.md" },
    //         ],
    //     },
    //     {
    //         text: "typescript",
    //         items: [{ text: "typeScript", link: "fontend/typescript/typeScript.md" }],
    //     },
    // ],
    afterend: [
        {
            text: "后端学习",
            items: [
                { text: "spring", link: "/afterend/spring" },
                { text: "java", link: "/afterend/java" },
            ],
        },
    ],
}
