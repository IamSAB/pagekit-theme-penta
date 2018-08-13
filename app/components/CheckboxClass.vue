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
            value: {
                type: String,
                required: true
            }
        },

        data: () => ({
            model: ''
        }),

        created () {
            _.forOwn(this.options, (label,key) => {
                if (this.classes.includes(this.getValue(key))) {
                    this.model = this.getValue(key);
                    return false;
                }
            });
            this.$watch('model', function (checked,old) {
                if (checked) {
                    this.classes += ' '+this.value;
                }
                else if (_.includes(this.classes, this.value) && old) {
                    this.classes = this.classes.replace(this.value, '');
                }
            });
        }
    }

    Vue.component('CheckboxClass', module.exports);

</script>