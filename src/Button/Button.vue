<template>
    <button ref="button"
            type="button"
            :appearance="appearance"
            :disabled="isDisabled"
            :selected="isSelected"
            :loading="isLoading"
            :spacing="spacing"
            v-on="listeners">
        <span class="wrapper" tabindex="-1" :icon-is-only-child="iconIsOnlyChild">
            <slot v-if="!isLoading" name="icon-before"/>
            <span v-if="this.$slots.default" ref="label" class="label"><slot/></span>
            <slot v-if="!isLoading" name="icon-after"/>
            <Spinner v-if="isLoading" :size="spacing === 'default' ? 'small' : 'icon'"/>
        </span>
    </button>
</template>

<script>
    import Spinner from '../Spinner/Spinner';

    export default {
        name: 'Button',
        components: {
            Spinner
        },
        props: {
            isSelected: { type: Boolean, default: false },
            isDisabled: { type: Boolean, default: false },
            appearance: { type: String, default: 'default' },
            autoFocus: { type: Boolean, default: false },
            isLoading: { type: Boolean, default: false },
            spacing: { type: String, default: 'default' }
        },
        computed: {
            iconIsOnlyChild() {
                return !!(this.$slots['icon-after'] && !this.$slots['icon-before'] && !this.$slots.default)
                    || (!this.$slots['icon-after'] && this.$slots['icon-before'] && !this.$slots.default);
            },
            listeners() {
                return this.$listeners;
            }
        },
        mounted() {
            if (this.autoFocus) {
                this.$refs.button.focus();
            }
        }
    };
</script>

<style scoped>
button {
    font-size: 14px;
    align-items: baseline;
    border-width: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-style: normal;
    background-color: #fff;
    margin: 0;
    max-width: 100%;
    text-align: center;
    text-decoration: none;
    transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    outline: none;
    position: relative;
    overflow: hidden;
    padding: 0;
}

button[spacing="default"] {
    height: 32px;
    line-height: 32px;
    min-width: 32px;
}

button[spacing="compact"] {
    height: 24px;
    line-height: 24px;
    min-width: 24px;
}

button[spacing="none"] {
    height: auto;
    line-height: inherit;
}

[spacing="none"] span.wrapper {
    padding: 0;
}

span.wrapper {
    border-radius: 3px;
    outline: none;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    padding: 0 16px;
}

[spacing="compact"] span.wrapper[icon-is-only-child] {
    padding: 0 4px;
}

span.label {
    align-self: center;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 4px;
}

span.label,
button[loading],
button[loading] span.wrapper {
    pointer-events: none;
}

button[loading] span.label {
    opacity: 0;
}

button[loading] >>> .spinner {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

button[loading][selected] >>> .spinner {
    color: #FFF;
}

button:focus {
    box-shadow: rgba(38, 132, 255, 0.6) 0 0 0 2px;
}

/*default*/
button[appearance="default"] {
    border: 1px solid rgb(50, 49, 48);
    color: rgb(50, 49, 48);
}

button[appearance="default"]:not([disabled]):not([selected]):hover {
    background: #f3f2f1;
}

button[appearance="default"]:not([disabled]):not([selected]):active {
    background-color: #edebe9;
}

button[appearance="default"]:active >>> svg {
    color: #0052CC;
}

button[appearance="default"][selected],
button[appearance="default"][selected]:hover,
button[appearance="default"][selected]:active {
    background: rgb(237, 235, 233);
    color: rgb(50, 49, 48);
    text-decoration: none;
}

/*primary*/
button[appearance="primary"] {
    background: #0078D4;
    color: #FFFFFF;
}

button[appearance="primary"]:not([disabled]):not([selected]):hover {
    background: #106ebe;
}

button[appearance="primary"]:not([disabled]):not([selected]):active {
    background: #005a9e;
}

button[appearance="primary"][loading] >>> .spinner {
    color: #FFF;
}

button[appearance="primary"][selected],
button[appearance="primary"][selected]:hover,
button[appearance="primary"][selected]:active {
    background: rgb(0, 90, 158);
    color: #fff;
    text-decoration: none;
}

/*subtle*/
button[appearance="subtle"] {
    background: none;
    color: #505F79;
}

button[appearance="subtle"]:not([disabled]):not([selected]):hover {
    background: #f3f2f1;
}

button[appearance="subtle"]:not([disabled]):not([selected]):active {
    background-color: #edebe9;
}

/*subtle-link*/
button[appearance="subtle-link"] {
    background: none;
    color: #6B778C;
}

button[appearance="subtle-link"]:not([disabled]):not([selected]):hover {
    color: #0078d4;
}

button[appearance="subtle-link"]:not([disabled]):not([selected]):active {
    color: #505F79;
}

button[selected],
button[selected]:hover,
button[selected]:active {
    background: rgb(237, 235, 233);
    text-decoration: none;
}

button[selected] >>> svg,
button[selected]:hover >>> svg,
button[selected]:active >>> svg {
    color: rgb(244, 245, 247);
}

button[disabled] span.wrapper,
button[disabled] >>> svg {
    color: rgb(161, 159, 157);
    pointer-events: none;
}

button[disabled] {
    cursor: not-allowed;
    border: none;
}

button[loading][disabled] >>> .spinner {
    color: #172B4D;
}

button[disabled]:not([appearance="subtle-link"]):not([appearance="link"]):not([appearance="subtle"]) {
    background: rgba(9, 30, 66, 0.04);
}

button::-moz-focus-inner,
span::-moz-focus-inner,
button::-moz-focus-inner {
    border: 0;
    margin: 0;
    padding: 0;
}

button ~ button {
    margin-left: 10px;
}
</style>
