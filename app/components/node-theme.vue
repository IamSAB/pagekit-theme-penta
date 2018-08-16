<template>

    <div class="uk-grid pk-grid-large" data-uk-grid-margin>
        <div class="pk-width-sidebar">
            <div class="uk-panel uk-margin top">
                <ul class="uk-breadcrumb">
                    <li v-for="item in breadcrumbs" :class="{'uk-active': item.active}" :key="item.path">
                        <span v-if="item.active" @click="path = item.path">{{ item.title }}</span>
                        <a v-else @click="path = item.path">{{ item.title }}</a>
                    </li>
                </ul>
                <ul class="uk-nav uk-nav-side pk-nav-large">
                    <li v-for="item in navigation" :key="item.path">
                        <a @click="path = item.path">{{ item.title }}</a>
                    </li>
                </ul>
                <h3 v-if="!navigation.length" class="uk-text-muted">{{'No child categories' | trans }}</h3>
            </div>
        </div>
        <div class="pk-width-content">
            <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-grid-margin>
                <h3 class="uk-text-muted">{{ components.length }} of {{ settings.length }} {{'settings shown' | trans }}</h3>
                <ul class="uk-subnav pk-subnav-icon">
                    <li :class="{'uk-active': view == 'list'}">
                        <a class="pk-icon-table pk-icon-hover" :title="'List View' | trans" data-uk-tooltip="{delay: 500}" @click.prevent="view = 'list'"></a>
                    </li>
                    <li class="{'uk-active': view == 'grid'}">
                        <a class="pk-icon-thumbnails pk-icon-hover" :title="'Grid View' | trans" data-uk-tooltip="{delay: 500}" @click.prevent="view = 'grid'"></a>
                    </li>
                </ul>
            </div>
            <form class="uk-form" :class="{'uk-form-horizontal': view == 'list', 'uk-form-stacked': view == 'grid'}">
                <ul  v-if="components.length" class="uk-grid uk-grid-small" :class="{'uk-grid-width-medium-1-2': view == 'grid'}" data-uk-grid-margin>
                    <li v-for="item in components" :key="item.path" :class="{'uk-width-1-1': view == 'list'}">
                        <div class="uk-panel uk-panel-box uk-panel-box-secondary">
                            <div class="uk-panel-badge uk-badge">{{ item.path.split('.').join(' / ') }}</div>
                            <h2 class="uk-panel-title">{{ item.title }}</h2>
                            <component :is="item.component"  :setting.sync="node.theme[item.component]"></component>
                        </div>
                    </li>
                </ul>
                <h3 class="uk-h1 uk-text-muted uk-text-center" v-else>{{ 'Navigate to see more settings' | trans }}</h3>
            </form>
        </div>
    </div>

</template>

<script>
    // Base
    import Section from './setting/Section.vue';
    import Position from './setting/Position.vue';

    // Head
    import Navbar from './setting/Navbar.vue';
    import Hero from './setting/Hero.vue';

    // Top
    const SectionTopA = {
        extends: Section,
            path: 'Top.A.Section'
        },
        SectionTopB = {
            extends: Section,
            path: 'Top.B.Section'
        },
        SectionTopC = {
            extends: Section,
            path: 'Top.C.Section'
        },
        SectionTopD = {
            extends: Section,
            path: 'Top.D.Section'
        },
        PositionTopA = {
            extends: Position,
            path: 'Top.A.Position'
        },
        PositionTopB = {
            extends: Position,
            path: 'Top.B.Position'
        },
        PositionTopC = {
            extends: Position,
            path: 'Top.C.Position'
        },
        PositionTopD = {
            extends: Position,
            path: 'Top.D.Position'
        }

    // Main
    import Content from './setting/Content.vue';
    const SectionMain = {
        extends: Section,
            path: 'Main.Section'
        },
        PositionMainTop = {
            extends: Position,
            path: 'Main.Top.Position'
        },
        PositionMainBottom = {
            extends: Position,
            path: 'Main.Bottom.Position'
        }

    // Bottom
    const SectionBottomA = {
            extends: Section,
            path: 'Bottom.A.Section'
        },
        SectionBottomB = {
            extends: Section,
            path: 'Bottom.B.Section'
        },
        SectionBottomC = {
            extends: Section,
            path: 'Bottom.C.Section'
        },
        SectionBottomD = {
            extends: Section,
            path: 'Bottom.D.Section'
        },
        PositionBottomA = {
            extends: Position,
            path: 'Bottom.A.Position'
        },
        PositionBottomB = {
            extends: Position,
            path: 'Bottom.B.Position'
        },
        PositionBottomC = {
            extends: Position,
            path: 'Bottom.C.Position'
        },
        PositionBottomD = {
            extends: Position,
            path: 'Bottom.D.Position'
        }

    // Foot
    const SectionFoot = {
            extends: Section,
            path: 'Foot.Section'
        },
        PositionFoot = {
            extends: Position,
            path: 'Foot.Position'
        }

    module.exports = {

        section: {
            label: 'Theme',
            priority: 90
        },

        props: {
            node: {
                type: Object,
                required: true
            }
        },

        data: () => ({
            filter: '',
            path: '',
            view: 'grid',
            active: ['SectionMain'],
            settings: []
        }),

        created () {
            _.forIn(this.$options.components, (component, name) => {
                var options = component.options || {};
                if (options.path) {
                    this.settings.push({
                        path: options.path,
                        component: name
                    });
                }
            });
        },

        watch: {
            view () {
                $(window).trigger("resize");
            }
        },

        computed: {

            filtered () {
                let filtered = this.settings,
                    sort = ['Head','Top','Main','Bottom','Foot'],
                    regex = new RegExp('[^.]*');
                if (this.filter) {
                    filtered = _.filter(this.settings, (setting) => {
                        return setting.path.match(new RegExp(this.filter,'i'));
                    });
                }
                let aMatch, bMatch;

                return filtered.sort((a,b) => {
                    aMatch = a.path.match(regex)[0];
                    bMatch = b.path.match(regex)[0];
                    if ( aMatch == bMatch) {
                        return a.path - b.path;
                    }
                    else {
                        return sort.indexOf(aMatch) - sort.indexOf(bMatch);
                    }
                });
            },

            navigation () {
                var match,
                    items = [],
                    path = _.escapeRegExp(this.path),
                    reg = this.path ? new RegExp('(?<=' + path + '\\.).*?(?=\\.)','i') : new RegExp('^[^.]*','i');
                _.each(this.settings, (setting) => {
                    match = setting.path.match(reg);
                    if (match && !_.find(items,{title: match})) {
                        items.push({
                            title: match,
                            component: setting.component,
                            path: ((this.path ? this.path +'.' : '') + match)
                        })
                    }
                });
                return this.sort(items);
            },

            components () {
                let items = [],
                    match;
                var path = _.escapeRegExp(this.path),
                      reg = (this.path ? new RegExp('(?<=^' + path + '\\.)[^.]*$', 'i') : new RegExp('^[^.]*$', 'i'));
                _.each(this.settings, (setting) => {
                    match = setting.path.match(reg);
                    if (match) {
                        items.push({
                            title: match,
                            component: setting.component,
                            path: setting.path
                        })
                    }
                })
                return this.sort(items);
            },

            breadcrumbs () {
                let crumbs = [];
                if (this.path) {
                    let parts = this.path.split('.');
                    const l = parts.length;
                    for (let i = 0; i < l; i++) {
                        crumbs.unshift({
                            path: parts.join('.'),
                            title: parts.pop(),
                            active: i == 0
                        });
                    }
                }
                crumbs.unshift({
                    title: this.$trans('Root'),
                    path: '',
                    active: !this.path
                });
                return crumbs;
            }

        },

        methods: {

            sort (array) {
                const sort = ['Head','Top','Main','Bottom','Foot'],
                      reg = new RegExp('[^.]*');
                let aMatch, bMatch;
                return array.sort((a,b) => {
                    aMatch = a.path.match(reg)[0];
                    bMatch = b.path.match(reg)[0];
                    if ( aMatch == bMatch) {
                        return a.path.localeCompare(b.path);
                    }
                    else {
                        return sort.indexOf(aMatch) - sort.indexOf(bMatch);
                    }
                });
            }

        },

        components: {
            Navbar,
            Hero,
            SectionTopA,
            PositionTopA,
            SectionTopB,
            PositionTopB,
            SectionTopC,
            PositionTopC,
            SectionTopD,
            PositionTopD,
            PositionMainTop,
            PositionMainBottom,
            SectionMain,
            Content,
            SectionBottomA,
            PositionBottomA,
            SectionBottomB,
            PositionBottomB,
            SectionBottomC,
            PositionBottomC,
            SectionBottomD,
            PositionBottomD,
            SectionFoot,
            PositionFoot
        }

    }

    Vue.component('SelectClass', require('./SelectClass.vue'));
    Vue.component('SelectClassResponsive', require('./SelectClassResponsive.vue'));
    Vue.component('SelectJsOpts', require('./SelectJsOpts.vue'));
    Vue.component('CheckboxClass', require('./CheckboxClass.vue'));

    if (window.$data.node.type != 'link') {
        window.Site.components['node-theme'] = module.exports;
    }

</script>
