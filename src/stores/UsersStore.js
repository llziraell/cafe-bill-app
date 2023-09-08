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
    },
})
