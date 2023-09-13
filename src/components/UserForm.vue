<script setup>
import { useUserStore } from "@/stores/UsersStore"
import { ref, computed } from "vue"

const newUser = useUserStore()

const props = defineProps({
    id: Number,
    nameProps: String,
    nameState: Boolean,
})

const name = ref("")

const handleInput = (event) => {
    const keyCode = event.keyCode

    if (
        keyCode === 32 ||
        (keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 186 && keyCode <= 192) ||
        (keyCode >= 219 && keyCode <= 222)
    ) {
        event.preventDefault()
    }
}

//возвращает первую букву введенного имени)
const isValidName = computed(() => {
    newUser.checkName(props.id)
    if (!props.nameState) {
        return "?"
    } else {
        return props.nameProps[0].toUpperCase()
    }
})
</script>

<template>
    <form
        @submit.prevent
        class="d-flex justify-content-between w-75 mt-1"
    >
        <b-avatar
            :text="isValidName"
            :variant="isValidName === '?' ? 'secondary' : 'primary'"
        >
        </b-avatar>
        <b-form-input
            class="w-90 ms-2"
            placeholder="Введите себя..."
            v-model="name"
            type="text"
            @input="newUser.addNewUser(id, name)"
            aria-describedby="input-live-help input-live-feedback"
            id="input-live"
            @keydown="handleInput"
            trim
        >
        </b-form-input>
        <b-button
            class="button ms-2"
            variant="danger"
            @click="newUser.deleteUserForm(id)"
            >Удалить
        </b-button>
    </form>
</template>
