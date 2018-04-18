// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
    id: 'io.framework7.testapp',
    root: '#app',
    theme: theme,
    data: function () {
        return {
            user: {
                firstName: 'bill',
                lastName: 'jiang',
            },
        };
    },
    methods: {
        helloWorld: function () {
            app.dialog.alert('Hello World!');
        },
        signIn: function () {
            var $ = this.$;
            var app = this.$app;
            var router = this.$router;
            var username = $('input#demo-username-2').val();
            var password = $('input#demo-password-2').val();
            app.dialog.alert('Username: ' + username + '<br>Password: ' + password, function () {
                app.loginScreen.close();
                router.back();
            })
        }
    },
    routes: routes,
    vi: {
        placementId: 'pltd4o7ibb9rc653x14',
    },
});
