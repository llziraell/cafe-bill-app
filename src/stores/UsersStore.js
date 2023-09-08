import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
        dishes: [],
        isValidArray: [],
    }),
    actions: {
        addUserForm() {
            const newUser = {
                id: Date.now(),
                name: "",
                nameState: false,
            }
            this.users.push(newUser)
        },
        addNewUser(id, name) {
            this.users.map((el) => {
                if (el.id === id) {
                    el.name = name
                }
            })
        },
        deleteUserForm(id) {
            this.users = this.users.filter((el) => el.id !== id)
        },
        addDishForm(users) {
            let newDish = {
                id: Date.now(),
                dish: "",
                cost: "",
                whoPay: "",
                whoEat: [],
                users: [...users],
                selectAllChecked: false,
                isValid: false,
            }
            this.dishes.push(newDish)
        },
        deleteDishForm(id) {
            this.dishes = this.dishes.filter((el) => el.id !== id)
        },
        addNewDish(id, dish) {
            this.dishes.map((el) => {
                if (el.id === id) {
                    el.dish = dish
                }
            })
        },
        addNewCost(id, cost) {
            this.dishes.map((el) => {
                if (el.id === id) {
                    el.cost = cost
                }
            })
        },
        selectWhoPay(id, selected) {
            this.dishes.map((el) => {
                if (el.id === id) {
                    el.whoPay = selected.name
                }
            })
        },
        selectAllUsers() {
            const users = this.users.map((el) => el.name)
            for (let item of this.dishes) {
                item.users = users
            }
        },
    },
})
