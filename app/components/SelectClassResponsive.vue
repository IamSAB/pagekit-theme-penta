<template>

    <div>
        <div style="margin-bottom: 10px !important;">
            <select-class
                :classes.sync="classes"
                :options="options"
                :prefix="prefix">
            </select-class>
            {{ 'On devices larger than' | trans }}
        </div>
        <div class="uk-grid uk-grid-small" data-uk-grid-margin>
            <div v-for="(key,label) in breakpoints" :key="key">
                <i :class="'uk-icon-'+icons[key]" data-uk-tooltip :title="label"></i>
                <select-class
                    :classes.sync="classes"
                    :options="options"
                    :prefix="prefix"
                    :suffix="'@'+key"
                    class="uk-margin-small-left uk-form-small">
                </select-class>
            </div>
        </div>
    </div>

</template>

<script>
    module.exports = {

        props: {
            classes: {
                type: String,
                required: true
            },
            options: {
                type: Object,
                required: true
            },
            prefix: {
                type: String,
                default: ''
            },
            class: {
                type: String,
                default: ''
            }
        },

        data: () => ({
            icons: {
                s: 'mobile',
                m: 'tablet',
                l: 'laptop',
                xl: 'desktop'
            },
            breakpoints: {
                s: 'Mobil (>640px)',
                m: 'Tablet (>960px)',
                l: 'Laptop (>1200px)',
                xl: 'Desktop (>1600px)'
            }
        })

    }
</script>
