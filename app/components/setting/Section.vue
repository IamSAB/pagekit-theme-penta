<template>

    <div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Style' | trans }}</label>
            <div class="uk-form-controls">
                <select-class class="uk-margin-right"
                    :classes.sync="setting.classes"
                    :options="styles"
                    prefix="uk-section-"
                    :unselected="{index: 0, label: 'None'}">
                </select-class>
                <label>
                    {{ 'Preserve color' | trans }}
                    <checkbox-class
                        :classes.sync="setting.classes"
                        value="uk-preserve-color">
                    </checkbox-class>
                </label>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Size' | trans }}</label>
            <div class="uk-form-controls">
                <select-class
                    :classes.sync="setting.classes"
                    :options="sizes"
                    prefix="uk-section-"
                    :unselected="{index: 2, label: 'Default'}">
                </select-class>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Type' | trans }}</label>
            <div class="uk-form-controls">
                <label>
                    <input type="checkbox" v-model="cover">
                    {{'Use cover component and render section on top of it.'}}
                </label>
            </div>
        </div>

        <input-cover
            v-if="cover"
            :src.sync="setting.src"
            :type.sync="setting.cover">
        </input-cover>

        <input-background
            v-else
            :src.sync="setting.src"
            :classes.sync="setting.classes">
        </input-background>

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
                <select v-model="setting.container">
                    <option value="uk-container-xsmall">{{ 'XSmall'}}</option>
                    <option value="uk-container-small">{{ 'Small'}}</option>
                    <option value="">{{ 'Default'}}</option>
                    <option value="uk-container-large">{{ 'Large'}}</option>
                    <option value="uk-container-expand">{{ 'Expand'}}</option>
                </select>
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

    import InputCover from "../InputCover.vue";
    import InputBackground from "../InputBackground.vue";

    module.exports = {

        props: {
            setting: {
                type: Object,
                required: true
            }
        },

        watch: {
            cover (value, old) {
                if (value) { // cover enabled
                    this.setting.classes = this.setting.classes.replace(new RegExp('uk-background-[^ ]*( |$)','g'),'');
                }
                else { // cover disabled
                    this.setting.cover = ''
                }
            }
        },

        data: () => ({
            cover: false,
            styles: {
                default: 'Default',
                muted: 'Muted',
                primary: 'Primary',
                secondary: 'Secondary'
            },
            sizes: {
                xsmall: 'XSmall',
                small: 'Small',
                large: 'Large',
                xlarge: 'XLarge'
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

        components: {
            InputCover,
            InputBackground
        }
    }

</script>