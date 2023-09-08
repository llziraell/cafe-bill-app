<script setup>
import { useUserStore } from "@/stores/UsersStore"
import {computed, watch } from "vue"
const newUser = useUserStore()

const props = defineProps({
    id: Number,
    dish: Object,
    index: Number,
})

const toggleChecked = (index, num) => {
    const currentUser = newUser.dishes[index].users[num]
    if (newUser.dishes[index].whoEat.indexOf(currentUser) === -1) {
        newUser.dishes[index].whoEat.push(currentUser)
    } else {
        newUser.popUser(index, currentUser)
    }
    if (
        newUser.dishes[index].whoEat.length ===
        newUser.dishes[index].users.length
    ) {
        newUser.dishes[index].selectAllChecked = true
    } else {
        newUser.dishes[index].selectAllChecked = false
    }
}

const variantChecked = (index, num) => {
    const currentUser = newUser.dishes[index].users[num]
    if (newUser.dishes[index].whoEat.indexOf(currentUser) === -1) {
        return false
    } else {
        return true
    }
}

const toggleAll = (index) => {
    console.log(newUser.dishes[index].selectAllChecked)
    if (newUser.dishes[index].selectAllChecked) {
        for (let el of newUser.dishes[index].users) {
            newUser.dishes[index].whoEat.push(el)
        }
        newUser.dishes[index].whoEat = [
            ...new Set(newUser.dishes[index].whoEat),
        ]
    } else {
        for (let currentUser of newUser.dishes[index].whoEat) {
            newUser.popUser(index, currentUser)
        }
    }
}

const isAllChecked = computed(() => {
    return newUser.dishes.every((eatUser) => {
        eatUser.whoEat.length === eatUser.users.length
    })
})

watch(isAllChecked, (newValue) => {
    console.log(newValue)
    newUser.dishes.forEach((dish, index) => {
        if (newValue) {
            newUser.dishes[index].selectAllChecked = true
        }
    })
})
</script>

<template>
    <div style = "display: flex; flex-direction: column; align-items: center;">
    <b-form-checkbox-group class="d-flex justify-content-center column w-60 overflow-x-auto">
        <div class="d-flex ml-0">
            <b-form-checkbox
                style="visibility: hidden"
                @change="toggleAll(index)"
                v-model="newUser.dishes[index].selectAllChecked"
            >
                <b-avatar
                    style="visibility: visible !important"
                    data-toggle="tooltip"
                    data-placement="top"
                    :variant="
                        newUser.dishes[index].selectAllChecked
                            ? 'primary'
                            : 'secondary'
                    "
                    >All
                </b-avatar>
            </b-form-checkbox>
        </div>
        <div v-for="(item, num) in newUser.dishes[index].users" class = "ml-0">
            <b-form-checkbox
                style="visibility: hidden"
                @click="toggleChecked(index, num)"
            >
                <b-avatar
                    style="visibility: visible !important"
                    :variant="
                        variantChecked(index, num) ? 'primary' : 'secondary'
                    "
                    data-toggle="tooltip"
                    data-placement="top"
                    :title="item"
                    v-model="dish.checked"
                >
                    {{ item[0].toUpperCase() }}
                </b-avatar>
            </b-form-checkbox>
        </div>
    </b-form-checkbox-group>
    Кто eл?
    </div>
</template>

