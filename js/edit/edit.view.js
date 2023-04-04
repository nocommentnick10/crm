export default class EditView{
    constructor(){

    }

    uiEls = {
        idEl: document.querySelector('#number'),
        dateEl: document.querySelector('#date'),
        productEl: document.querySelector('#product'),
        nameEl: document.querySelector('#name'),
        emailEl: document.querySelector('#email'),
        phoneEl: document.querySelector('#phone'),
        statusEl: document.querySelector('#status'),
        formEl: document.querySelector('#form')
    }

    renderEdits(dataObj){
        this.uiEls.idEl.innerText = dataObj.id
        this.uiEls.dateEl.innerText = new Date(dataObj.time).toLocaleString()
        this.uiEls.productEl.value = dataObj.product
        this.uiEls.nameEl.value = dataObj.name
        this.uiEls.emailEl.value = dataObj.email
        this.uiEls.phoneEl.value = dataObj.phone
        this.uiEls.statusEl.value = dataObj.status
    }

    gatherData(){
        return {
            product: this.uiEls.productEl.value,
            name: this.uiEls.nameEl.value,
            email: this.uiEls.emailEl.value,
            phone: this.uiEls.phoneEl.value,
            status: this.uiEls.statusEl.value
        }
    }

    dataSaved(){
        alert('Изменения сохранены')
    }
}