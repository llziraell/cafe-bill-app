import { defineStore } from "pinia"

export const useResultStore = defineStore("result", {
    state: () => ({
        whoToWhom: [], //транзакции кто-кому должен
        users: [],
        resultOperations: [], //отредактированные выводимые транзакции
    }),
    actions: {
        eatingOperations(users, dishes) {
            //формируем массив транзакций кто-кому должен
            this.users.push(users.map((el) => el.name))
            for (let item of users) {
                const newWhoToWhom = {
                    name: item.name,
                    cost: [],
                }
                this.whoToWhom.push(newWhoToWhom)
            }

            dishes.map((item) => {
                const credit = {
                    eatCost: item.cost / item.whoEat.length,
                    whomCredit: item.whoPay,
                    whoCredit: item.whoEat,
                }

                this.whoToWhom.map((el) => {
                    el.cost.push(credit)
                })
            })

            //извлечение одинаковых исходов транзакций и суммирование сумм долга
            this.whoToWhom.map((el) => {
                const groupedCosts = el.cost.reduce((accum, curr) => {
                    //для текущего пользователя - если он не платил, но ел
                    if (
                        el.name !== curr.whomCredit &&
                        curr.whoCredit.find((item) => item === el.name)
                    ) {
                        const existingItem = accum.find(
                            //ищем долги с одинаковым пользователем, которому должны
                            (item) => item.whomCredit === curr.whomCredit
                        )
                        if (typeof existingItem != "undefined") {
                            existingItem.eatCost += curr.eatCost
                        } else {
                            accum.push({
                                whomCredit: curr.whomCredit,
                                eatCost: curr.eatCost,
                                nameCredit: el.name,
                            })
                        }
                    } else {
                        //во всех других случаях
                        accum = accum.filter(
                            //исключаем повторяющийся исход
                            (el) => el.whomCredit !== " себя не бывает)))"
                        )
                        accum.push({
                            whomCredit: " себя не бывает)))",
                            eatCost: curr.eatCost,
                            nameCredit: el.name,
                        })
                    }
                    return accum
                }, [])
                this.resultOperations.push(groupedCosts)
            })
        },
    },
})
