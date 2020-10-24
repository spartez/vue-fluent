<template>
    <Tag :tag="tag"/>
</template>

<script>
import Tag from '../../src/Select/Tag'

export default {
    name: "TagStory",
    components: { Tag },
    data() {
        return {
            tag: {
                label: 'John Doe'
            }
        }
    }
}
</script>

<style scoped>

</style>
