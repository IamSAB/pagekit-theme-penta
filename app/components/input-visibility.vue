<template>

    <div class="uk-form-row">

        <label class="uk-form-label">{{ 'Visibility' | trans }}</label>

        <div class="uk-form-controls uk-form-controls-text">

            <p class="uk-form-controls-condensed">
                {{ 'Visible on screens larger than' | trans }}
                <select class="uk-form-small uk-margin-small-left" v-model="value.visible">
                    <option value="">{{ '- Select -' | trans }}</option>
                    <option value="@s">{{ '640px' | trans }}</option>
                    <option value="@m">{{ '960px' | trans }}</option>
                    <option value="@l">{{ '1200px' | trans }}</option>
                    <option value="@xl">{{ '1600px' | trans }}</option>
                </select>
            </p>

            <p class="uk-form-controls-condensed">
                {{ 'Hide on screens larger than' | trans }}
                <select class="uk-form-small uk-margin-small-left" v-model="value.hidden">
                    <option value="">{{ '- Select -' | trans }}</option>
                    <option value="@s">{{ '640px' | trans }}</option>
                    <option value="@m">{{ '960px' | trans }}</option>
                    <option value="@l">{{ '1200px' | trans }}</option>
                    <option value="@xl">{{ '1600px' | trans }}</option>
                </select>
            </p>

            <p class="uk-form-controls-condensed">
                {{ 'Hide on' | trans }}
                <select class="uk-form-small uk-margin-small-left" v-model="value.screen">
                    <option value="">{{ '- Select -' | trans }}</option>
                    <option value="touch">{{ 'Touch' | trans }}</option>
                    <option value="notouch">{{ 'Notouch' | trans }}</option>
                </select>
            </p>
            
        </div>

    </div>

</template>

<script>

    module.exports = {

        props: ['value'],

        data: function () {
            return {
                visibleon: false,
                hideon: false,
                hidescreen: false
            }
        }

    }

</script>