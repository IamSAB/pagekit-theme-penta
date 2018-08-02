<template>

    <div class="uk-form-row">
        <label class="uk-form-label">{{ 'Text color' | trans }}</label>
        <div class="uk-form-controls">
            <p class="uk-form-controls-condensed">
                <select v-model="value">
                    <option value="">{{ 'Auto' | trans }}</option>
                    <option value="uk-dark">{{ 'Dark' | trans }}</option>
                    <option value="uk-light">{{ 'Light' | trans }}</option>
                </select> 
            </p>
        </div>
    </div>

</template>

<script>
    module.exports = {
        props: ['value']
    }
</script>

