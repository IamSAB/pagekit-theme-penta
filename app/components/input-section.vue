<template>

    <div class="uk-margin-bottom">

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Style' | trans }}</label>
            <div class="uk-form-controls">
                <class-select class="uk-margin-right" :classes.sync="section.classes" :options="styles" prefix="uk-section-"></class-select>
                <class-checkboxes :classes.sync="section.classes" :checkboxes="checkboxes"></class-checkboxes>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Size' | trans }}</label>
            <div class="uk-form-controls">
                <class-select :classes.sync="section.classes" :options="sizes" prefix="uk-section-" :unselected="{index: 2, label: 'Default'}"></class-select>
            </div>
        </div>

        <input-bg :classes.sync="section.bgClasses" :src="section.bgSrc" :color="false"></input-bg>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Inverse' | trans }}</label>
            <div class="uk-form-controls">
                <class-select :classes.sync="section.classes" :options="inverse" :unselected="{index: 0, label: 'Default'}"></class-select>
            </div>
        </div>

        <input-grid :classes.sync="section.classes"></input-grid>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Container size' | trans }}</label>
            <div class="uk-form-controls">
                <class-select :classes.sync="section.classes" :options="containerSizes" prefix="uk-container-" :unselected="{index: 1, label: 'Default'}"></class-select>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Custom class' | trans }}</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-form-width-large" v-model="section.custom">
            </div>
        </div>

    </div>
</template>

<script>

    module.exports = {

        props: {
            section: {
                type: Object,
                required: true
            }
        },

        data: function () {
            return {
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
                },
                checkboxes: {
                    ukPreserveColor: 'Preserve color'
                }
            }
        }
    }

</script>