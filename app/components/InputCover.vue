<template>

    <div class="uk-form-row">

        <div class="uk-form-row">
            <label for="form-hero-video" class="uk-form-label">{{ 'Cover' | trans }}</label>
            <div class="uk-form-controls">

                <a class="uk-form-width-large uk-placeholder uk-text-center uk-display-block uk-margin-remove" v-if="!src" @click.prevent="$refs.modal.open()">
                    <img width="60" height="60" :alt="'Placeholder Image' | trans" :src="$url('app/system/assets/images/placeholder-image.svg')">
                    <img width="60" height="60" :alt="'Placeholder Video' | trans" :src="$url('app/system/assets/images/placeholder-video.svg')">
                    <p class="uk-text-muted uk-margin-small-top">{{ 'Select source from storage' | trans }}</p>
                </a>
                <div v-if="src">
                    <img class="uk-form-width-large" v-if="type == 'img'" :src="$url(src)">
                    <video class="uk-form-width-large" v-if="type == 'video'" :src="$url(src)"></video>
                    <iframe class="uk-form-width-large" v-if="type == 'iframe'" :src="$url(src)"></iframe>
                </div>

                <div class="uk-margin-top uk-form-icon">
                    <i :class="'uk-icon-'+input.icon"></i>
                    <input class="uk-form-width-large" :class="{'uk-form-danger': input.icon == 'remove'}" :disabled="type == 'img' || type == 'video'" type="text" lazy v-model="source">
                </div>
                <a v-if="src" class="pk-icon-delete" @click.prevent="source = ''" data-uk-tooltip :title="'Delete source' | trans"></a>
                <a v-if="source != src" class="pk-icon-refresh" @click.prevent="source = src" data-uk-tooltip :title="'Reset changes' | trans"></a>
                <p class="uk-form-help-block">{{ input.title }}</p>

            </div>
        </div>

        <v-modal v-ref:modal large>
            <panel-finder :root="pagekit.storage" v-ref:finder :modal="true"></panel-finder>
            <div class="uk-modal-footer uk-text-right">
                <button class="uk-button uk-button-link uk-modal-close" type="button">{{ 'Cancel' | trans }}</button>
                <button class="uk-button uk-button-primary" type="button" :disabled="!selected" @click.prevent="select">{{ 'Select' | trans }}</button>
            </div>
        </v-modal>

    </div>

</template>

<script>
    module.exports = {

        props: {
            src: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
            }
        },

        created () {
            this.$set('source', this.src);
            this.$watch('source', (value, old) => {
                if (value) {
                    let match = false;
                    _.each(this.sources, (source) => {
                        if (source.regexp.test(value)) {
                            this.src = value;
                            this.type = source.type;
                            this.input = {
                                title: source.title,
                                icon: source.icon
                            }
                            match = true;
                            return false;
                        }
                    })
                    if (!match) {
                        this.input = {
                            title: this.$trans('No valid source!'),
                            icon: 'remove'
                        }
                    }
                }
                else {
                    this.input = {
                        title: this.$trans('Choose a source for the cover! Consider Google, Vimeo, Youtube Embed API\'s'),
                        icon: 'question'
                    }
                    this.src = '';
                    this.type = '';
                }
            },{
                immediate: true
            });
        },

        data: () => ({
            pagekit: $pagekit,
            input: {
                icon: '',
                title: ''
            },
            source: '',
            sources: [
                {
                    title: 'Youtube Embed',
                    icon: 'youtube',
                    regexp: new RegExp('^https:\/\/(?:www\.)?youtube.com\/embed\/[A-z0-9]+','g'),
                    type: 'iframe'
                },
                {
                    title: 'Vimeo Embed',
                    icon: 'vimeo',
                    regexp: new RegExp('^https:\/\/player\.vimeo\.com\/video\/[0-9]+','g'),
                    type: 'iframe'
                },
                {
                    title: 'Google Maps Embed',
                    title: 'google',
                    regexp: new RegExp('^https:\/\/(?:www\.)?google\.com\/maps\/embed\/v1\/(place|search|view|directions|streetview)\?.*(key=.*)','g'),
                    type: 'iframe'
                },
                {
                    title: 'Google Maps Static',
                    icon: 'google',
                    regexp: new RegExp('https:\/\/maps\.googleapis\.com\/maps\/api\/staticmap\?.*(key=.*)','g'),
                    type: 'iframe'
                },
                {
                    title: 'Image',
                    icon: 'image',
                    regexp: new RegExp('\.(?:gif|jpe?g|png|svg|ico)$','i'),
                    type: 'img'
                },
                {
                    title: 'Video',
                    icon: 'video-camera',
                    regexp: new RegExp('\.(mpeg|ogv|mp4|webm|wmv)$','g'),
                    type: 'video'
                }
            ]
        }),

        computed: {

            selected () {
                const selected = this.$refs.finder.getSelected();
                return selected.length === 1 && (this.$refs.finder.isImage(selected[0]) || this.$refs.finder.isVideo(selected[0]));
            }

        },

        methods: {

            select: function () {
                this.$set('source', this.$refs.finder.getSelected()[0]);
                this.$refs.finder.removeSelection();
                this.$refs.modal.close();
            }
        }
    }
</script>
