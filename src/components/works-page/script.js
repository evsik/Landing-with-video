function createBlock(index) {
    return {
        photo_name: index.photo_name,
        photo_city: index.photo_city,
        photo_data: index.photo_data,
        id_obj: index.id_obj,
        createTemplates() {
            return `
            <div class="images-list">
                <img src="${this.photo_name}" alt="${this.photo_city}" class="images-link-img">
                <div class="image-list-hover">
                    <a href="${this.photo_name}" class="images-link-hover" target="_blank">
                        ${this.photo_city}
                        <br>
                        ${this.photo_data}
                    </a>
                </div>
            </div>
            `
        }
    }
}

let gallery = {
    items: [],
    container: ".contentUl",
    catalogUrl: ' https://raw.githubusercontent.com/evsik/Landing-with-video/master/photosData.json',

    init() {
        this.items = []
        this.getData(this.catalogUrl)
            .finally(() => {
                this._fetchItems()
                this._render()
            })
    },
    getData(url) {
        return fetch(url)
            .then(data => data.json())
            .then((data2) => {
                this.items = data2
            })
    },
    _fetchItems() {
        let arr = []

        this.items.forEach(item => {
            arr.push(createBlock(item))
        })
        console.log(arr)
        this.items = arr
    },
    _render() {
        let container = document.querySelector(this.container)
        let domString = ""

        this.items.forEach(item => {
            domString += item.createTemplates()
        })

        container.insertAdjacentHTML("beforeend", domString)
    }
}

gallery.init()