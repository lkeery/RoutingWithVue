export default {
    template: `
    <section>
    <h1>Welcome to the app dashboard!</h1>
        <form id="my-form">
        <label for="username">Enter Username:</label>
        <input v-model="uname" type="text" name="username" required placeholder="Username">

        <label for="password">Enter Password:</label>
        <input v-model="pword" type="password" name="password" required placeholder="Password">

        <input @click="submitData" type="submit" value="submit">
        </form> 
    </section>
    `,

    data: function() {
        return {
            uname: "",
            pword: ""
        }
    },

    methods: {
        submitData() {
            debugger;
        }
    }
}