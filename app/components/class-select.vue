<template>
    <select v-model="model" :class="class">
        <template v-for="(value,label) in options">
            <option v-if="unselected.index == $index" value="">{{ unselected.label }}</option>
            <option :value="getValue(value)">{{ label }}</option>
        </template>
    </select>
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
                default: function () {
                    return {index: 0, label: '- Select -'};
                }
            }
        },

        data: function () {
            return {
                model: ''
            }
        },

        created: function () {
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

            getValue: function (value) {
                return this.prefix + _.kebabCase(value) + this.suffix;
            }
        }
    }
</script>