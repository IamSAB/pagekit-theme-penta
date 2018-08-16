<template>
    <select v-model="model" :class="class">
        <template v-for="(value,label) in options">
            <option v-if="unselected.index == $index" value="">{{ unselected.label }}</option>
            <option :value="getValue(value)">{{ label }}</option>
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
            suffix: {
                type: String,
                default: ''
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
            _.forOwn(this.options, (label,key) => {
                if (this.classes.includes(this.getValue(key))) {
                    this.model = this.getValue(key);
                    return false;
                }
            });
            this.$watch('model', function (value,old) {
                if (old.length && this.classes.includes(old)) {
                    this.classes = this.classes.split(old).join(value);
                }
                else {
                    this.classes += (' '+value);
                }
            });
        },

        methods: {

            getValue (value) {
                return this.prefix + _.kebabCase(value) + this.suffix;
            }

        }
    }

</script>