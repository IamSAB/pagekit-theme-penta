<template>

    <div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Style' | trans }}</label>
            <div class="uk-form-controls">
                <select-class class="uk-margin-right"
                    :classes.sync="setting.classes"
                    :options="styles"
                    prefix="uk-section-">
                </select-class>
                {{ 'Preserve color' | trans }}
                <checkbox-class
                    :classes.sync="setting.classes"
                    value="uk-preserve-color">
                </checkbox-class>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Size' | trans }}</label>
            <div class="uk-form-controls">
                <select-class
                    :classes.sync="setting.classes"
                    :options="sizes" prefix="uk-section-"
                    :unselected="{index: 2, label: 'Default'}">
                </select-class>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Background type' | trans }}</label>
            <div class="uk-form-controls">
                <select v-model="setting.type">
                    <option value="bg">{{ 'Image' | trans }}</option>
                    <option value="cover">{{ 'Cover' | trans }}</option>
                    <option value="video">{{ 'Video' | trans }}</option>
                    <option value="iframe">{{ 'iFrame' | trans }}</option>
                </select>
            </div>
        </div>

        <div v-if="isType('bg') || isType('cover')" class="uk-form-row">
            <label class="uk-form-label">{{ 'Image' | trans }}</label>
            <div class="uk-form-controls">
                <input-image
                    :source.sync="setting.src">
                </input-image>
            </div>
        </div>

        <div class="uk-form-row" v-if="isType('video')">
            <label for="form-hero-video" class="uk-form-label">{{ 'Video' | trans }}</label>
            <div class="uk-form-controls">
                <input-video
                    :video.sync="setting.src">
                </input-video>
            </div>
        </div>

        <div class="uk-form-row" v-show="isType('iframe')">
            <label for="form-hero-iframe" class="uk-form-label">{{ 'iFrame' | trans }}</label>
            <div class="uk-form-controls">
                <input class="uk-form-width-large" type="url" v-model="setting.src">
            </div>
        </div>

        <div class="uk-form-row" v-if="!isType('bg')">
            <label class="uk-form-label">{{ 'Blend mode' | trans }}</label>
            <div class="uk-form-controls">
                <select-class
                    :classes.sync="setting.classes"
                    :options="blendModes"
                    prefix="uk-blend-"
                    :unselected="{index: 0, label: 'None'}">
                </select-class>
            </div>
        </div>

        <template v-if="isType('bg')">
            <div class="uk-form-row">
                <label class="uk-form-label">{{ 'BG size' | trans }}</label>
                <div class="uk-form-controls">
                    <select-class
                        :classes.sync="setting.classes"
                        :options="{cover: 'Cover', contain: 'Contain'}"
                        prefix="uk-background-"
                        :unselected="{index: 0, label: 'None'}">
                    </select-class>
                </div>
            </div>
            <div class="uk-form-row">
                <label class="uk-form-label">{{ 'BG responsive' | trans }}</label>
                <div class="uk-form-controls">
                    {{ 'Show background image only on screens larger than' | trans }}
                    <select-class
                        :classes.sync="setting.classes"
                        :options="{s: 'Small', m: 'Medium', l: 'Large', xl: 'X Large'}"
                        prefix="uk-background-image@"
                        :unselected="{index: 0, label: 'None'}">
                    </select-class>
                </div>
            </div>
            <div class="uk-form-row">
                <label class="uk-form-label">{{ 'BG position' | trans }}</label>
                <div class="uk-form-controls">
                    <select-class
                        :classes.sync="setting.classes"
                        :options="positions"
                        prefix="uk-background-blend-"
                        :unselected="{index: 0, label: 'None'}">
                    </select-class>
                </div>
            </div>
            <div class="uk-form-row">
                <label class="uk-form-label">{{ 'BG blend mode' | trans }}</label>
                <div class="uk-form-controls">
                    <select-class
                        :classes.sync="setting.classes"
                        :options="blendModes"
                        prefix="uk-background-blend-"
                        :unselected="{index: 0, label: 'None'}">
                    </select-class>
                </div>
            </div>
            <div class="uk-form-row">
                <label class="uk-form-label">{{ 'BG options' | trans }}</label>
                <div class="uk-form-controls">
                    {{ 'Norepeat' | trans }}
                    <checkbox-class
                        :classes.sync="setting.classes"
                        value="uk-background-norepeat">
                    </checkbox-class>
                    {{ 'Fixed' | trans }}
                    <checkbox-class
                        :classes.sync="setting.classes"
                        value="uk-background-fixed">
                    </checkbox-class>
                </div>
            </div>
        </template>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Inverse' | trans }}</label>
            <div class="uk-form-controls">
                <select-class
                    :classes.sync="setting.classes"
                    :options="inverse"
                    :unselected="{index: 0, label: 'Default'}">
                </select-class>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Container size' | trans }}</label>
            <div class="uk-form-controls">
                <select-class
                    :classes.sync="setting.classes"
                    :options="containerSizes"
                    prefix="uk-container-"
                    :unselected="{index: 1, label: 'Default'}">
                </select-class>
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

        watch: {
            'setting.type': function (value, old) {
                if (value == 'bg' || old == 'bg') {
                    this.setting.src = '';
                }
                if (old == 'bg') {
                    this.classes = this.classes.replace(new RegExp('uk-background-.*? ','g'),'');
                }
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
                cover: 'Cover'
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
        }),

        methods: {

            isType(type) {
                return this.setting.type == type;
            }

        }
    }

</script>