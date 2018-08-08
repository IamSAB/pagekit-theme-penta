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

        label: 'Top',

        data: function () {
            return {
                active: 'top_a',
                sections: {
                    top_a: 'Top A',
                    top_b: 'Top B',
                    top_c: 'Top C',
                    top_d: 'Top D',
                }
            }
        },

        methods: {
            switch: function (name) {
                this.active = name;
            }
        },

        components: {
            top_a: require('./section.vue'),
            top_b: require('./section.vue'),
            top_c: require('./section.vue'),
            top_d: require('./section.vue')
        }
    }
</script>
