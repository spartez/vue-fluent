<template>
        <FieldGroup data-cy="field-group" label="Label" required>
            <Input v-model="message" should-fit-container placeholder="Click here to input"/>
            The message is: {{ message }}
        </FieldGroup>
</template>

<script>
import Input from '../../src/Form/Input'
import FieldGroup from '../../src/Form/FieldGroup'

export default {
    name: "InputStory",
    components: { Input, FieldGroup },
    data() {
        return {
            message: ''
        }
    }
}
</script>

<style scoped>

</style>
