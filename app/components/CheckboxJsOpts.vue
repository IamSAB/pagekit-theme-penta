<template>
    <input type="checkbox" v-model="model">
</template>

<script>

    /**
        TODO: adapt component to use v-model instead of sync properties
        - Bind the value attribute to a value prop
        - On input, emit its own custom input event with the new value e.g. $emit('input', $event.target.value)
     */

    module.exports = {

        props: {
            jsOpts: {
                type: String,
                required: true
            },
            key: {
                type: String,
                required: true
            },
            class: {
                type: String,
                default: ''
            },
        },

        data: () => ({
            model: false
        }),

        created () {
            let regex = new RegExp('(?<='+this.key+':).*?(?=;)'),
                match = this.jsOpts.match(regex);
            if (match) {
                this.model = true
            }
            this.$watch('model', function (value,old) {
                if (value) {
                    this.jsOpts += (this.key+':'+value+';')
                }
                else if (old && this.jsOpts.match(regex)) { //remove
                    this.jsOpts = this.jsOpts.replace(regex,'');
                }
            });
        }
    }

    Vue.component('CheckboxJsOpts', module.exports);

</script>