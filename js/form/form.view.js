export default class FormView{
    constructor(){
        
    }

    uiEls = {
        form: document.querySelector('#form'),
        name: document.querySelector('#name'),
        phone: document.querySelector('#phone'),
        email: document.querySelector('#email'),
        product: document.querySelector('#product'),
        btn: document.querySelector('.btn')
    }

    gatherData(){
        const phonePattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
        const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
        const isValidName = this.uiEls.name.value.trim() != ''
        const isNotEmptyPhone = this.uiEls.phone.value.trim() != ''
        const isValidPhone = phonePattern.test(this.uiEls.phone.value.trim()) === true
        const isNotEmptyEmail = this.uiEls.email.value.trim() != ''
        const isValidEmail = emailPattern.test(this.uiEls.email.value.trim()) === true

        if(!isValidName){
            const markup = `<span style="color: red" data-errname="">Введите имя</span>`
            this.uiEls.name.insertAdjacentHTML('afterend', markup)
            setTimeout(function(){
                document.querySelector('[data-errname]').remove()
            }, 5000)
        }

        if(!isNotEmptyPhone){
            const markup = `<span style="color: red" data-errphone="">Введите номер телефона</span>`
            this.uiEls.phone.insertAdjacentHTML('afterend', markup)
            setTimeout(function(){
                document.querySelector('[data-errphone]').remove()
            }, 5000)
        }

        if(!isValidPhone){
            const markup = `<span style="color: red" data-errphonevalid="">Введите корректный номер</span>`
            this.uiEls.phone.insertAdjacentHTML('afterend', markup)
            setTimeout(function(){
                document.querySelector('[data-errphonevalid]').remove()
            }, 5000)
        }

        if(!isNotEmptyEmail){
            const markup = `<span style="color: red" data-erremail="">Введите email</span>`
            this.uiEls.email.insertAdjacentHTML('afterend', markup)
            setTimeout(function(){
                document.querySelector('[data-erremail]').remove()
            }, 5000)
        }

        if(!isValidEmail){
            const markup = `<span style="color: red" data-erremailvalid="">Введите корректный email</span>`
            this.uiEls.email.insertAdjacentHTML('afterend', markup)
            setTimeout(function(){
                document.querySelector('[data-erremailvalid]').remove()
            }, 5000)
        }

        if(isValidName
            && isNotEmptyPhone
            && isValidPhone
            &&  isNotEmptyEmail
            && isValidEmail){
                return {
                    name: this.uiEls.name.value.trim(),
                    phone: this.uiEls.phone.value.trim(),
                    email: this.uiEls.email.value.trim(),
                    product: this.uiEls.product.value,
                }
        } else {
            return false
        }
    }

    showErr(){
        alert('Введите верные данные')
    }

    addedData(){
        alert('Заявка добавлена')
    }
}