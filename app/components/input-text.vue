<template>

    <div class="uk-form-row">
        <label class="uk-form-label">{{ 'Alignment' | trans }}</label>
        <div class="uk-form-controls">
            <p class="uk-form-controls-condensed">
                <select class="uk-margin-right uk-form-small" v-model="data.all">
                    <option value="">{{ '- Select -' | trans }}</option>
                    <option value="left">{{ 'Left' | trans }}</option>
                    <option value="center">{{ 'Center' | trans }}</option>
                    <option value="right">{{ 'Right' | trans }}</option>
                    <option value="justify">{{ 'Justify' | trans }}</option>
                </select>
                {{ 'On screens larger than' | trans }}
            </p>
            <div class="uk-grid">
                <div v-for="(key,label) in sizes" class="uk-flex-item-none">
                    <p class="uk-form-controls-condensed">
                        {{ label }}
                        <select class="uk-margin-small-left uk-form-small" v-model="data[key]">
                            <option value="">{{ '- Select -' | trans }}</option>
                            <option value="left">{{ 'Left' | trans }}</option>
                            <option value="center">{{ 'Center' | trans }}</option>
                            <option value="right">{{ 'Right' | trans }}</option>
                        </select>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    module.exports =  {

        props: ['value'],

        data: function () {
            return {
                data: {
                    all:'', s:'', m:'', l:'', xl:''
                },
                sizes: { s:'640px', m:'960px', l:'1200px' ,xl:'1600px' }
            };
        },

        created: function () {
            var arr = this.value.split(','), vm = this, temp = [];
            _.each(arr, function (el) {
                temp = el.split('@');
                if(temp.length == 1) temp.push('all');
                vm.data[temp[1]] = temp[0];
                temp = [];
            })
        },

        watch: {
            data: {
                handler: function () {
                    var arr = [];
                    _.each(this.data, function (value,key) {
                        if(value) arr.push(value + (key == 'all' ? '' : '@' + key));
                    });
                    this.value = arr.join();
                },
                deep: true
            }
        }
    }

</script>