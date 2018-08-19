<template>
    <div>
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Layout' | trans }}</label>
            <div class="uk-form-controls">
                <select v-model="setting.layout">
                    <option value="hidden">{{ 'Hidden' | trans }}</option>
                    <option value="horizontal-left">{{ 'Horizontal left' | trans }}</option>
                    <option value="horizontal-center">{{ 'Horizontal center' | trans }}</option>
                    <option value="horizontal-right">{{ 'Horizontal right' | trans }}</option>
                    <option value="stacked-center-split">{{ 'Stacked center split' | trans }}</option>
                    <option value="stacked-left">{{ 'Stacked center' | trans }}</option>
                    <option value="stacked-left">{{ 'Stacked left' | trans }}</option>
                    <option value="modal">{{ 'Modal' | trans }}</option>
                    <option value="offcanvas">{{ 'Offcanvas' | trans }}</option>
                </select>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Options' | trans }}</label>
            <div class="uk-form-controls">
                <label>
                    <input type="checkbox" v-model="setting.transparent">
                    {{ 'Transparent' }}
                </label>
            </div>
        </div>

    </div>
</template>

<script>

    module.exports = {

        path: 'Head.Navbar',

        props: {
            setting: {
                type: Object,
                required: true
            }
        }
    }

</script>
