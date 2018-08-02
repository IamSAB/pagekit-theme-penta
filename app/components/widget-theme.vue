<template>

    <div class="uk-form-horizontal">

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Style' | trans }}</label>
            <div class="uk-form-controls">
                <p class="uk-form-controls-condensed">
                    <select v-model="widget.theme.style">
                        <option value="">{{ 'None' | trans }}</option>
                        <option value="uk-card-default">{{ 'Default' | trans }}</option>
                        <option value="uk-card-primary">{{ 'Primary' | trans }}</option>
                        <option value="uk-card-secondary">{{ 'Secondary' | trans }}</option>
                        <option value="uk-overlay-default">{{ 'Overlay light' | trans }}</option>
                        <option value="uk-overlay-primary">{{ 'Overlay dark' | trans }}</option>
                    </select>
                </p>
                <p class="uk-form-controls-condensed">
                    <label><input type="checkbox" v-model="widget.theme.hover"> {{ 'Enable hover effect' | trans }}</label>
                </p>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Size' | trans }}</label>
            <div class="uk-form-controls">
                <p class="uk-form-controls-condensed">
                    <select v-model="widget.theme.size">
                        <option value="small">{{ 'Small' | trans }}</option>
                        <option value="">{{ 'Default' | trans }}</option>
                        <option value="large">{{ 'Large' | trans }}</option>
                    </select>
                </p>
            </div>
        </div>

        <input-heading :value.sync="widget.theme.heading"></input-heading>

        <input-text :value.sync="widget.theme.alignment"></input-text>

        <div class="uk-form-row">
            <label for="form-theme-media" class="uk-form-label">{{ 'Width' | trans }}</label>
            <div class="uk-form-controls">
                <input-width :value.sync="widget.theme.width" :child="false"></input-width>
            </div>
        </div>

        <input-visibility :value.sync="widget.theme.visibility"></input-visibility>

        <div class="uk-form-row">
            <label for="form-theme-media" class="uk-form-label">{{ 'Media' | trans }}</label>
            <div class="uk-form-controls">
                <input-media :value.sync="widget.theme.media_img"></input-media>
                <p class="uk-form-controls-condensed">
                    {{ 'Position' | trans }}
                    <select class="uk-form-small uk-margin-small-left" v-model="widget.theme.media_pos">
                        <option value="top">{{ 'Top' | trans }}</option>
                        <option value="bottom">{{ 'Bottom' | trans }}</option>
                        <option value="left">{{ 'Left' | trans }}</option>
                        <option value="right">{{ 'Right' | trans }}</option>
                    </select>
                </p>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Badge' | trans }}</label>
            <div class="uk-form-controls uk-form-controls-text">
                <p class="uk-form-controls-condensed">
                    <input type="text" :placeholder="'Text' | trans" v-model="widget.theme.badge_text">
                </P>
                <p class="uk-form-controls-condensed">
                    {{ 'Style' | trans }}
                    <select class="uk-margin-small-left" v-model="widget.theme.badge_style">
                        <option value="">{{ 'Default' | trans }}</option>
                        <option value="success">{{ 'Success' | trans }}</option>
                        <option value="warning">{{ 'Warning' | trans }}</option>
                        <option value="danger">{{ 'Danger' | trans }}</option>
                    </select>
                </P>
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

        props: ['widget', 'config'],

        components: {
            'input-width': require('./input-width.vue'),
            'input-heading': require('./input-heading.vue'),
            'input-text': require('./input-text.vue'),
            'input-visibility': require('./input-visibility.vue')
        }

    };

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

    window.Widgets.components['theme'] = module.exports;

</script>

