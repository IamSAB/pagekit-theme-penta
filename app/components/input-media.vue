<template>

    <div class="uk-form-width-large">

        <a class="uk-placeholder uk-text-center uk-display-block uk-margin-remove" v-if="!value" @click.prevent="pick">
            <img v-if="type == 'image'" width="60" height="60" :alt="'Placeholder Image' | trans" :src="$url('app/system/assets/images/placeholder-image.svg')">
            <img v-if="type == 'video'" width="60" height="60" :alt="'Placeholder Video' | trans" :src="$url('app/system/assets/images/placeholder-video.svg')">
            <p class="uk-text-muted uk-margin-small-top">{{ 'Add '+type | trans }}</p>
        </a>

        <div class="uk-overlay uk-overlay-hover uk-visible-hover" :class="class" v-else>

            <img v-if="type == 'image'" :src="$url(value)">
            <video class="uk-width-1-1" :src="$url(value)" v-if="type == 'video' && value"></video>

            <div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>

            <a class="uk-position-cover" @click.prevent="pick"></a>

            <div class="uk-panel-badge pk-panel-badge uk-hidden">
                <ul class="uk-subnav pk-subnav-icon">
                    <li>
                        <a class="pk-icon-delete pk-icon-hover" :title="'Delete' | trans" data-uk-tooltip="{delay: 500}" @click.prevent="remove"></a>
                    </li>
                </ul>
            </div>

        </div>

        <v-modal v-ref:modal>
            <form class="uk-form uk-form-stacked" @submit="update">

                <div class="uk-modal-header">
                    <h2 class="uk-text-capitalize">{{ type | trans }}</h2>
                </div>

                <div class="uk-form-row">
                    <input-image v-if="type == 'image'" :source.sync="source"></input-image>
                    <input-video v-if="type == 'video'" :source.sync="source"></input-video>
                </div>

                <div class="uk-form-row">
                    <label for="form-src" class="uk-form-label">{{ 'URL' | trans }}</label>
                    <div class="uk-form-controls">
                        <input id="form-src" class="uk-width-1-1" type="text" v-model="source" lazy>
                    </div>
                </div>

                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-link uk-modal-close" type="button">{{ 'Cancel' | trans }}</button>
                    <button class="uk-button uk-button-link" type="button" @click.prevent="update">{{ 'Update' | trans }}</button>
                </div>

            </form>
        </v-modal>
    </div>

</template>

<script>
    module.exports = {
        props: {
            class: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'image'
            },
            value: String
        },
        data: function () {
            return _.merge({source: ''}, $pagekit);
        },
        ready: function () {
            this.$set('value', this.value || '');
            this.$set('source', this.value);
        },
        methods: {
            pick: function () {
                this.source = this.value;
                this.$refs.modal.open();
            },
            update: function () {
                this.value = this.source;
                this.$refs.modal.close();
            },
            remove: function () {
                this.source = '';
                this.value = '';
            }
        }
    };
</script>