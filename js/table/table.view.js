export default class TableView{
    constructor(){

    }

    uiEls = {
        table: document.querySelector('#tbody'),
        productSelect: document.querySelector('#productSelect'),
        topStatusBar: document.querySelector('#topStatusBar'),
        leftPanel: document.querySelector('.left-panel__navigation'),
        leftPanelItems: document.querySelectorAll('[data-role]'),
        badgeNew: document.querySelector('#badge-new')
    }

    renderData(dataArr){
        this.uiEls.table.replaceChildren()
        dataArr.forEach(item => {
            const markup = `
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.date}</td>
                <td>${item.productTitle}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>
                    <div class="badge badge-pill ${item.color}">${item.statusTitle}</div>
                </td>
                <td>
                    <a href="edit.html?id=${item.id}">Редактировать</a>
                </td>
            </tr>
            `
            this.uiEls.table.insertAdjacentHTML('beforeend', markup)
        })
    }

    makeLeftPanelActive(filterVal){
        this.uiEls.leftPanelItems.forEach(item => item.classList.remove('active'))
        this.uiEls.leftPanel.querySelector(`[data-value="${filterVal}"]`).classList.add('active')
    }

    updateNewView(newitems){
        this.uiEls.badgeNew.innerText = newitems
    }

    updateProductSelect(productsVal){
        this.uiEls.productSelect.value = productsVal
    }
}