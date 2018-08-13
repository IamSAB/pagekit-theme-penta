<template>

    <div>
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Source' | trans }}</label>
            <div class="uk-form-controls">
                <select v-model="setting.type">
                    <option value="img">{{ 'Image' | trans }}</option>
                    <option value="video">{{ 'Video' | trans }}</option>
                    <option value="iframe">{{ 'iFrame' | trans }}</option>
                </select>
            </div>
        </div>
        <div class="uk-form-row" v-if="setting.type == 'img'">
            <label for="form-hero-img" class="uk-form-label">{{ 'Image' | trans }}</label>
            <div class="uk-form-controls">
                <input-uk-image :value.sync="setting.img" type="image"></input-uk-image>
            </div>
        </div>
        <div class="uk-form-row" v-if="setting.type == 'video'">
            <label for="form-hero-video" class="uk-form-label">{{ 'Video' | trans }}</label>
            <div class="uk-form-controls">
                <input-uk-video :video.sync="setting.video"></input-uk-video>
            </div>
        </div>
        <div class="uk-form-row" v-if="setting.type == 'iframe'">
            <label for="form-hero-iframe" class="uk-form-label">{{ 'iFrame' | trans }}</label>
            <div class="uk-form-controls">
                <input class="uk-form-width-large" type="url" v-model="setting.iframe">
            </div>
        </div>
        <div class="uk-form-row" v-if="setting.type == 'img' || setting.type == 'video'">
            <label for="form-hero-iframe" class="uk-form-label">{{ 'Blend mode' | trans }}</label>
            <div class="uk-form-controls">
                <select-class class="uk-form-small uk-margin-small-left" :classes="setting.classes" :options="blendModes" prefix="uk-blend-" :unselected="{index: 0, label: 'None'}"></select-class>
            </div>
        </div>
        <div class="uk-form-row">
            <label for="form-hero-height" class="uk-form-label">{{ 'Height' | trans }}</label>
            <div class="uk-form-controls">
                <select  v-model="setting.height">
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
                    <select-class class="uk-margin-right" :classes.sync="setting.classes" :options="positions" prefix="uk-position-"></select-class>
                    {{ 'Size' | trans }}
                    <select-class class="uk-margin-small-left uk-form-small" :classes="setting.classes" :options="sizes" prefix="uk-position-" :unselected="{index: 1, label: 'Default'}"></select-class>
                </p>
            </div>
        </div>
    </div>

</template>

<script>

    module.exports = {

        props: {
            setting: {
                type: Object,
                required: true
            }
        },

        setting: {
            title: 'Hero',
            tags: ['Head','Position'],
            path: 'Head.Hero'
        },

        data: () => ({
            sizes: {
                small: 'Small',
                medium: 'Medium',
            },
            autoplay: {
                true: 'Enable',
                false: 'None',
                inview: 'Enters view'
            }
        }),

        mixins: [
            require('../../mixins/positions.js'),
            require('../../mixins/blendModes.js'),
        ]
    }

</script>
