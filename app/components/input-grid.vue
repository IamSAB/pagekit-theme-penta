<template>

    <div class="uk-form-row">
        <label class="uk-form-label">{{ 'Grid' | trans }}</label>
        <div class="uk-form-controls">
            <input-width :classes.sync="classes" :child-width="true"></input-width>
            <p class="uk-margin-top uk-form-controls-condensed uk-form-controls-condensed-text">
                {{ 'Gutter' | trans }}
                <class-select class="uk-form-small uk-margin-small-left uk-margin-large-right" :classes.sync="classes" :options="gutters" prefix="uk-grid-" :unselected="{index: 1, label: 'Default'}"></class-select>
                <class-checkboxes :classes.sync="classes" :checkboxes="checkboxes"></class-checkboxes>
            </p>
        </div>
    </div>

</template>

<script>

    module.exports = {

        props: {
            classes: {
                type: String,
                required: true
            }
        },

        data: function () {
            return {
                gutters: {
                    small: 'Small',
                    medium: 'Medium',
                    large: 'Large',
                    collapse: 'Collapse',
                },
                checkboxes: {
                    ukGridDivider: 'Use divider',
                    ukGridMatch: 'Match height'
                }
            }
        }

    }

</script>
