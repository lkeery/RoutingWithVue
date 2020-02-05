export default {
    template: `
    <section>
        <h1>Welcome to my App!</h1>
        <button @lick="registerUser">Register</button>
    </section>
    `,

    data: function() {
        return {
            message: 'Welcome to my awesome app'
        }
    },

    methods: {
        registerUser() {
            console.log('user registered');
        }
    }
}