<template>

    <div>
        <p class="uk-form-controls-condensed">
            <class-select :classes.sync="classes" :options="widths" :prefix="prefix"></class-select>
            {{ 'On screens larger than' | trans }}
        </p>
        <div class="uk-grid uk-grid-small">
            <div v-for="(suffix,label) in breakpoints" class="uk-flex-item-none">
                <p class="uk-form-controls-condensed">
                    {{ label }}
                    <class-select :classes.sync="classes" :options="widths" :prefix="prefix" :suffix="'@'+suffix"></class-select>
                </p>
            </div>
        </div>
    </div>

</template>

<script>

    module.exports =  {

        props: {
            classes: String,
            childWidth: {
                type: Boolean,
                default: false
            }
        },

        data: function () {
            return {
                prefix: 'uk-width-',
                widths: {
                    auto: 'Auto',
                    expand: 'Expand',
                    '1-1': '1/1 100%',
                    '5-6':'5/6 83%',
                    '4-5':'4/5 80%',
                    '3-4':'3/4 75%',
                    '2-3':'2/3 66%',
                    '3-5':'3/5 60%',
                    '1-2':'1/2 50%',
                    '2-5':'2/5 40%',
                    '1-3':'1/3 33%',
                    '1-4':'1/4 25%',
                    '1-5':'1/5 20%',
                    '1-6':'1/6 17%',
                },
                breakpoints: {
                    s: 'Mobil (>640px)',
                    m: 'Tablet (>960px)',
                    l: 'Laptop (>1200px)',
                    xl: 'Desktop (>1600px)'
                },
            }
        },

        created: function () {
            if(this.childWidth) this.prefix = 'uk-child-width-';
        }
    }

</script>