<template>
    <div>
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Source' | trans }}</label>
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
                <input-media :value.sync="node.theme.hero.img" type="image"></input-media>
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
                <class-select class="uk-form-small uk-margin-small-left" :classes="node.theme.hero.classes" :options="blendModes" prefix="uk-blend-" :unselected="{index: 0, label: 'None'}"></class-select>
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
                    <class-select class="uk-margin-right" :classes.sync="node.theme.hero.classes" :options="positions" prefix="uk-position-"></class-select>
                    {{ 'Size' | trans }}
                    <class-select class="uk-margin-small-left uk-form-small" :classes="node.theme.hero.classes" :options="sizes" prefix="uk-position-" :unselected="{index: 1, label: 'Default'}"></class-select>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    module.exports = {

        props: {
            node: {
                type: Object,
                required: true
            }
        },

        data: function () {
            return {
                sizes: {
                    small: 'Small',
                    medium: 'Medium',
                },
                autoplay: {
                    true: 'Enable',
                    false: 'None',
                    inview: 'Enters view'
                }
            }
        },

        mixins: [
            require('../mixins/positions.js'),
            require('../mixins/blend-modes.js'),
        ]
    }

</script>
