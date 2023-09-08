<script setup>
    import FormBlock from '@/components/FormBlock.vue'
 
    import {useUserStore} from '@/stores/UsersStore'
    import {computed, ref} from 'vue'

    const newUser = useUserStore()
   
</script>

<template >
    <form-block>
        <template #header>
            <RouterLink :to = "{name: 'users'}">
                <b-avatar text = "<=" variant = "primary"></b-avatar>
            </RouterLink>
            <h2>Введите позицию и стоимость</h2>
            <b-avatar :to = "{name: 'results'}" 
                text = "$">
            </b-avatar>
        </template>
        <template #add-button>
            <b-button @click = "newUser.addDishForm(newUser.users.map((item)=>item.name))"
                variant = "secondary"
               >Добавить</b-button>
        </template>
        <template #body style = "margin-bottom: 20px !important; ">
            <div class = "d-flex justify-content-center"  v-bind = "isActiveBtn = true" >
                <img class="icon" src="@/assets/Girl2.svg" alt="dots icon" style = "margin-top: 25%;">
            </div>
        </template>
        <template
            #footer>
                <b-button
                @click.prevent="$router.push( `${'results'}` )"
                >Далее</b-button>
        </template>
    </form-block>
</template> 
