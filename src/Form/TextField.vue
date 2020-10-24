<template>
    <div class="input-wrapper" data-cy="input-wrapper" v-on="$listeners">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'TextField'
    };
</script>

<style scoped>
>>> textarea,
>>> input {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: inherit;
    font-size: inherit;
    outline: none;
    line-height: inherit;
    width: 100%;
    padding: 6px;
    letter-spacing: inherit;
    box-sizing: border-box;
    margin: 0;
}

.input-wrapper[compact] > input,
.input-wrapper[compact] > textarea {
    padding: 0;
}

textarea {
    resize: vertical;
}

textarea::-ms-clear,
input::-ms-clear {
    display: none;
}

textarea::-moz-placeholder,
input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    opacity: 1;
    color: #7a869a;
}

input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #7a869a;
}

textarea:-moz-placeholder,
input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #7a869a;
    opacity: 1;
}

.input-wrapper {
    align-items: center;
    border: solid 1px #605e5c;
    box-sizing: border-box;
    padding: 0;
    color: #091E42;
    display: flex;
    flex: 1 0 auto;
    position: relative;
    justify-content: space-between;
    max-width: 100%;
    word-wrap: break-word;
}

.input-wrapper[is-focused]::after {
    border: solid 2px #4c9aff;
    position: absolute;
    top: -1px;
    left: -1px;
    content: '';
    bottom: -1px;
    right: -1px;
    pointer-events: none;
}

.input-wrapper[should-fit-container] {
    display: flex;
}

.input-wrapper[disabled] {
    pointer-events: none;
    background-color: #F4F5F7;
}

.input-wrapper[is-invalid]:not([disabled]):not([is-loading]) {
    border-color: #de350b;
    animation: shake .5s linear;
}
</style>
