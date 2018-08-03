module.exports = [

    {
        entry: {
            "node-theme": "./app/components/node-theme.vue",
            "site-theme": "./app/components/site-theme.vue",
            "widget-theme": "./app/components/widget-theme.vue",
            "uikit": "./app/uikit.js"
        },
        output: {
            filename: "./app/bundle/[name].js"
        },
        module: {
            loaders: [
                { test: /\.vue$/, loader: "vue" }
            ]
        },
    }

];