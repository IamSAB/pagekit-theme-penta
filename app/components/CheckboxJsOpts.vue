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
            classes: {
                type: String,
                required: true
            },
            key: {
                type: String,
                required: true
            },
            value: {
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
            var regex = new RegExp('(?<='+this.key+':).*?(?=;)');
            if (this.classes.match(regex)) {
                this.model = true
            }
            this.$watch('model', function (value,old) {
                if (value) {
                    this.classes += (this.key+':'+value+';')
                }
                else if (old && this.classes.match(regex)) { //remove
                    this.classes = this.classes.replace(regex,'');
                }
            });
        }
    }

    Vue.component('CheckboxJsOpts', module.exports);

</script>