<template>
    <div class="uk-form-row">
        <label class="uk-form-label">{{ 'Background' | trans }}</label>
        <div class="uk-form-controls">
            <input-media :value.sync="src"></input-media>
            <template v-if="src">
                <p class="uk-form-controls-condensed" v-if="color">
                    {{ 'Color' | trans }}
                    <class-select class="uk-form-small uk-margin-small-left" :classes.sync="classes" :options="colors" prefix="uk-background-"></class-select>
                </p>
                <p class="uk-form-controls-condensed">
                    {{ 'Size' | trans }}
                    <class-select class="uk-form-small uk-margin-small-left" :classes.sync="classes" :options="sizes" prefix="uk-background-"></class-select>
                </p>
                <p class="uk-form-controls-condensed">
                    {{ 'Show background image only on screens large than' | trans }}
                    <class-select class="uk-form-small uk-margin-small-left" :classes.sync="classes" :options="breakpoints" prefix="uk-background-image@"></class-select>
                </p>
                <p class="uk-form-controls-condensed">
                    {{ 'Position' | trans }}
                    <class-select class="uk-form-small uk-margin-small-left uk-margin-large-right" :classes.sync="classes" :options="positions" prefix="uk-position-"></class-select>
                    <class-checkboxes :classes.sync="classes" :checkboxes="checkboxes"></class-checkboxes>
                </p>
                <p class="uk-form-controls-condensed">
                    {{ 'Blend mode' | trans }}
                    <class-select class="uk-form-small uk-margin-small-left" :classes.sync="classes" :options="blendModes" prefix="uk-background-blend-" :unselected="{index: 0, label: 'None'}"></class-select>
                </p>
            </template>
        </div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            classes: String,
            src: String,
            color: {
                type: Boolean,
                default: true
            }
        },

        data: function() {
            return {
                checkboxes: {
                    ukBackgroundNoRepeat: 'No repeat',
                    ukBackgroundFixed: 'Fixed'
                },
                colors: {
                    default: 'Default',
                    muted: 'Muted',
                    primary: 'Primary',
                    secondary: 'Secondary'
                },
                sizes: {
                    cover: 'Cover',
                    contain: 'Contain'
                },
                breakpoints: {
                    s: 'Mobil (>640px)',
                    m: 'Tablet (>960px)',
                    l: 'Laptop (>1200px)',
                    xl: 'Desktop (>1600px)'
                },
                positions: {
                    topLeft: 'Top Left',
                    topCenter: 'Top Center',
                    topRight: 'Top Right',
                    centerLeft: 'Center Left',
                    centerCenter: 'Center',
                    centerRight: 'Center Right',
                    bottomLeft: 'Bottom Left',
                    bottomCenter: 'Bottom Center',
                    bottomRight: 'Bottom Right',
                    cover: 'Cover'
                },
                blendModes: {
                    multiply: 'Multiply',
                    screen: 'Screen',
                    overlay: 'Overlay',
                    darken: 'Darken',
                    lighten: 'Lighten',
                    colorDodge: 'Color dodge',
                    colorBurn: 'Color burn',
                    hardLight: 'Hard light',
                    softLight: 'Soft light',
                    difference: 'Difference',
                    exclusion: 'Exclusion',
                    hue: 'Hue',
                    saturation: 'Saturation',
                    color: 'Color',
                    luminosity: 'Luminosity'
                }
            }
        }
    }
</script>