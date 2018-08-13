<template>

    <div>
        <input-uk-image :source.sync="src"></input-uk-image>
        <template v-if="src">
            <p class="uk-form-controls-condensed" v-if="color">
                {{ 'Color' | trans }}
                <select-class class="uk-form-small uk-margin-small-left" :classes.sync="classes" :options="colors" prefix="uk-background-"></select-class>
            </p>
            <p class="uk-form-controls-condensed">
                {{ 'Size' | trans }}
                <select-class class="uk-form-small uk-margin-small-left" :classes.sync="classes" :options="sizes" prefix="uk-background-"></select-class>
            </p>
            <p class="uk-form-controls-condensed">
                {{ 'Show background image only on screens large than' | trans }}
                <select-class class="uk-form-small uk-margin-small-left" :classes.sync="classes" :options="breakpoints" prefix="uk-background-image@"></select-class>
            </p>
            <p class="uk-form-controls-condensed">
                {{ 'Position' | trans }}
                <select-class class="uk-form-small uk-margin-small-left uk-margin-large-right" :classes.sync="classes" :options="positions" prefix="uk-position-"></select-class>
                <!-- <class-checkboxes :classes.sync="classes" :checkboxes="checkboxes"></class-checkboxes> -->
            </p>
            <p class="uk-form-controls-condensed">
                {{ 'Blend mode' | trans }}
                <select-class class="uk-form-small uk-margin-small-left" :classes.sync="classes" :options="blendModes" prefix="uk-background-blend-" :unselected="{index: 0, label: 'None'}"></select-class>
            </p>
            <p class="uk-form-controls-condensed">
                {{ 'Norepeat' | trans }}
                <checkbox-class :classes.sync="classes" value="uk-background-norepeat"></checkbox-class>
                {{ 'Fixex' | trans }}
                <checkbox-class :classes.sync="classes" value="uk-background-fixed"></checkbox-class>
            </p>
        </template>
    </div>

</template>

<script>

    module.exports = {

        props: {
            classes: {
                type: String,
                required: true
            },
            src: {
                type: String,
                required: true,
            },
            color: {
                type: Boolean,
                default: true
            }
        },

        data: () => ({
            colors: {
                default: 'Default',
                muted: 'Muted',
                primary: 'Primary',
                secondary: 'Secondary'
            },
            sizes: {
                cover: 'Cover',
                contain: 'Contain'
            }
        }),

        mixins: [
            require('../mixins/positions.js'),
            require('../mixins/blendModes.js'),
            require('../mixins/breakPoints.js'),
        ]
    }

</script>