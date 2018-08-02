<template>

    <div>

        <div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
            <div data-uk-margin>
                <h2 class="uk-margin-remove">{{ 'Theme' | trans }}</h2>
            </div>
            <div data-uk-margin>
                <button class="uk-button uk-button-primary" type="submit">{{ 'Save' | trans }}</button>
            </div>
        </div>

        <div class="uk-form uk-form-horizontal">

            <div class="uk-form-row">
                <label for="form-navbar-mode" class="uk-form-label">{{ 'Logo Inverse' | trans }}</label>
                <div class="uk-form-controls">
                    <input-image :source.sync="config.logo_inverse"></input-image>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-navbar-mode" class="uk-form-label">{{ 'CSS Theme' | trans }}</label>
                <div class="uk-form-controls">
                    <input-link :link.sync="config.css"></input-link>
                </div>
            </div>

        </div>
        
    </div>

</template>

<script>

    module.exports = {

        section: {
            label: 'Theme',
            icon: 'pk-icon-large-brush',
            priority: 15
        },

        data: function () {
            return _.extend({config: {}}, window.$theme);
        },

        events: {

            save: function() {

                this.$http.post('admin/system/settings/config', {name: this.name, config: this.config}).catch(function (res) {
                    this.$notify(res.data, 'danger');
                });

            }

        }

    };

    window.Site.components['site-theme'] = module.exports;

</script>