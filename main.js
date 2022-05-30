const app = new Vue ({
    el: `#app`,
    data: {
        mailList: [],
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then((elm) => {
                console.log(elm.data.response)
                this.mailList.push(elm.data.response)
            })
        }
    }
})