<template>

    <div class="uk-margin-bottom">

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Style' | trans }}</label>
            <div class="uk-form-controls">
                <select-class class="uk-margin-right" :classes.sync="setting.classes" :options="styles" prefix="uk-section-"></select-class>
                {{ 'Preserve color' | trans }} <checkbox-class :classes.sync="setting.classes" value="uk-preserve-color"></checkbox-class>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Size' | trans }}</label>
            <div class="uk-form-controls">
                <select-class :classes.sync="setting.classes" :options="sizes" prefix="uk-section-" :unselected="{index: 2, label: 'Default'}"></select-class>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Background' | trans }}</label>
            <div class="uk-form-controls">
                <input-background :classes.sync="setting.bgClasses" :src.sync="setting.bgSrc" :color="false"></input-background>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Inverse' | trans }}</label>
            <div class="uk-form-controls">
                <select-class :classes.sync="setting.classes" :options="inverse" :unselected="{index: 0, label: 'Default'}"></select-class>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Container size' | trans }}</label>
            <div class="uk-form-controls">
                <select-class :classes.sync="setting.classes" :options="containerSizes" prefix="uk-container-" :unselected="{index: 1, label: 'Default'}"></select-class>
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
            styles: {
                default: 'Default',
                muted: 'Muted',
                primary: 'Primary',
                secondary: 'Secondary'
            },
            sizes: {
                xsmall: 'X Small',
                small: 'Small',
                large: 'Large',
                xlarge: 'X Large'
            },
            containerSizes: {
                small: 'Small',
                large: 'Large',
                expand: 'Expand'
            },
            inverse: {
                ukDark: 'Dark',
                ukLight: 'Light'
            }
        })
    }

</script>