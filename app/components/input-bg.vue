<template>
    <div class="uk-form-row">
        <label class="uk-form-label">{{ 'Background' | trans }}</label>
        <div class="uk-form-controls">
            <input-media :value.sync="value.src"></input-media>
            <template v-if="value.src">
                <p class="uk-form-controls-condensed" v-if="color">
                    {{ 'Color' | trans }}
                    <select class="uk-form-small uk-margin-small-left" v-model="value.color">
                        <option value="">{{ 'None' | trans }}</option>
                        <option value="default">{{ 'Default' | trans }}</option>
                        <option value="muted">{{ 'Muted' | trans }}</option>
                        <option value="primary">{{ 'Primary' | trans }}</option>
                        <option value="secondary">{{ 'Secondary' | trans }}</option>
                    </select>
                </p>
                <p class="uk-form-controls-condensed">
                    {{ 'Size' | trans }}
                    <select class="uk-form-small uk-margin-small-left" v-model="value.size">
                        <option value="">{{ '- Select -' | trans }}</option>
                        <option value="cover">{{ 'Cover' | trans }}</option>
                        <option value="contain">{{ 'Contain' | trans }}</option>
                    </select>
                </p>
                <p class="uk-form-controls-condensed">
                    {{ 'Show background image only on screens large than' | trans }}
                    <select class="uk-form-small uk-margin-small-left" v-model="value.responsive">
                        <option value="">{{ '- Select -' | trans }}</option>
                        <option value="@s">{{ '640px' | trans }}</option>
                        <option value="@m">{{ '960px' | trans }}</option>
                        <option value="@l">{{ '1200px' | trans }}</option>
                        <option value="@xl">{{ '1600px' | trans }}</option>
                    </select>
                </p>
                <p class="uk-form-controls-condensed">
                    {{ 'Position' | trans }}
                    <select class="uk-form-small uk-margin-small-left uk-margin-large-right" v-model="value.position">
                        <option value="">{{ '- Select -' | trans }}</option>
                        <option value="top-left">{{ 'Top Left' | trans }}</option>
                        <option value="top-center">{{ 'Top Center' | trans }}</option>
                        <option value="top-right">{{ 'Top Right' | trans }}</option>
                        <option value="center-left">{{ 'Center Left' | trans }}</option>
                        <option value="center-center">{{ 'Center' | trans }}</option>
                        <option value="center-right">{{ 'Center Right' | trans }}</option>
                        <option value="bottom-left">{{ 'Bottom Left' | trans }}</option>
                        <option value="bottom-center">{{ 'Bottom Center' | trans }}</option>
                        <option value="bottom-right">{{ 'Bottom Right' | trans }}</option>
                        <option value="cover">{{ 'Cover' | trans }}</option>
                    </select>
                    <input type="checkbox" v-model="value.fixed" value="fixed"><label> {{ 'Fixed' | trans }}</label>
                    <input class="uk-margin-left" type="checkbox" v-model="value.norepeat" value="norepeat"><label> {{ 'Norepeat' | trans }}</label>
                </p>
                <p class="uk-form-controls-condensed">
                    {{ 'Blend mode' | trans }}
                    <select class="uk-form-small uk-margin-small-left" v-model="value.blend">
                        <option value="">{{ '- Select -' | trans }}</option>
                        <option value="multiply">{{ 'Mulitply' | trans }}</option>
                        <option value="screen">{{ 'Screen' | trans }}</option>
                        <option value="overlay">{{ 'Overlay' | trans }}</option>
                        <option value="darken">{{ 'Darken' | trans }}</option>
                        <option value="lighten">{{ 'Lighten' | trans }}</option>
                        <option value="color-dodge">{{ 'Color dodge' | trans }}</option>
                        <option value="color-burn">{{ 'Color burn' | trans }}</option>
                        <option value="hard-light">{{ 'Hard light' | trans }}</option>
                        <option value="soft-light">{{ 'Soft light' | trans }}</option>
                        <option value="difference">{{ 'Difference' | trans }}</option>
                        <option value="exclusion">{{ 'Exclusion' | trans }}</option>
                        <option value="hue">{{ 'Hue' | trans }}</option>
                        <option value="saturation">{{ 'Saturation' | trans }}</option>
                        <option value="color">{{ 'Color' | trans }}</option>
                        <option value="luminosity">{{ 'Luminosity' | trans }}</option>
                    </select>
                </p>
            </template>
        </div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            value: Object,
            color: {
                type: Boolean,
                default: true
            }
        }
    }
</script>