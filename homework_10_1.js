var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function isValidEmail(email) {
    const regex = /^[a-zA-Z0–9._-]+@(gmail.com|yahoo.com)$/;
    return regex.test(email);
}

let trustedEmails = arr.reduce(function(filtered, user) {
    if (isValidEmail(user.email)) {
        filtered.push(user.email);
    }

    return filtered;
}, []);
