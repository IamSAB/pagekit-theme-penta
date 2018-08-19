<template>

    <div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Grid Width' | trans }}</label>
            <div class="uk-form-controls uk-grid-uk-grid-small">
                <select-class-responsive
                    class="uk-form-small"
                    :classes.sync="setting.classes"
                    :options="widths"
                    prefix="uk-grid-width-">
                </select-class-responsive>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Grid Gutter' | trans }}</label>
            <div class="uk-form-controls">
                <select-class
                    :classes.sync="setting.classes"
                    :options="gutters"
                    prefix="uk-grid-"
                    :unselected="{index: 1, label: 'Default'}">
                </select-class>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Grid options' | trans }}</label>
            <div class="uk-form-controls uk-form-controls-text">
                <p class="uk-form-controls-condensed">
                    <label>
                        {{ 'Use divider' | trans }}
                        <checkbox-class
                            :classes.sync="setting.classes"
                            value="uk-grid-divider">
                        </checkbox-class>
                    </label>
                    <label class="uk-margin-small-left">
                        {{ 'Match height' | trans }}
                        <checkbox-class
                            :classes.sync="setting.classes"
                            value="uk-grid-match">
                        </checkbox-class>
                    </label>
                </p>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Horizontal align' | trans }}</label>
            <div class="uk-form-controls">
                <select-class-responsive
                    :classes.sync="setting.classes"
                    :options="horizontalAlign"
                    prefix="uk-flex-">
                </select-class-responsive>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Vertical align' | trans }}</label>
            <div class="uk-form-controls">
                <select-class-responsive
                    :classes.sync="setting.classes"
                    :options="verticalAlign"
                    prefix="uk-flex-">
                </select-class-responsive>
            </div>
        </div>


        <div class="uk-form-row">
            <label for="form-hero-height" class="uk-form-label">{{ 'Fixed height' | trans }}</label>
            <div class="uk-form-controls">
                <select v-model="setting.height">
                    <option value="">{{ 'Disabled' }}</option>
                    <option value="viewport">{{ 'Viewport' | trans }}</option>
                    <option value="uk-height-small">{{ '150px' }}</option>
                    <option value="uk-height-medium">{{ '300px' }}</option>
                    <option value="uk-height-large">{{ '450px' }}</option>
                </select>
                <div v-if="setting.height == 'viewport'" class="uk-grid uk-grid-small uk-margin-small-top" data-uk-grid-margin>
                    <div>
                        {{ 'Offset top' | trans }}
                        <select-js-opts
                            class="uk-form-small"
                            :value.sync="setting.ukHeightViewport"
                            :options="{true: 'True', false: 'False'}"
                            key="offset-top">
                        </select-js-opts>
                    </div>
                    <div>
                        {{ 'Offset bottom' | trans }}
                        <select-js-opts
                            class="uk-form-small"
                            :value.sync="setting.ukHeightViewport"
                            :options="{true: 'True', false: 'False'}"
                            key="offset-bottom">
                        </select-js-opts>
                    </div>
                    <div>
                        {{ 'Expand' | trans }}
                        <select-js-opts
                            class="uk-form-small"
                            :value.sync="setting.ukHeightViewport"
                            :options="{true: 'True', false: 'False'}"
                            key="expand">
                        </select-js-opts>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Render' | trans }}</label>
            <div class="uk-form-controls">
                <label>
                    <input type="checkbox" v-model="setting.renderAlways">
                    {{ 'Render position even if it has not widgets assigned.' | trans }}
                </label>
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
            horizontalAlign: {
                left: 'Left',
                center: 'Center',
                right: 'Right',
                between: 'Between',
                around: 'Around'
            },
            verticalAlign: {
                top: 'Top',
                middle: 'Middle',
                bottom: 'Bottom',
                stretch: 'Stretch'
            }
        }),

        mixins: [
            require('../../mixins/widths.js')
        ]
    }

</script>