export default class Model{
    constructor(){
        this.data = []
        this.getFromLocalStorage()
        this.filter = {
            'status': 'all',
            'products': 'all'
        }
        this.getFilterFromLocalStorage()
        this.productsTitles = {
            'course-html': 'Курс по верстке',
            'course-js': 'Курс по JavaScript',
            'course-vue': 'Курс по VUE JS',
            'course-php': 'Курс по PHP',
            'course-wordpress': 'Курс по WordPress'
        }

        this.statusTitles = {
            'new': 'Новый',
            'inwork': 'В работе',
            'complete': 'Завершенный'
        }

        this.badgeColors = {
            'new': 'badge-danger',
            'inwork': 'badge-warning',
            'complete': 'badge-success'
        }
    }

    // Работа с формой

    saveFormData(formData){
        let id = 0

        if(this.data.length > 0){
            id = this.data[this.data.length - 1]['id'] + 1
        }

        formData.id = id
        formData.time = new Date()
        formData.status = 'new'
        this.data.push(formData)
        this.setToLocalStorage()
    }

    setToLocalStorage(){
        localStorage.setItem('formData', JSON.stringify(this.data))
    }

    getFromLocalStorage(){
        const formData = localStorage.getItem('formData')
        formData ? this.data = JSON.parse(formData) : false
    }

    // Работа с формой

    // Работа с таблицей

    getTableData(){
        return this.data.map(item => {
            return {
                ...item,
                productTitle: this.productsTitles[item.product],
                statusTitle: this.statusTitles[item.status],
                date: new Date(item.time).toLocaleDateString('ru-Ru'),
                color: this.badgeColors[item.status]
            }
        })
    }

    updateNew(){
        let newItems = 0
        this.data.forEach(item => {
            if(item.status === 'new'){
                newItems += 1
            }
        })
        return newItems
    }

        // Фильтры

    changeFilter(filterVal){
        this.filter.products = filterVal
        localStorage.setItem('filterData', JSON.stringify(this.filter))
    }

    changeFilterStatus(filterVal){
        this.filter.status = filterVal
        localStorage.setItem('filterData', JSON.stringify(this.filter))
    }

    filterItems(){
        if(this.filter.products != 'all'
            && this.filter.status === 'all'){
            return this.data.filter(filter => filter.product === this.filter.products).map(item => {
                return {
                    ...item, 
                    productTitle: this.productsTitles[item.product],
                    statusTitle: this.statusTitles[item.status],
                    date: new Date(item.time).toLocaleDateString('ru-Ru'),
                    color: this.badgeColors[item.status]
                }
            })
        } else if(this.filter.products === 'all'
                    && this.filter.status != 'all') {
            return this.data.filter(filter => filter.status === this.filter.status).map(item => {
                return {
                    ...item, 
                    productTitle: this.productsTitles[item.product],
                    statusTitle: this.statusTitles[item.status],
                    date: new Date(item.time).toLocaleDateString('ru-Ru'),
                    color: this.badgeColors[item.status]
                }
        })} else if(this.filter.products != 'all'
                        && this.filter.status != 'all'){
            return this.data.filter(filter => filter.product === this.filter.products && filter.status === this.filter.status).map(item => {
                return {
                    ...item, 
                    productTitle: this.productsTitles[item.product],
                    statusTitle: this.statusTitles[item.status],
                    date: new Date(item.time).toLocaleDateString('ru-Ru'),
                    color: this.badgeColors[item.status]
                }
            })} else {
            return this.getTableData(this.data)
        }
    }

    getFilterFromLocalStorage(){
        const filterData = localStorage.getItem('filterData')
        filterData ? this.filter = JSON.parse(filterData) : false
    }

        // Фильтры

    // Работа с таблицей

    // Работа с редактированием

    getDataObj(editId){
        const dataObj = this.data.find(item => item.id === editId)
        return dataObj
    }

    saveEdit(dataId, dataObj){
        const dataObjInd = this.data.findIndex(item => item.id === dataId)
        this.data[dataObjInd]['product'] = dataObj.product
        this.data[dataObjInd]['name'] = dataObj.name
        this.data[dataObjInd]['email'] = dataObj.email
        this.data[dataObjInd]['phone'] = dataObj.phone
        this.data[dataObjInd]['status'] = dataObj.status
        this.setToLocalStorage()
    }

    // Работа с редактированием
}