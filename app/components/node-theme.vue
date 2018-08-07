<template>

    <div class="uk-grid pk-grid-large" data-uk-grid-margin>
        <div class="pk-width-sidebar">
            <div class="uk-panel">
                <switcher @switch="switch" class="uk-nav uk-nav-side pk-nav-large" :sections="sections" :active="active"></switcher>
            </div>
        </div>
        <div class="pk-width-content">
            <form class="uk-form uk-form-horizontal">
                <component :is="active"  :node.sync="node"></component>
            </form>
        </div>
    </div>

</template>

<script>

    module.exports = {

        section: {
            label: 'Theme',
            priority: 90
        },

        props: ['node'],

        data() {
            return {
                active: 'navbar',
                sections: {
                    navbar: 'Navbar',
                    hero: 'Hero',
                    top: 'Top',
                    main: 'Main',
                    bottom: 'Bottom',
                    foot: 'Foot'
                },
            }
        },

        methods: {
            switch: function (name) {
                this.active = name
            }
        },

        components: {
            navbar: require('./navbar.vue'),
            hero: require('./hero.vue'),
            top: {
                props: {
                    node: Object
                },
                label: 'Top',
                template: `
                    <div>
                        <switcher @switch="switch" class="uk-subnav uk-subnav-line" :sections="sections" :active="active"></switcher>
                        <component :is="active" :section.sync="node.theme[active]"></component>
                    </div>
                `,
                data: function () {
                    return {
                        active: 'top_a',
                        sections: {
                            top_a: 'Top A',
                            top_b: 'Top B',
                            top_c: 'Top C',
                            top_d: 'Top D',
                        }
                    }
                },
                methods: {
                    switch: function (name) {
                        this.active = name;
                    }
                },
                components: {
                    top_a: require('./section.vue'),
                    top_b: require('./section.vue'),
                    top_c: require('./section.vue'),
                    top_d: require('./section.vue')
                }
            },
            main: require('./main.vue'),
            bottom: {
                props: {
                    node: Object
                },
                label: 'Bottom',
                template: `
                    <div>
                        <switcher @switch="switch" class="uk-subnav uk-subnav-line" :sections="sections" :active="active"></switcher>
                        <component :is="active" :section.sync="node.theme[active]"></component>
                    </div>
                `,
                data: function () {
                    return {
                        active: 'bottom_a',
                        sections: {
                            bottom_a: 'Bottom A',
                            bottom_b: 'Bottom B',
                            bottom_c: 'Bottom C',
                            bottom_d: 'Bottom D',
                        }
                    }
                },
                methods: {
                    switch: function (name) {
                        this.active = name;
                    }
                },
                components: {
                    bottom_a: require('./section.vue'),
                    bottom_b: require('./section.vue'),
                    bottom_c: require('./section.vue'),
                    bottom_d: require('./section.vue')
                }
            },
            foot: require('./foot.vue')
        }

    };

    Vue.component('class-select', require('./class-select.vue'));
    Vue.component('class-checkboxes', require('./class-checkboxes.vue'));
    Vue.component('switcher', require('./switcher.vue'));
    Vue.component('input-grid', require('./input-grid.vue'));
    Vue.component('input-width', require('./input-width.vue'));
    Vue.component('input-bg', require('./input-bg.vue'));
    Vue.component('theme-section', require('./section.vue'));
    Vue.component('input-media', function (resolve, reject) {
        Vue.asset({
            js: [
                'app/assets/uikit/js/components/upload.min.js',
                'app/system/modules/finder/app/bundle/panel-finder.js'
            ]
        }).then(function () {
            resolve(require('./input-media.vue'));
        })
    });

    window.Site.components['node-theme'] = module.exports;

</script>
