<template>

    <div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Grid Width' | trans }}</label>
            <div class="uk-form-controls">
                <select-class :classes.sync="setting.classes" :options="widths" :prefix="'uk-grid-width-'"></select-class>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Grid Responsive Width' | trans }}</label>
            <div class="uk-form-controls uk-grid-uk-grid-small">
                <div v-for="(suffix,label) in breakpoints" :key="label" class="uk-flex-item-none">
                    <p class="uk-form-controls-condensed">
                        {{ label }}
                        <select-class class="uk-form-small" :classes.sync="setting.classes" :options="widths" :prefix="prefix" :suffix="'@'+suffix"></select-class>
                    </p>
                </div>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Gutter' | trans }}</label>
            <div class="uk-form-controls">
                <select-class :classes.sync="setting.classes" :options="gutters" prefix="uk-grid-" :unselected="{index: 1, label: 'Default'}"></select-class>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Options' | trans }}</label>
            <div class="uk-form-controls uk-form-controls-text">
                <p class="uk-form-controls-condensed">
                    <label>{{ 'Use divider' | trans }} <checkbox-class :classes.sync="setting.classes" value="uk-grid-divider"></checkbox-class></label>
                    <label class="uk-margin-small-left">{{ 'Match height' | trans }} <checkbox-class :classes.sync="setting.classes" value="uk-grid-match"></checkbox-class></label>
                </p>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Custom class' | trans }}</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-form-width-large" v-model="setting.custom">
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

        data: () => ({
            gutters: {
                small: 'Small',
                medium: 'Medium',
                large: 'Large',
                collapse: 'Collapse',
            },
        }),

        mixins: [
            require('../../mixins/widths.js'),
            require('../../mixins/breakPoints.js'),
        ]
    }

</script>