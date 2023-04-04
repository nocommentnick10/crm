import Model from './../model.js'
import FormView from './form.view.js'
import TestData from './form.test-data.js'

const model = new Model()
const view = new FormView()
const test = new TestData()

class FormController{
    constructor(modelController, formUiController){
        this.modelController = model
        this.formUiController = view
    }

    makeRequest(){
        const formData = this.formUiController.gatherData()
        formData ? this.modelController.saveFormData(formData) : false
        test.insertInUi()
        this.formUiController.addedData()
    }
}

const formCtrl = new FormController(model, view)

view.uiEls.form.addEventListener('submit', e => {
    e.preventDefault()
    formCtrl.makeRequest()
})

window.onload = test.insertInUi()