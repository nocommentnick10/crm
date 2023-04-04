export default class TestData{
    constructor(name, phone, email, product){
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product
    }

    getRandomInt(max){
        return Math.floor(Math.random() * max)
    }

    insertInUi(){
        const random = this.getRandomInt(testData.length)
        const randomItem = testData[random]

        document.querySelector('#name').value = randomItem.name
        document.querySelector('#phone').value = randomItem.phone
        document.querySelector('#email').value = randomItem.email
        document.querySelector('#product').value = randomItem.product
    }
}

const testData = [
    new TestData('Никита', '89951146847', 'email1@gmail.com', 'course-html'),
    new TestData('Александ', '89646292930', 'email2@gmail.com', 'course-js'),
    new TestData('Алексей', '89981871434', 'email3@gmail.com', 'course-vue'),
    new TestData('Алияр', '89545073393', 'email4@gmail.com', 'course-php'),
    new TestData('Альберт', '89102031154', 'email5@gmail.com', 'course-wordpress'),
    new TestData('Анна', '89943959547', 'email6@gmail.com', 'course-html'),
    new TestData('Антон', '89851181730', 'email7@gmail.com', 'course-js'),
    new TestData('Анастасия', '89089657209', 'email8@gmail.com', 'course-vue')
]