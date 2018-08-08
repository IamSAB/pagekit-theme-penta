<template>
    <div>
        <switcher @switch="switch" class="uk-subnav uk-subnav-line" :sections="sections" :active="active"></switcher>
        <component :is="active" :section.sync="node.theme[active]"></component>
    </div>
</template>

<script>
    module.exports = {

        props: {
            node: Object
        },

        label: 'Bottom',

        data: function () {
            return {
                active: 'bottom_a',
                sections: {
                    bottom_a: 'Bottom A',
                    bottom_b: 'Bottom B',
                    bottom_c: 'Bottom C',
                    bottom_d: 'Bottom D',
                }
            }
        },

        methods: {
            switch: function (name) {
                this.active = name;
            }
        },

        components: {
            bottom_a: require('./section.vue'),
            bottom_b: require('./section.vue'),
            bottom_c: require('./section.vue'),
            bottom_d: require('./section.vue')
        }
    }
</script>
