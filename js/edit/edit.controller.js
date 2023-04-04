import Model from './../model.js'
import EditView from './edit.view.js'

const model = new Model()
const view = new EditView()

class EditController{
    constructor(modelController, tableUiController){
        this.modelController = model
        this.tableUiController = view
    }

    renderEditPage(){
        // https://ru.hexlet.io/qna/javascript/questions/kak-poluchit-get-parametr-js
        let editId = new URL(window.location)
        editId = parseInt(editId.searchParams.get('id'))

        const dataObj = this.modelController.getDataObj(editId)
        this.tableUiController.renderEdits(dataObj)
    }

    saveData(){
        let editId = new URL(window.location)
        editId = parseInt(editId.searchParams.get('id'))

        const dataObj = this.tableUiController.gatherData()
        this.modelController.saveEdit(editId, dataObj)

        this.tableUiController.dataSaved()
    }
}

const editCtrl = new EditController(model, view)

view.uiEls.formEl.addEventListener('submit', e => {
    e.preventDefault()
    editCtrl.saveData()
})

window.onload = editCtrl.renderEditPage()