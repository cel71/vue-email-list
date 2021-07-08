new Vue (
    {
        el: "#app",
        data: {
            emails: [],
        },
        created () {
            this.generaEmail ();
        },
        methods: {
            generaEmail: function () {
                for (let x = 1; x <= 10; x++) {
                    axios.get(" https://flynn.boolean.careers/exercises/api/random/mail")
                    .then ((response) => {
                        this.emails.push (response.data.response);
                    });
                };                
            },
        },
    }
);

