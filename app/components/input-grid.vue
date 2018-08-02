<template>

    <div class="uk-form-row">
        <label class="uk-form-label">{{ title }}</label>
        <div class="uk-form-controls">
            <input-width :value.sync="grid.width" :child="true"></input-width>
            <p class="uk-margin-top uk-form-controls-condensed uk-form-controls-condensed-text">
                {{ 'Gutter' | trans }}
                <select class="uk-form-small uk-margin-small-left uk-margin-large-right" v-model="grid.gutter">
                    <option value="small">{{ 'Small' | trans }}</option>
                    <option value="medium">{{ 'Medium' | trans }}</option>
                    <option value="">{{ 'Default' | trans }}</option>
                    <option value="large">{{ 'Large' | trans }}</option>
                    <option value="collapse">{{ 'Collapse' | trans }}</option>
                </select>
                <input type="checkbox" v-model="grid.divider"><label> {{ 'Use divider' | trans }}</label>
                <input class="uk-margin-left" type="checkbox" v-model="grid.match"><label> {{ 'Match height' | trans }}</label>
            </p>
            <p class="uk-form-controls-condensed uk-form-controls-condensed-text">
                {{ 'Custom class' | trans }} <input class="uk-margin-small-left uk-form-width-large" type="text" v-model="grid.class">
            </p>
        </div>
    </div>

</template>

<script>

    module.exports = {

        props: {
            grid: Object,
            title: {
                type: String,
                default: 'Grid'
            }
        }

    }

</script>
