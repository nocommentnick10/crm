import Model from './../model.js'
import TableView from './table.view.js'

const model = new Model()
const view = new TableView()

class TableController{
    constructor(modelController, tableUiController){
        this.modelController = model
        this.tableUiController = view
    }

    showTable(){
        let dataArr = this.modelController.getTableData()
        this.tableUiController.renderData(dataArr)
        this.filterByProduct(this.modelController.filter.products)
        this.filterByStatus(this.modelController.filter.status)
        this.tableUiController.updateProductSelect(this.modelController.filter.products)
        const newItems = this.modelController.updateNew()
        this.tableUiController.updateNewView(newItems)
    }

    // Фильтры

    filterByProduct(filterVal){
        this.modelController.changeFilter(filterVal)
        const itemsToRender = this.modelController.filterItems()
        this.tableUiController.renderData(itemsToRender)
    }

    filterByStatus(filterVal){
        this.modelController.changeFilterStatus(filterVal)
        const itemsToRender = this.modelController.filterItems()
        this.tableUiController.renderData(itemsToRender)

        this.tableUiController.makeLeftPanelActive(filterVal)
    }
}

const tableCtrl = new TableController(model, view)

view.uiEls.productSelect.addEventListener('change', function(e) {
    e.preventDefault()
    tableCtrl.filterByProduct(this.value)
})

view.uiEls.topStatusBar.addEventListener('click', e => {
    e.preventDefault()
    tableCtrl.filterByStatus(e.target.dataset.value)
})

view.uiEls.leftPanelItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault()
        tableCtrl.filterByStatus(e.target.dataset.value)
    })
})

window.onload = tableCtrl.showTable()