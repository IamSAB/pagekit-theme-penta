<template>
    <div class="uk-form-row">
        <label class="uk-form-label">{{ 'Heading' | trans }}</label>
        <div class="uk-form-controls">
            <p class="uk-form-controls-condensed">
                {{ 'Style' | trans }}
                <select class="uk-form-small uk-margin-small-left" v-model="value.style">
                    <option value="hide">{{ 'Hide' | trans }}</option>
                    <option value="">{{ 'Default' | trans }}</option>
                    <option value="uk-heading-primary">{{ 'Primary' | trans }}</option>
                    <option value="uk-heading-hero">{{ 'Hero' | trans }}</option>
                    <option value="uk-heading-divider">{{ 'Divider' | trans }}</option>
                    <option value="uk-heading-bullet">{{ 'Bullet' | trans }}</option>
                    <option value="uk-heading-line">{{ 'Line' | trans }}</option>
                </select>
            </p>
            <p class="uk-form-controls-condensed">
                {{ 'Tag' | trans }}
                <select class="uk-form-small uk-margin-small-left" v-model="value.tag">
                    <option value="h1">{{ 'H1' | trans }}</option>
                    <option value="h2">{{ 'H2' | trans }}</option>
                    <option value="h3">{{ 'H3' | trans }}</option>
                    <option value="h4">{{ 'H4' | trans }}</option>
                    <option value="h5">{{ 'H5' | trans }}</option>
                    <option value="h6">{{ 'H6' | trans }}</option>
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