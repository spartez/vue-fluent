<template>
    <div>
        <Spinner v-for="size in sizes" :size="size" :key="size"/>
    </div>
</template>

<script>
import Spinner from '../../src/Spinner/Spinner'

export default {
    name: "SpinnerStory",
    components: { Spinner },
    data() {
        return {
            sizes: ['xsmall', 'small', 'medium', 'large']
        }
    }

}
</script>

<style scoped>

</style>
