<template>
    <ul :class="class">
        <li v-for="(name,label) in sections" :class="{ 'uk-active': active === name }">
            <a @click="$dispatch('switch', name)">{{ label }}</a>
        </li>
    </ul>
</template>

<script>
    module.exports = {

        props: {
            sections: {
                type: Object,
                required: true
            },
            active: {
                type: String,
                required: true
            },
            class: String
        }

    }
</script>
