<template>
    <div class="uk-grid pk-grid-large" data-uk-grid-margin>
        <div class="pk-width-sidebar">
            <div class="uk-panel">
                <ul class="uk-nav uk-nav-side pk-nav-large" data-uk-tab="{ connect: '#theme-settings' }">
                    <!-- <li><a>{{ 'Navbar' | trans }}</a></li>
                    <li><a>{{ 'Hero' | trans }}</a></li> -->
                    <li><a>{{ 'Top' | trans }}</a></li>
                    <!-- <li><a>{{ 'Main' | trans }}</a></li> -->
                    <li><a>{{ 'Bottom' | trans }}</a></li>
                    <li><a>{{ 'Footer' | trans }}</a></li>
                    <!-- <li><a>{{ 'Extras' | trans }}</a></li> -->
                </ul>
            </div>
        </div>
        <div class="pk-width-content">
            <ul id="theme-settings" class="uk-form uk-form-horizontal uk-switcher">

                <!-- <li>

                    <div class="uk-form-row">
                        <label for="form-sidebar-layout" class="uk-form-label">{{ 'Type' | trans }}</label>
                        <div class="uk-form-controls">
                            <p class="uk-form-controls-condensed">
                                <select v-model="node.theme.navbar.type">
                                    <option value="">{{ 'Hidden' | trans }}</option>
                                    <option value="default">{{ 'Default' | trans }}</option>
                                    <option value="transparent">{{ 'Transparent' | trans }}</option>
                                </select>
                            </p>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label class="uk-form-label">{{ 'Layout' | trans }}</label>
                        <div class="uk-form-controls">
                            <div class="uk-grid uk-grid-width-1-3 uk-margin">
                                <div v-for="(pos,str) in layout">
                                    <p class="uk-text-bold uk-text-capitalize">{{ pos }}</p>
                                    <div id="sortable-navbar-{{pos}}"class="uk-sortable uk-margin">
                                        <template v-if="str.length">
                                            <div v-for="child in str.split(',')" class="uk-margin" :data-child="child">
                                                <div class="uk-panel uk-panel-box uk-text-capitalize">{{ child.replace('_',' ') }}</div>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <p class="uk-form-controls-condensed">
                                <label><input type="checkbox" v-model="node.theme.navbar.centered_split_menu" :disabled="!isMenuCenter"> {{ 'Create a split menu with a centered logo'| trans }}</label><br>
                                <label><input type="checkbox" v-model="node.theme.navbar.always_responsive"> {{ 'Use always responsive layout.'| trans }}</label><br>
                                <label><input type="checkbox" v-model="node.theme.navbar.expand"> {{ 'Expand to full width' | trans }}</label>
                            </p>
                        </div>
                    </div>

                    <input-inverse :value.sync="node.theme.navbar.inverse"></input-inverse>

                    <div class="uk-form-row">
                        <label for="form-sidebar-layout" class="uk-form-label">{{ 'Drop' | trans }}</label>
                        <div class="uk-form-controls">
                            <p class="uk-form-controls-condensed uk-form-controls-text">
                                <label class="uk-margin-right"><input type="checkbox" v-model="node.theme.navbar['uk-navbar']['dropbar']"> {{ 'Use dropbar' | trans }}</label>
                                <span v-if="node.theme.navbar['uk-navbar']['dropbar']">
                                    {{ 'Mode' | trans }}
                                    <select class="uk-form-small" v-model="node.theme.navbar['uk-navbar']['dropbar-mode']">
                                        <option value="slide">{{ 'Slide' | trans }}</option>
                                        <option value="push">{{ 'Push' | trans }}</option>
                                    </select>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label for="form-sidebar-layout" class="uk-form-label">{{ 'Offcanvas' | trans }}</label>
                        <div class="uk-form-controls">
                            <p class="uk-form-controls-condensed">
                                {{ 'Mode' | trans }}
                                <select class="uk-form-small" v-model="node.theme.navbar['uk-offcanvas'].mode">
                                    <option value="">{{ 'None' | trans }}</option>
                                    <option value="slide">{{ 'Slide' | trans }}</option>
                                    <option value="push">{{ 'Push' | trans }}</option>
                                    <option value="reveal">{{ 'Reveal' | trans }}</option>
                                </select>
                                <label><input class="uk-margin-left" type="checkbox" v-model="node.theme.navbar['uk-offcanvas'].flip"> {{ 'Flip' | trans }}</label>
                                <label><input class="uk-margin-left" type="checkbox" v-model="node.theme.navbar['uk-offcanvas'].enable"> {{ 'Overlay' | trans }}</label>
                            </p>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label for="form-sidebar-layout" class="uk-form-label">{{ 'Sticky' | trans }}</label>
                        <div class="uk-form-controls">
                            <p class="uk-form-controls-condensed uk-form-controls-text">
                                <label><input type="checkbox" v-model="node.theme.navbar.sticky"> {{ 'Enable sticky navbar' | trans }}</label>
                            </p>
                            <template v-if="node.theme.navbar.sticky">
                                <p class="uk-form-controls-condensed">
                                    {{ 'Animation' | trans }}
                                    <select class="uk-form-small" v-model="node.theme.navbar['uk-sticky'].animation">
                                        <option value="">{{ 'None' | trans }}</option>
                                        <option value="fade">{{ 'Fade' | trans }}</option>
                                        <option value="slide-top">{{ 'Slide top' | trans }}</option>
                                    </select>
                                </p>
                                <p class="uk-form-controls-condensed">
                                    {{ 'Show after'}}
                                    <input  class="uk-form-small uk-form-width-mini" v-model="node.theme.navbar['uk-sticky'].top" type="number" min="0" step="50">
                                    {{ 'of scrolling' | trans }}
                                </p>
                                <p class="uk-form-controls-condensed">
                                    <label><input type="checkbox" v-model="node.theme.navbar['uk-sticky'].showonup"> {{ 'Only show on scrolling up' | trans }}</label>
                                </p>
                            </template>
                        </div>
                    </div>

                </li>

                <li>
                    <div class="uk-form-row">
                        <label class="uk-form-label">{{ 'Cover' | trans }}</label>
                        <div class="uk-form-controls">
                            <select v-model="node.theme.hero.type">
                                <option value="img">{{ 'Image' | trans }}</option>
                                <option value="video">{{ 'Video' | trans }}</option>
                                <option value="iframe">{{ 'iFrame' | trans }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="uk-form-row" v-if="node.theme.hero.type == 'img'">
                        <label for="form-hero-img" class="uk-form-label">{{ 'Image' | trans }}</label>
                        <div class="uk-form-controls">
                            <input-media :value.sync="node.theme.hero.img" type="image"></input-image>
                        </div>
                    </div>
                    <div class="uk-form-row" v-if="node.theme.hero.type == 'video'">
                        <label for="form-hero-video" class="uk-form-label">{{ 'Video' | trans }}</label>
                        <div class="uk-form-controls">
                            <input-media :source.sync="node.theme.hero.video" type="video"></input-media>
                        </div>
                    </div>
                    <div class="uk-form-row" v-if="node.theme.hero.type == 'iframe'">
                        <label for="form-hero-iframe" class="uk-form-label">{{ 'iFrame' | trans }}</label>
                        <div class="uk-form-controls">
                            <input class="uk-form-width-large" type="url" v-model="node.theme.hero.iframe">
                        </div>
                    </div>
                    <div class="uk-form-row" v-if="node.theme.hero.type == 'img' || node.theme.hero.type == 'video'">
                        <label for="form-hero-iframe" class="uk-form-label">{{ 'Blend mode' | trans }}</label>
                        <div class="uk-form-controls">
                            <select class="uk-form-small uk-margin-small-left" v-model="node.theme.hero.blend">
                                <option value="">{{ '- Select -' | trans }}</option>
                                <option value="multiply">{{ 'Mulitply' | trans }}</option>
                                <option value="screen">{{ 'Screen' | trans }}</option>
                                <option value="overlay">{{ 'Overlay' | trans }}</option>
                                <option value="darken">{{ 'Darken' | trans }}</option>
                                <option value="lighten">{{ 'Lighten' | trans }}</option>
                                <option value="color-dodge">{{ 'Color dodge' | trans }}</option>
                                <option value="color-burn">{{ 'Color burn' | trans }}</option>
                                <option value="hard-light">{{ 'Hard light' | trans }}</option>
                                <option value="soft-light">{{ 'Soft light' | trans }}</option>
                                <option value="difference">{{ 'Difference' | trans }}</option>
                                <option value="exclusion">{{ 'Exclusion' | trans }}</option>
                                <option value="hue">{{ 'Hue' | trans }}</option>
                                <option value="saturation">{{ 'Saturation' | trans }}</option>
                                <option value="color">{{ 'Color' | trans }}</option>
                                <option value="luminosity">{{ 'Luminosity' | trans }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="uk-form-row">
                        <label for="form-hero-height" class="uk-form-label">{{ 'Height' | trans }}</label>
                        <div class="uk-form-controls">
                            <select  v-model="node.theme.hero.height">
                                <option value="viewport">{{ 'Viewport' | trans }}</option>
                                <option value="small">{{ 'Small' | trans }}</option>
                                <option value="medium">{{ 'Medium' | trans }}</option>
                                <option value="large">{{ 'Large' | trans }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="uk-form-row">
                        <label for="form-hero-height" class="uk-form-label">{{ 'Position' | trans }}</label>
                        <div class="uk-form-controls">
                            <p class="uk-form-controls-condensed">
                                <select class="uk-margin-right" v-model="node.theme.hero.position">
                                    <option value="top-left">{{ 'Top Left' | trans }}</option>
                                    <option value="top-center">{{ 'Top Center' | trans }}</option>
                                    <option value="top-right">{{ 'Top Right' | trans }}</option>
                                    <option value="center-left">{{ 'Center Left' | trans }}</option>
                                    <option value="center">{{ 'Center' | trans }}</option>
                                    <option value="center-right">{{ 'Center Right' | trans }}</option>
                                    <option value="bottom-left">{{ 'Bottom Left' | trans }}</option>
                                    <option value="bottom-center">{{ 'Bottom Center' | trans }}</option>
                                    <option value="bottom-right">{{ 'Bottom Right' | trans }}</option>
                                    <option value="cover">{{ 'Cover' | trans }}</option>
                                </select>
                                {{ 'Size' | trans }}
                                <select class="uk-margin-small-left uk-form-small" v-model="node.theme.hero.position_modifier">
                                    <option value="">{{ 'None' | trans }}</option>
                                    <option value="small">{{ 'Small' | trans }}</option>
                                    <option value="medium">{{ 'Medium' | trans }}</option>
                                </select>
                            </p>
                        </div>
                    </div>
                    <input-inverse :value.sync="node.theme.hero.inverse"></input-inverse>
                </li> -->

                <li>
                    <div class="uk-form-row">
                        <ul class="uk-subnav uk-subnav-pill uk-text-capitalize">
                            <li class="uk-disabled">
                                <span>{{ 'Widget Positon: Top' | trans }}</span>
                            </li>
                            <li v-for="(pos,section) in node.theme['top']" :class="{'uk-active': isActiveSection('top',pos)}">
                                <a @click="selectSection('top',pos)">{{ pos }}</a>
                            </li>
                        </ul>
                    </div>
                    <input-section v-for="(pos,section) in node.theme['top']" v-show="isActiveSection('top',pos)" type="top" :position="pos" :section="section"></input-section>
                </li>

                <!-- <li>
                    <input-section type="main" position="main" :section="node.theme['main']"></input-section>
                    <input-heading :value.sync="node.theme.main.heading"></input-heading>
                    <input-text :value.sync="node.theme.main.alignment"></input-text>

                    <div class="uk-form-row">
                        <label class="uk-form-label">{{ 'Sidebar' | trans }}</label>
                        <div class="uk-form-controls">
                            <p class="uk-form-controls-condensed">
                                {{ 'Layout' | trans }}
                                <select class="uk-margin-left uk-form-small" v-model="node.theme.main.sidebar.layout">
                                    <option value="ssm">{{ 'Sidebar A | Sidebar B | Main' | trans }}</option>
                                    <option value="sms">{{ 'Sidebar A | Main | Sidebar B' | trans }}</option>
                                    <option value="mss">{{ 'Main | Sidebar A | Sidebar B' | trans }}</option>
                                </select>
                            </p>
                            <p class="uk-form-controls-condensed">
                                {{ 'Sticky' | trans }}
                                <label><input class="uk-margin-left" type="checkbox" v-model="node.theme.main.sticky_sidebar_a"> {{ 'Sidebar B' | trans }}</label>
                                <label><input class="uk-margin-left" type="checkbox" v-model="node.theme.main.sticky_sidebar_b"> {{ 'Sidebar B' | trans }}</label>
                            </p>
                            <p class="uk-form-controls-condensed">
                                {{ 'Width Sidebar A' | trans }}
                                <input-width :value.sync="node.theme.main.sidebar.width_a" :child="true"></input-width>
                            </p>
                            <p class="uk-form-controls-condensed">
                                {{ 'Width Sidebar B' | trans }}
                                <input-width :value.sync="node.theme.main.sidebar.width_b" :child="true"></input-width>
                            </p>
                        </div>
                    </div>

                    <input-grid :grid="node.theme.main.top.grid" :child="true" :title="'Main top widget grid' | trans"></input-grid>
                    <input-grid :grid="node.theme.main.bottom.grid" :child="true" :title="'Main bottom widget grid' | trans"></input-grid>

                </li> -->

                <li>
                    <div class="uk-form-row">
                        <ul class="uk-subnav uk-subnav-pill uk-text-capitalize">
                            <li class="uk-disabled">
                                <span>{{ 'Widget Position: Bottom' | trans }}</span>
                            </li>
                            <li v-for="(pos,section) in node.theme['bottom']" :class="{'uk-active': isActiveSection('bottom',pos)}">
                                <a @click="selectSection('bottom',pos)">{{ pos }}</a>
                            </li>
                        </ul>
                    </div>
                    <input-section v-for="(pos,section) in node.theme['bottom']" v-show="isActiveSection('bottom',pos)" type="bottom" :position="pos" :section.sync="section"></input-section>
                </li>

                <li>
                    <input-section type="footer" position="footer" :section.sync="node.theme['footer']"></input-section>
                </li>

                <!-- <li>
                    <div class="uk-form-row">
                        <label for="form-hero-height" class="uk-form-label">{{ 'Widget position fixed' | trans }}</label>
                        <div class="uk-form-controls">
                            <p class="uk-form-controls-condensed">
                                <select v-model="node.theme.fixed.position">
                                    <option value="top-left">{{ 'Top Left' | trans }}</option>
                                    <option value="top-right">{{ 'Top Right' | trans }}</option>
                                    <option value="center-left">{{ 'Center Left' | trans }}</option>
                                    <option value="center-right">{{ 'Center Right' | trans }}</option>
                                    <option value="bottom-left">{{ 'Bottom Left' | trans }}</option>
                                    <option value="bottom-right">{{ 'Bottom Right' | trans }}</option>
                                </select>
                                <select v-model="node.theme.fixed.position_modifier">
                                    <option value="">{{ 'None' | trans }}</option>
                                    <option value="small">{{ 'Small' | trans }}</option>
                                    <option value="medium">{{ 'Medium' | trans }}</option>
                                </select>
                            </p>
                        </div>
                    </div>
                </li> -->

            </ul>
        </div>
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

        data: function () {
            return {
                activeSection: {
                    top: 'a',
                    bottom: 'a'
                },
                layout: null
            }
        },

        computed: {
            isMenuCenter: function () {
                var isCenter = this.node.theme.navbar.layout.center.indexOf('menu') >= 0;
                if(!isCenter) this.node.theme.navbar.centered_split_menu = false;
                return isCenter;
            }
        },

        created: function () {

            this.layout = _.clone(this.node.theme.navbar.layout);

            this.$asset({
                js: [
                    'app/assets/uikit/js/components/sortable.min.js',
                ]
            });

        },

        ready: function () {

            // this.sortable = {
            //     left: UIkit.sortable($('#sortable-navbar-left'), {group:'navbar'}),
            //     center: UIkit.sortable($('#sortable-navbar-center'), {group:'navbar'}),
            //     right: UIkit.sortable($('#sortable-navbar-right'), {group:'navbar'})
            // };

            // $(this.$el).on('change.uk.sortable', this.updateNavbarLayout);
        },

        methods: {

            isActiveSection: function (type,position) {
                return this.activeSection[type] == position;
            },

            selectSection: function (type,position) {
                this.activeSection[type] = position;
            },

            updateNavbarLayout: function () {
                var vm = this, arr = [];

                _.each(vm.sortable, function (sortable, position) {
                    _.each(sortable.element.children(), function (el) {
                        arr.push($(el).data('child'));
                    });
                    vm.node.theme.navbar.layout[position] = arr.join();
                    arr = [];
                });
            }
        },

        components: {
            'input-section': require('./input-section.vue')
        }

    };

    Vue.component('class-select', require('./class-select.vue'));
    Vue.component('class-checkboxes', require('./class-checkboxes.vue'));
    Vue.component('input-grid', require('./input-grid.vue'));
    Vue.component('input-width', require('./input-width.vue'));
    Vue.component('input-bg', require('./input-bg.vue'));
    //Vue.component('input-inverse', require('./input-inverse.vue'));
    Vue.component('input-heading', require('./input-heading.vue'));
    Vue.component('input-text', require('./input-text.vue'));
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
