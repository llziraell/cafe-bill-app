<script setup>
    import UserCheck from '@/components/UserCheck.vue'
    import {useUserStore} from '@/stores/UsersStore'
    import { ref, computed, watch } from 'vue'

    const newUser = useUserStore()
    const selected = ref('')
    
    const props = defineProps({
        id: Number,
        dish: Object,
        index: Number,
        isValid: Boolean
    })

    const dish1 = ref('')
    const cost = ref(0)

    const isNormalDish = computed(()=>{
        newUser.CheckDish(props.id)
        if (!props.isValid){
              return "dish-form border-danger"
        }else{
            return "dish-form  border-variant"
        }
    })

</script>

<template>
    <div @submit.prevent :class = "isNormalDish"  >
        <div class="d-flex">
            <b-form-input 
            type = "text" 
            v-model  = "dish1"
            @input = "newUser.addNewDish(id, dish1)"
            placeholder="Введите позицию"
            trim 
            />
            <b-form-input 
            type = "number" 
            v-model = "cost"
            @input = "newUser.addNewCost(id, cost)"
            class = "ms-2" 
            placeholder="Сколько стоило?)))"
            trim 
            />
        </div>
        <div class=" w-100 pt-2">
            <div style = "display: flex; justify-content: space-between;" >
                <div style = "display: flex; flex-direction: column; align-items: center; justify-content: space-between">
                    <b-dropdown block :text =selected.name>
                        <div v-for = "user in newUser.users">
                            <b-dropdown-item>
                                <input 
                                    type="radio"  
                                    :value=user 
                                    v-model="selected" 
                                    v-bind = "newUser.selectWhoPay(id, selected)">
                                {{user.name}}
                            </b-dropdown-item>
                        </div>
                    </b-dropdown>
                    Кто платил?
                </div>
                <user-check class = "overflow-x-auto" :index = "index" :dish = "dish"></user-check>  
                <b-button @click = "newUser.deleteDishForm(id)" variant = "danger">Удалить</b-button>
            </div>
        </div> 
    </div>
</template>


<style>

.dish-form{
    padding: 15px;
    margin: 5px;
    border: 1px solid #0072D9;
    border-radius: 8px;
    width: 100%;
    max-width: 100%;
}
</style>