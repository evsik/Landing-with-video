//ПЕРЕДЕЛАТЬ НА JSON


let IMAGES = ["../images/tinified/1.jpg", "../images/tinified/2.jpg", "../images/tinified/3.jpg",
    "../images/tinified/4.jpg", "../images/tinified/5.jpg", "../images/tinified/6.jpg", "../images/tinified/7.jpg",
    "../images/tinified/8.jpg", "../images/tinified/9.jpg", "../images/tinified/10.jpg", "../images/tinified/11.jpg",
    "../images/tinified/12.jpg", "../images/tinified/13.jpg", "../images/tinified/14.jpg", "../images/tinified/15.jpg",
    "../images/tinified/16.jpg", "../images/tinified/17.jpg", "../images/tinified/18.jpg", "../images/tinified/19.jpg",
    "../images/tinified/20.jpg"]

let CITY = ["Moscow", "Budapest", "Budapest", "Budapest", "Budapest", "Budapest",
    "Montenegro", "Paris", "Prague", "Budapest", "Moscow", "Budapest",
    "Budapest", "Budapest", "Moscow", "Budapest", "Paris", "Paris", "Paris",
    "Paris"]

let DATES = ["21.11.2020", "8.08.2018", "8.08.2018", "7.08.2018", "7.08.2018",
    "7.08.2018", "6.08.2019", "28.03.2019", "4.06.2019", "7.08.2018",
    "25.08.2019", "7.08.2018", "8.08.2018", "6.08.2018", "3.10.2020",
    "7.08.2018", "27.03.2019", "28.03.2019", "28.03.2019", "29.03.2019"]

function createBlock(index) {
    return {
        // blockImg: IMAGES[index],
        // blockCity: CITY[index],
        // blockData: DATES[index],
        blockImg: index.photo_name,
        blockCity: index.photo_city,
        blockData: index.photo_data,
        blockId: index.id_obj,
        createTemplates() {
            return `
            <div class="images-list">
                <img src="${this.blockImg}" alt="${this.blockCity}" class="images-link-img">
                <div class="image-list-hover">
                    <a href="${this.blockImg}" class="images-link-hover" target="_blank">
                        ${this.blockCity}
                        <br>
                        ${this.blockData}
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
    catalogUrl: 'https://raw.githubusercontent.com/evsik/JavaScript/master/catalogData.json',

    init() {
        this.items = []
        this.getData(this.catalogUrl)
            .finally(() => {
                this._fetchItems()
                this._render()
            })
    },

    _fetchItems() {
        // let length = IMAGES.length;
        //
        // for (let i = 0; i < length; i++) {
        //     this.items.push(createBlock(i))
        // }
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