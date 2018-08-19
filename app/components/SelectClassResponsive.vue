<template>

    <div>
        <div>
            <select-class
                :classes.sync="classes"
                :options="options"
                :prefix="prefix">
            </select-class>
            <span class="uk-margin-left">
                {{ 'Responsive' | trans }}
                <a
                    v-show="responsive == true"
                    @click="responsive = false"
                    class="uk-icon-small uk-icon-hover uk-icon-toggle-on">
                </a>
                <a
                    v-show="responsive == false"
                    @click="responsive = true"
                    class="uk-icon-small uk-icon-hover uk-icon-toggle-off">
                </a>
            </span>
        </div>
        <div v-show="responsive" class="uk-grid uk-grid-small" style="margin-top: 10px !important;" data-uk-grid-margin>
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

        watch: {
            responsive (value, old) {
                const regexp = new RegExp(this.prefix+'[^ ]*@(s|l|m|xl)( |$)','g')
                if (!value) { //no responsive
                    this.classes = this.classes.replace(regexp,'')
                }
            }
        },

        data: () => ({
            responsive: false,
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
