<template>
    <div>
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Heading' | trans }}</label>
            <div class="uk-form-controls">
                <select v-model="setting.heading">
                        <option value="">{{ 'Default' | trans }}</option>
                        <option v-for="(value, label) in headings" :key="value" :value="value">{{ label }}</option>
                </select>
            </div>
        </div>
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Text align' | trans }}</label>
            <div class="uk-form-controls">
                <select-class-responsive
                    :classes.sync="setting.classes"
                    :options="textAlignment"
                    prefix="uk-text-">
                </select-class-responsive>
            </div>
        </div>
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Options' | trans }}</label>
            <div class="uk-form-controls">
                {{ 'Dropcap' | trans }}
                <checkbox-class
                    :classes="setting.classes"
                    value="uk-dropcap">
                </checkbox-class>
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

        path: 'Main.Content',

        data: () => ({
            headings: {
                primary: 'Primary',
                hero: 'Hero',
                divider: 'Divider',
                bullet: 'Bullet',
                line: 'Line',
            },
            textAlignment: {
                left: 'Left',
                right: 'Right',
                center: 'Center',
                justify: 'Justify'
            }
        })

    }

</script>
