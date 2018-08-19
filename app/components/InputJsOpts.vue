<template>
    <input v-model="model" v-bind="attrs" lazy>
</template>

<script>

    /**
        TODO: adapt component to use v-model instead of sync properties
        - Bind the value attribute to a value prop
        - On input, emit its own custom input event with the new value e.g. $emit('input', $event.target.value)
     */

    module.exports = {

        props: {
            value: {
                type: String,
                required: true
            },
            key: {
                type: String,
                required: true
            },
            attrs: {
                type: Object,
                default: {}
            }
        },

        data: () => ({
            model: ''
        }),

        created () {
            let regex = new RegExp('(?<='+this.key+':).*?(?=;)');
            if (this.value.match(regex)) {
                this.model = match;
                return false;
            }
            this.$watch('model', function (value,old) {
                console.log(value); console.log(old);
                if (value) {
                    if (old) { //update
                        this.value = this.value.replace(regex,value);
                    }
                    else { //add
                        this.value += (this.key+':'+value+';')
                    }
                }
                else { //remove
                    this.value = this.value.replace(new RegExp(this.key+':(.*?);'),'');
                }
            });
        }
    }

</script>