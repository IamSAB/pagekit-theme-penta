<template>

    <div class="uk-margin-bottom">

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Style' | trans }}</label>
            <div class="uk-form-controls">
                <select class="uk-margin-right" v-model="section.style">
                    <option value="">{{ 'None' | trans }}</option>
                    <option value="default">{{ 'Default' | trans }}</option>
                    <option value="muted">{{ 'Muted' | trans }}</option>
                    <option value="primary">{{ 'Primary' | trans }}</option>
                    <option value="secondary">{{ 'Secondary' | trans }}</option>
                </select>
                <input type="checkbox" v-model="section.preserve_color"> {{ 'Preserve color' | trans }}
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Size' | trans }}</label>
            <div class="uk-form-controls">
                <select v-model="section.size">
                    <option value="xsmall">{{ 'X-Small' | trans }}</option>
                    <option value="small">{{ 'Small' | trans }}</option>
                    <option value="">{{ 'Default' | trans }}</option>
                    <option value="large">{{ 'Large' | trans }}</option>
                    <option value="xlarge">{{ 'X-Large' | trans }}</option>
                </select>
            </div>
        </div>

        <input-bg :value.sync="section.bg" :color="false"></input-bg>

        <input-inverse :value.sync="section.inverse"></input-inverse>
        
        <input-grid v-if="hasGrid" :grid.sync="section.grid" :child="true" :title="'Widget grid' | trans"></input-grid>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Container size' | trans }}</label>
            <div class="uk-form-controls">
                <select v-model="section.container_size">
                    <option value="small">{{ 'Small' | trans }}</option>
                    <option value="">{{ 'Default' | trans }}</option>
                    <option value="large">{{ 'Large' | trans }}</option>
                    <option value="expand">{{ 'Expand' | trans }}</option>
                </select>
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Custom class' | trans }}</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-form-width-large" v-model="section.class">
            </div>
        </div>

    </div>
</template>

<script>

    module.exports = {

        props: ['type','position','section'],
        
        computed: {
            hasGrid: function () {
                return _.has(this.section,'grid');
            }
        }
    }
    
</script>