const app = new Vue ({
    el: `#app`,
    data: {
        mail: ``,
        mailList: [],
    },
    mounted() {
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then((elm) => {
            for (let i = 0; i < 10; i++) {
                this.mail = elm.data.response
                this.mailList.push(this.mail)
            }
            console.log(this.mailList)
        })
    }
})