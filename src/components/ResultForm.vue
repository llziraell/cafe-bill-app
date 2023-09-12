<script setup>
import { useResultStore } from "@/stores/ResultStore"
import { useUserStore } from "@/stores/UsersStore"

const newResult = useResultStore()
const newUser = useUserStore()
</script>

<template>
    {{ newResult.eatingOperations(newUser.users, newUser.dishes) }}
    <b-container
        class="bv-example-row mb-3"
        v-for="(result, index) in newResult.resultOperations"
        :key="index"
    >
        <b-row cols="2">
            <b-col sm="5">
                <div style="display: flex; flex-direction: row; text-align: center;">
                    <span class="result-name">
                        {{ result[0].nameCredit }}
                    </span>
                    <h5>в долгу y</h5>
                </div>
            </b-col>
            <b-col sm="7">
                <b-row
                    v-id="result.name"
                    v-for="resData in result"
                    class="d-flex"
                >
                    <div style="display: flex; flex-direction: row">
                        <span class="result-name">{{
                            resData.whomCredit
                        }}</span>
                        <div v-if="resData.whomCredit !== ' себя не бывает)))'" style="display: flex; flex-direction: row; text-align: center;">
                            <h5>на</h5>
                            <span class="result-cost">
                                {{ resData.eatCost.toFixed(2) }} Р</span
                            >
                        </div>
                    </div>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<style>
.bv-example-row {
    width: 80%;
    border: 1px solid #0072d9;
    border-radius: 8px;
    padding: 15px;
    border-top-width: thick;
}

.result-form {
    display: flex;
    flex-direction: row;
    padding: 15px;
    border: 1px solid #0072d9;
    border-radius: 8px;
    margin-bottom: 20px;
    border-top-width: thick;
    width: 45vw;
}

.result-cost {
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #0072d9;
    padding: 7px;
    margin: 0 10px 30px 10px;
    max-height: fit-content;
    text-align: center;
}

.result-name {
    background-color: #0072d9;
    color: #fff;
    border-radius: 12px;
    padding: 12px;
    margin: 0 10px 30px 10px;
    text-align: center;
    max-height: fit-content;
}
</style>
