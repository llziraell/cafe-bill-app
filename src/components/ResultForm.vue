<script setup>
import { useResultStore } from "@/stores/ResultStore"
import { useUserStore } from "@/stores/UsersStore"

const newResult = useResultStore()
const newUser = useUserStore()

</script>

<template>
    {{ newResult.eatingOperations(newUser.users, newUser.dishes) }}
    <div v-for="(result, index)  in newResult.resultOperations" :key = index>
        <div class="result-form ">
            <div class = "d-flex column w-50">
                <span class = "result-name"> 
                    {{
                    result[0].nameCredit
                }}
                </span>
                <h5>в долгу y </h5>
            </div> 
            
            <div class = "d-flex row w-50">
                <div
                    v-id="result.name"
                    v-for="resData in result"
                    class = "d-flex column"
                >
                    <div v-if = "resData.whomCredit !== ' себя не бывает)))'" class = "d-flex column">
                        <h5> на </h5>
                         <span class = "result-cost">
                            {{ resData.eatCost.toFixed(2) }} Р 
                         </span>
                    </div>
                    <div v-else>
                        <span class = "result-name">
                            {{resData.whomCredit}}
                        </span>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>


<style>
.result-form{
    display: flex;
    flex-direction: row;
    padding: 15px;
    border: 1px solid #0072D9;
    border-radius: 8px;
    margin-bottom: 20px;
    border-top-width: thick;
    width: 45vw;
}

.result-cost{
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #0072D9;
    padding: 7px;
    margin: 0 10px 0 10px;
    max-height: fit-content;
    text-align: center;
}

.result-name{
    background-color:  #0072D9;
    color: #fff;
    border-radius: 12px;
    padding: 12px;
    margin: 0 10px 0 10px;
    text-align: center;
    margin-bottom: 10px;
    max-height: fit-content;
}
</style>