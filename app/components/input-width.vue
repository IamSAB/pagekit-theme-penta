<template>
    
    <div>
        <p class="uk-form-controls-condensed">
            <select class="uk-margin-right uk-form-small" v-model="data.all">
                <option v-if="!child"value="">{{ '- Select -' | trans }}</option>
                <option v-for="width in widths" :value="width.value">{{ width.label }}</option>
            </select>
            {{ 'On screens larger than' | trans }}
        </p>
        <div class="uk-grid uk-grid-small">
            <div v-for="(key,label) in sizes" class="uk-flex-item-none">
                <p class="uk-form-controls-condensed">
                    {{ label }}
                    <select class="uk-margin-small-left uk-form-small" v-model="data[key]">
                        <option value="">{{ '- Select -' | trans }}</option>
                        <option v-for="width in widths" :value="width.value">{{ width.label }}</option>
                    </select>
                </p>
            </div>
        </div>
    </div>

</template>

<script>

    module.exports =  {

        props: {
            value: String,
            title: {
                type: Boolean,
                default: 'Width'
            },
            child: {
                type: Boolean,
                default: false
            }
        },

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
        },

        computed: {
            widths: function () {
                var arr = [
                    {value: 'auto', label: 'Auto'},
                    {value: 'expand', label: 'Expand'}
                ];
                for (var i = 1; i < 6; i++) {
                    for (var j = i; j <= 6; j++) {
                        if (i != 1) {
                            if( this.child || j%i == 0 || (i == 4 && j == 6)) continue;
                        }
                        arr.push({
                            value: i + '-' + j,
                            label: i + '-' + j + ' / ' + _.round(i/j*100) + '%'
                        });
                    }
                }
                return arr;
            }
        }
    }

</script>