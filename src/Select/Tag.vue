<template>
    <div class="tag" draggable="true" @dragstart="onDragStart"
         @dragend.prevent="onDragEnd" @drag="onDrag">
        <slot>
            <div class="label">
                {{ tag.label }}
            </div>
        </slot>
        <div v-if="shouldShowRemoveButton" ref="remove" class="remove-tag"
             data-cy="remove-tag"
             @mousedown.prevent.stop
             @click.stop="onRemove">
            <EditorCloseIcon primary-color="#000" size="xsmall" />
        </div>
    </div>
</template>

<script>
    import EditorCloseIcon from '../Icon/EditorCloseIcon';

    export default {
        name: 'Tag',
        components: { EditorCloseIcon },
        props: {
            tag: {
                type: Object,
                default: () => ({})
            },
            index: {
                type: Number,
                required: true
            },
            count: {
                type: Number,
                required: true
            },
            min: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {};
        },
        computed: {
            shouldShowRemoveButton() {
                return this.min !== this.count && !this.tag.disabled;
            }
        },
        methods: {
            onRemove() {
                this.$emit('on-remove', this.tag.id);
            },
            onDragStart(e) {
                this.$emit('dragstart', e, this.index);
            },
            onDragEnd(e) {
                this.$emit('dragend', e);
            },
            onDrag(e) {
                this.$emit('drag', e);
            }
        }
    };
</script>

<style scoped>
.tag {
    background: rgb(243, 242, 241);
    display: inline-flex;
    align-items: center;
    min-width: 0;
    height: 20px;
    box-sizing: border-box;
    color: rgb(66, 82, 110);
    max-width: 100%;
    border-radius: 10px;
    margin: 4px 2px 0 2px;
    cursor: pointer;
    overflow: hidden;
}

.tag:last-of-type {
    margin-right: 5px;
}

.label {
    color: rgb(51, 51, 51);
    font-size: 85%;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    border-radius: 2px;
    overflow: hidden;
    padding: 2px 6px 2px 6px;
}

.remove-tag {
    display: flex;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    align-items: center;
    padding-left: 2px;
    padding-right: 2px;
    box-sizing: border-box;
}

.remove-tag:hover {
    color: #fff;
    background-color: rgb(200, 198, 196);
}
</style>
