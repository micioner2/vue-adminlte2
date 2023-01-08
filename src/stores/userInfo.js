import { defineStore } from 'pinia'

export const infoUser = defineStore('user',{
    state(){
        return{ 
            userInfo: {}
        }
    },

    actions:{
        setUser(user){
            this.userInfo = user;
        }
    }
})