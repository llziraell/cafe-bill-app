import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
        dishes: [],
        validDishForms: [],
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
        validDishForm() {
            this.validDishForms = []
            this.dishes.map((el) => {
                this.validDishForms.push(el.isValid)
            })
            const even = (el) => el === false
            console.log(this.validDishForms)
            return !this.validDishForms.some(even)
        },
        popUser(index, currentUser) {
            this.dishes[index].whoEat = this.dishes[index].whoEat.filter(
                (el) => el !== currentUser
            )
        },
        unvalidDishes() { //валидность всех dish-форм
            const dishCounts = {}

            for (let dish of this.dishes) {
                if (
                    dish.dish === "" ||
                    dish.cost === "" ||
                    dish.whoPay === "" ||
                    dish.whoEat.length === 0
                ) {
                    dishCounts[dish.dish] = 1
                }
                if (dish.cost <= 0) {
                    dishCounts[dish.dish] = 1
                }
                if (dishCounts[dish.dish]) {
                    dishCounts[dish.dish]++
                } else {
                    dishCounts[dish.dish] = 1
                }
            }

            return Object.values(dishCounts).some((count) => count > 1)
        },
        unvalidNames() { //валидность всех user-форм
            const nameCounts = {}
            if (this.users.length === 0) {
                nameCounts["disabled"] = 1
            }
            for (let name of this.users) {
                if (name.name === "") {
                    nameCounts[name.name] = 1
                }
                if (name.nameState === false) nameCounts[name.name] = 1
                if (this.users.length < 2) nameCounts[name.name] = 1
                if (nameCounts[name.name]) {
                    nameCounts[name.name]++
                } else {
                    nameCounts[name.name] = 1
                }
            }
            return Object.values(nameCounts).some((count) => count > 1)
        },
        checkName(id) { //валидность user-инпута
            this.users.map((user) => {
                if (user.id === id) {
                    if (user.name.length < 3 || user.name.length > 9) {
                        user.nameState = false
                    } else {
                        user.nameState = true
                    }
                }
            })
        },
        checkDish(id) { //валидность dish-инпута
            this.dishes.map((dish) => {
                if (dish.id === id) {
                    if (
                        dish.whoEat.length === 0 ||
                        dish.whoPay === undefined ||
                        dish.dish.length < 3 ||
                        dish.dish.length > 15 ||
                        dish.cost > 50000 ||
                        dish.cost <= 0
                    ) {
                        dish.isValid = false
                    } else {
                        dish.isValid = true
                    }
                }
            })
        },
    },
})
