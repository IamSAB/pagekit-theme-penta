<template>
    <span>
        <label v-for="(value,label) in checkboxes" :class="$index ? 'uk-margin-small-left':''"><input type="checkbox" v-model="model" :value="kebabCase(value)"> {{ label }}</label>
    </span>
</template>

<script>

    module.exports = {

        props: {
            classes: {
                type: String,
                required: true
            },
            checkboxes: {
                type: Object,
                required: true
            }
        },

        data: function () {
            return {
                model: []
            }
        },

        created: function () {
            _.forOwn(this.checkboxes,(value,key) => {
                key = _.kebabCase(key);
                if (_.includes(this.classes,key)) {
                    this.model.push(key)
                }
            });

            this.$watch('model', function (array,old) {
                var diff;
                if(array.length > old.length) { //checked
                    diff = _.difference(array,old);
                    this.classes += (' '+diff[0]);
                }
                else { //unchecked
                    diff = _.difference(old,array);
                    this.classes = this.classes.split(diff[0]).join('');

                }
            });
        },

        methods: {
            kebabCase: function (value) {
                return _.kebabCase(value);
            }
        }
    }
</script>