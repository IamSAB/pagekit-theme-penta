<template>

    <div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Grid Width' | trans }}</label>
            <div class="uk-form-controls uk-grid-uk-grid-small">
                <select-class-responsive
                    class="uk-form-small"
                    :classes.sync="setting.classes"
                    :options="widths"
                    :prefix="prefix">
                </select-class-responsive>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Gutter' | trans }}</label>
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
            <label class="uk-form-label">{{ 'Options' | trans }}</label>
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