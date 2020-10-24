<template>
    <label ref="checkbox" class="checkbox-wrapper" :for="id"
           tabindex="-1">
        <input :id="id" ref="input" v-model="isChecked"
               :value="value"
               type="checkbox" :is-invalid="isInvalid"
               :disabled="disabled" @focus="onFocus"
               @blur="onBlur">
        <CheckboxIcon size="large" v-if="!indeterminate" class="icon"/>
        <CheckboxIndeterminateIcon v-else class="indeterminate"/>
        <span v-if="$slots['default']" class="input-label"><slot/></span>
    </label>
</template>

<script>
    import CheckboxIndeterminateIcon from '../Icon/CheckboxIndeterminateIcon';
    import CheckboxIcon from '../Icon/CheckboxIcon';

    export default {
        name: 'Checkbox',
        components: { CheckboxIcon, CheckboxIndeterminateIcon },
        model: {
            prop: 'checked',
            event: 'input'
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Object, Number],
                default: undefined
            },
            checked: {
                type: [Boolean, Array],
                required: true
            },
            isFocused: {
                type: Boolean,
                default: false
            },
            isInvalid: {
                type: Boolean,
                default: false
            },
            indeterminate: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return { id: undefined, test: 'test' };
        },
        computed: {
            isChecked: {
                get() {
                    return this.checked;
                },
                set(value) {
                    this.$emit('input', value);
                }
            }
        },
        watch: {
            isFocused: {
                handler(isFocused) {
                    if (isFocused) {
                        this.$nextTick(() => this.$refs.input.focus());
                    }
                },
                immediate: true
            }
        },
        created() {
            // eslint-disable-next-line
            this.id = this._uuid;
        },
        methods: {
            onBlur(e) {
                if (!this.$refs.checkbox.contains(e.relatedTarget)) {
                    this.$emit('blur', e);
                }
            },
            onFocus(e) {
                this.$emit('focus', e);
            }
        }
    };
</script>

<style scoped>
input[type="checkbox"] {
    left: 50%;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    cursor: pointer;
}

.checkbox-wrapper {
    display: inline-flex;
    position: relative;
    cursor: pointer;
    outline: none;
}

.input-label {
    padding: 2px 4px;
    display: flex;
    align-self: center;
    flex-grow: 1;
    min-width: 0;
}

input:checked + .icon >>> rect {
    color: rgb(0, 120, 212);
    stroke: rgb(0, 120, 212);
}

input + .icon >>> rect {
    color: #fafbfc;
    stroke: #dfe1e6;
}

label:hover input:not(:checked) + .icon >>> rect {
    fill: #EBECF0;
}

label:hover input:not(:checked) + .icon >>> path {
    fill: #EBECF0;
}

label:hover input:checked + .icon >>> rect {
    color: rgb(0, 90, 158);
    stroke: rgb(0, 90, 158);
}

input + .icon >>> path {
    fill: #fafbfc;
}

input:not([is-invalid]):focus + .icon >>> rect {
    stroke: #4c9aff;
}

input[is-invalid] + .icon >>> rect {
    stroke: #FF5630;
}

input[disabled] + .icon >>> rect {
    opacity: .5;
}

:not(.indeterminate) >>> rect {
    transition: 0.2s ease-in-out;
    stroke-width: 2px;
}

>>> path {
    transition: 0.2s ease-in-out;
}

</style>
