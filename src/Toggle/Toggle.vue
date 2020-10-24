<template>
    <label :for="id">
        <input :id="id"
               type="checkbox"
               :checked="value"
               @change="toggle">
        <div class="slide" :size="size">
            <div class="slide-inner"/>
        </div>
    </label>
</template>

<script>

    export default {
        name: 'Toggle',
        props: {
            value: {
                type: [Number, String, Boolean],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'regular'
            }
        },
        data() {
            return { id: undefined };
        },
        created() {
            // eslint-disable-next-line
            this.id = this._uuid;
        },
        methods: {
            toggle() {
                if (this.disabled) return;
                this.$emit('input', !this.value);
            }
        }
    };
</script>

<style scoped>
input {
    opacity: 0;
    position: absolute;
}

label {
    display: inline-block;
    padding: 2px;
}

.slide {
    background-clip: content-box;
    background-color: #fff;
    border: 1px solid rgb(50, 49, 48);
    display: block;
    height: 18px;
    position: relative;
    width: 40px;
    border-radius: 16px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
}

.slide[size="large"] {
    height: 20px;
    width: 50px;
    border-radius: 20px;
}

.slide::before {
    background-color: rgb(96, 94, 92);
    top: 50%;
    transform: translateY(-50%);
    content: "";
    height: 12px;
    left: 4px;
    position: absolute;
    width: 12px;
    border-radius: 50%;
    transition: all 0.2s ease 0s;
}

.slide[size="large"]::before {
    height: 16px;
    width: 16px;
}

input:checked + .slide {
    background-color: rgb(0, 90, 158);
}

input:checked + .slide::before {
    transform: translate(18px, -50%);
    background-color: #fff;
}

input:checked + .slide[size="large"]::before {
    transform: translate(25px, -50%);
}

.slide-inner {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    width: 100%;
    transition: all 0.2s ease 0s;
}
</style>
