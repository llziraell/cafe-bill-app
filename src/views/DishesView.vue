<script setup>
import FormBlock from "@/components/FormBlock.vue"
import DishForm from "@/components/DishForm.vue"
import { useUserStore } from "@/stores/UsersStore"
import { computed, ref } from "vue"

const newUser = useUserStore()

const isNorm = computed(() => {
    console.log(newUser.validDishForm())
    return newUser.validDishForm()
})

const isActiveBtn = ref(false)
</script>

<template>
    <form-block>
        <template #header>
            <RouterLink :to="{ name: 'users' }">
                <b-avatar
                    text="<="
                    variant="primary"
                ></b-avatar>
            </RouterLink>
            <h2>Введите позицию и стоимость</h2>
            <b-avatar
                :to="{ name: 'results' }"
                text="$"
                :variant="isNorm ? 'primary' : 'secondary'"
                :disabled="!isNorm"
            ></b-avatar>
        </template>
        <template #add-button>
            <b-button
                @click="
                    newUser.addDishForm(newUser.users.map((item) => item.name))
                "
                variant="secondary"
                >Добавить</b-button
            >
        </template>
        <template
            #body
            style="margin-bottom: 20px !important"
        >
            <div
                v-if="newUser.dishes.length === 0"
                class="d-flex justify-content-center"
                v-bind="(isActiveBtn = true)"
            >
                <img
                    class="icon"
                    src="@/assets/Girl2.svg"
                    alt="dots icon"
                    style="margin-top: 25%"
                />
            </div>
            <div
                v-else
                v-for="(dish, index) in newUser.dishes"
                :key="dish.id"
                class="w-100 d-flex mb-3 justify-content-center"
                v-bind="(isActiveBtn = false)"
            >
                <dish-form
                    :id="dish.id"
                    :dish="dish"
                    :index="index"
                    :isValid="dish.isValid"
                ></dish-form>
            </div>
        </template>
        <template
            #footer
            v-if="isActiveBtn"
        >
        </template>
        <template
            #footer
            v-else
        >
            <b-button
                :variant="isNorm ? 'primary' : 'secondary'"
                :disabled="!isNorm"
                @click.prevent="$router.push(`${'results'}`)"
                >Далее</b-button
            >
        </template>
    </form-block>
</template>
