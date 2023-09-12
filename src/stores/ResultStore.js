import { defineStore } from "pinia"

export const useResultStore = defineStore("result", {
    state: () => ({
        whoToWhom: [],
        users: [],
        resultOperations: [],
    }),
    actions: {
        eatingOperations(users, dishes) {
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

            this.whoToWhom.map((el) => {
                const groupedCosts = el.cost.reduce((accum, curr) => {
                    if ((el.name !== curr.whomCredit && curr.whoCredit.find(item => item === el.name))) {
                        const existingItem = accum.find(
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
                        accum = accum.filter(
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
