<template>

    <div class="uk-form-row">

        <div class="uk-form-row">
            <label for="form-hero-video" class="uk-form-label">{{ 'Background' | trans }}</label>
            <div class="uk-form-controls">
                <a class="uk-form-width-large uk-placeholder uk-text-center uk-display-block uk-margin-remove" v-if="!src" @click.prevent="$refs.modal.open()">
                    <img width="60" height="60" :alt="'Placeholder Image' | trans" :src="$url('app/system/assets/images/placeholder-image.svg')">
                    <p class="uk-text-muted uk-margin-small-top">{{ 'Select Image' | trans }}</p>
                </a>
                <template v-else>
                    <img class="uk-form-width-large" :src="src.indexOf('blob:') !== 0  ? $url(src) : src">
                    <input class="uk-margin-small-top uk-form-width-large" type="text" :value="src" disabled>
                </template>
                <div v-if="src" class="uk-margin-small-top uk-grid uk-grid-small" data-uk-grid-margin>
                    <div>
                        {{ 'Size' | trans }}
                        <select-class
                            class="uk-form-small"
                            :classes.sync="classes"
                            :options="{cover: 'Cover', contain: 'Contain'}"
                            prefix="uk-background-"
                            :unselected="{index: 0, label: 'Default'}">
                        </select-class>
                    </div>
                    <div>
                        {{ 'Blend mode' | trans }}
                        <select-class
                            class="uk-form-small"
                            :classes.sync="classes"
                            :options="blendModes"
                            prefix="uk-background-blend-"
                            :unselected="{index: 0, label: 'None'}">
                        </select-class>
                    </div>
                    <div>
                        {{ 'Position' | trans }}
                        <select-class
                            class="uk-form-small"
                            :classes.sync="classes"
                            :options="positions"
                            prefix="uk-background-"
                            :unselected="{index: 0, label: 'Default'}">
                        </select-class>
                    </div>
                    <div>
                        {{ 'Show attachement on' | trans }}
                        <select-class
                            class="uk-form-small"
                            :classes.sync="classes"
                            :options="{s: 'mobiles', m: 'tablets', l: 'laptobs', xl: 'desktops'}"
                            prefix="uk-background-image@"
                            :unselected="{index: 0, label: 'all devices'}">
                        </select-class>
                    </div>
                    <div>
                        {{ 'Norepeat' | trans }}
                        <checkbox-class
                            :classes.sync="classes"
                            value="uk-background-norepeat">
                        </checkbox-class>
                    </div>
                    <div>
                        {{ 'Fixed attachment' | trans }}
                        <checkbox-class
                            :classes.sync="classes"
                            value="uk-background-fixed">
                        </checkbox-class>
                    </div>
                </div>
            </div>
        </div>

        <v-modal v-ref:modal large>

            <panel-finder :root="pagekit.storage" v-ref:finder :modal="true"></panel-finder>

            <div class="uk-modal-footer uk-text-right">
                <button class="uk-button uk-button-link uk-modal-close" type="button">{{ 'Cancel' | trans }}</button>
                <button class="uk-button uk-button-primary" type="button" :disabled="!selected" @click.prevent="select">{{ 'Select' | trans }}</button>
            </div>

        </v-modal>
    </div>

</template>

<script>

    module.exports = {

        props: {
            classes: {
                type: String,
                default: ''
            },
            src: {
                type: String,
                default: ''
            }
        },

        data: () => ({
            pagekit: $pagekit,
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
            }
        }),

        computed: {

            selected () {
                var selected = this.$refs.finder.getSelected();
                return selected.length === 1 && this.$refs.finder.isImage(selected[0])
            }

        },

        methods: {

            select: function() {
                this.src = this.$refs.finder.getSelected()[0];
                this.$refs.finder.removeSelection();
                this.$refs.modal.close();
            }

        }

    };

</script>
