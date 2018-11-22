class User {
    constructor(picture, name, email, age) {
        this.picture = picture;
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getHiddenEmail() {
        const emailParts = this.email.split("@");

        const splited = emailParts[0].split("");
        splited.splice(3, splited.length - 6, "...");

        return splited.join("") + '@' + emailParts[1];
    }

}

export default User