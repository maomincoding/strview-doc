module.exports = {
    title: 'Strview.js',
    description: 'A JS library that can convert strings into view',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
    ],
    markdown: {
        lineNumbers: false
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Strview.js',
            description: 'A JS library that can convert strings into view'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Strview.js',
            description: '一个可以将字符串转换为视图的JS库'
        }
    },
    themeConfig: {
        nav: [
            { text: 'GitHub', link: 'https://github.com/maomincoding/strview/' }
        ],
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                sidebar: [
                    {
                        title: 'Introduce',
                        path: '/introduce/',
                        collapsable: false,
                    },
                    {
                        title: 'Install',
                        path: '/install/',
                        collapsable: false,
                    },
                    {
                        title: 'Started',
                        path: '/started/',
                        collapsable: false,
                    },
                    {
                        title: 'Use',
                        path: '/use/',
                        collapsable: false,
                    },
                    {
                        title: 'Build',
                        path: '/build/',
                        collapsable: false,
                    },
                ],
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                sidebar: [
                    {
                        title: '介绍',
                        path: '/zh/introduce/',
                        collapsable: false,
                    },
                    {
                        title: '安装',
                        path: '/zh/install/',
                        collapsable: false,
                    },
                    {
                        title: '快速上手',
                        path: '/zh/started/',
                        collapsable: false,
                    },
                    {
                        title: '基本使用',
                        path: '/zh/use/',
                        collapsable: false,
                    },
                    {
                        title: '部署',
                        path: '/zh/build/',
                        collapsable: false,
                    },
                ],
            }
        },

        displayAllHeaders: true,
        smoothScroll: true
    }
}