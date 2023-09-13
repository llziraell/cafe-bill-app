<script setup>
import { useResultStore } from "@/stores/ResultStore"
import { useUserStore } from "@/stores/UsersStore"

const newResult = useResultStore()
const newUser = useUserStore()
</script>

<template>
    {{ newResult.eatingOperations(newUser.users, newUser.dishes) }}
    <b-container
        class="result-block mb-3"
        v-for="(result, index) in newResult.resultOperations"
        :key="index"
    >
        <b-row cols="2">
            <b-col sm="5">
                <div
                    style="
                        display: flex;
                        flex-direction: row;
                        text-align: center;
                    "
                >
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
                        <div
                            v-if="resData.whomCredit !== ' себя не бывает)))'"
                            style="
                                display: flex;
                                flex-direction: row;
                                text-align: center;
                            "
                        >
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

<style lang="scss">
$bgColor: #ffffff;
$bgFormColor: #0074d9;

@mixin border_form($b-w, $b-c) {
    border: 1px solid $b-c;
    border-radius: $b-w;
}

@mixin flex($direction) {
    display: flex;
    flex-direction: $direction;
}

.result-block {
    width: 80%;
    @include border_form(8px, $bgFormColor);
    padding: 15px;
    border-top-width: thick;
}

.result-form {
    @include flex(row);
    padding: 15px;
    @include border_form(8px, $bgFormColor);
    margin-bottom: 20px;
    border-top-width: thick;
    width: 45vw;
}

.result-cost {
    background-color: $bgColor;
    @include border_form(15px, $bgFormColor);
    padding: 7px;
    margin: 0 10px 30px 10px;
    max-height: fit-content;
    text-align: center;
}

.result-name {
    background-color: $bgFormColor;
    color: $bgColor;
    @include border_form(12px, $bgFormColor);
    padding: 12px;
    margin: 0 10px 30px 10px;
    text-align: center;
    max-height: fit-content;
}
</style>
