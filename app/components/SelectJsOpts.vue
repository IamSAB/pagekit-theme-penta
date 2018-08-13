<template>
    <select v-model="model" :class="class">
        <template v-for="(value,label) in options">
            <option v-if="unselected.index == $index" value="">{{ unselected.label }}</option>
            <option :value="value">{{ label }}</option>
        </template>
    </select>
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
            options: {
                type: Object,
                required: true
            },
            class: {
                type: String,
                default: ''
            },
            unselected: {
                type: Object,
                default: () => ({index: 0, label: '- Select -'})
            }
        },

        data: () => ({
            model: ''
        }),

        created () {
            var regex = new RegExp('(?<='+this.key+':).*?(?=;)');
            _.forOwn(this.options, (label,value) => {
                var match = this.value.match(regex);
                if (match) {
                    this.model = match;
                    return false;
                }
            });
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

    Vue.component('SelectJsOpts', module.exports);

</script>