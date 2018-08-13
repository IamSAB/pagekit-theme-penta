<template>

    <div class="uk-form-width-large">

        <a class="uk-placeholder uk-text-center uk-display-block uk-margin-remove" v-if="!video.src" @click.prevent="pick">
            <img width="60" height="60" :alt="'Placeholder Video' | trans" :src="$url('app/system/assets/images/placeholder-video.svg')">
            <p class="uk-text-muted uk-margin-small-top">{{ 'Add video' | trans }}</p>
        </a>

        <div class="uk-overlay uk-overlay-hover uk-visible-hover" :class="class" v-else>

            <video class="uk-width-1-1" :src="$url(video.src)"></video>

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
                    <input-video :source.sync="source"></input-video>
                </div>

                <div class="uk-form-row">
                    <label for="form-src" class="uk-form-label">{{ 'URL' | trans }}</label>
                    <div class="uk-form-controls">
                        <input id="form-src" class="uk-width-1-1" type="text" v-model="source" lazy>
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-src" class="uk-form-label">{{ 'Javascrip Options' | trans }}</label>
                    <div class="uk-form-controls">
                        {{ 'Autoplay' | trans }} <select-js-opts :value.sync="video['uk-video']" key="autoplay" :options="{true: 'True', false: 'False', inview: 'Inview'}"></select-js-opts>
                        {{ 'Automute' | trans }} <select-js-opts :value.sync="video['uk-video']" key="automute" :options="{true: 'True', false: 'False'}"></select-js-opts>
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
            video: {
                type: Object,
                required: true
            },
            class: {
                type: String,
                default: ''
            }
        },

        data() {
            return _.merge({source: ''}, $pagekit);
        },

        ready() {
            this.$set('video.src', this.video.src || '');
            this.$set('source', this.video.src);
        },

        methods: {

            pick () {
                this.source = this.video.src;
                this.$refs.modal.open();
            },

            update () {
                this.video.src = this.source;
                this.$refs.modal.close();
            },

            remove () {
                this.source = '';
                this.video.src = '';
            }
        }
    }

    Vue.component('InputUkVideo', function (resolve, reject) {
        Vue.asset({
            js: [
                'app/assets/uikit/js/components/upload.min.js',
                'app/system/modules/finder/app/bundle/panel-finder.js'
            ]
        }).then(function () {
            resolve(module.exports);
        })
    });

</script>