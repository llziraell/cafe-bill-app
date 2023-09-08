<script setup>
import { ref } from "vue"
import FormBlock from "@/components/FormBlock.vue"
import UserForm from "@/components/UserForm.vue"
import { useUserStore } from "@/stores/UsersStore"

const newUser = useUserStore()
const isActiveBtn = ref(false)
</script>

<template>
    <form @submit.prevent>
        <form-block>
            <template #header>
                <h2>Введите участников</h2>
                <b-button @click="newUser.addUserForm">Добавить + </b-button>
            </template>
            <template
                #body
                style="margin-bottom: 20px !important"
            >
                <div
                    v-if="newUser.users.length === 0"
                    class="d-flex justify-content-center"
                    v-bind="(isActiveBtn = true)"
                >
                    <img
                        class="icon"
                        src="@/assets/Girl1.svg"
                        alt="dots icon"
                        style="margin-top: 50%"
                    />
                </div>
                <div
                    v-else
                    v-for="user in newUser.users"
                    :key="user.id"
                    class="w-100 d-flex mb-3 justify-content-center"
                    v-bind="(isActiveBtn = false)"
                >
                    <user-form
                        :id="user.id"
                        :nameState="user.nameState"
                        :nameProps="user.name"
                    ></user-form>
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
                    :variant="isDuplicate ? 'secondary' : 'primary'"
                    :disabled="isDuplicate"
                    @click.prevent="$router.push(`${'dishes'}`)"
                    >Далее
                </b-button>
            </template>
        </form-block>
    </form>
</template>
