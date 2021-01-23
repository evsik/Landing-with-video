//ПЕРЕДЕЛАТЬ НА JSON


// let IMAGES = ["../images/tinified/6.jpg", "../images/tinified/7.jpg",
//     "../images/tinified/8.jpg", "../images/tinified/9.jpg", "../images/tinified/10.jpg", "../images/tinified/11.jpg",
//     "../images/tinified/12.jpg", "../images/tinified/13.jpg", "../images/tinified/14.jpg", "../images/tinified/15.jpg",
//     "../images/tinified/16.jpg", "../images/tinified/17.jpg", "../images/tinified/18.jpg", "../images/tinified/19.jpg",
//     "../images/tinified/20.jpg"]
//
// let CITY = ["Budapest",
//     "Montenegro", "Paris", "Prague", "Budapest", "Moscow", "Budapest",
//     "Budapest", "Budapest", "Moscow", "Budapest", "Paris", "Paris", "Paris",
//     "Paris"]
//
// let DATES = ["7.08.2018", "6.08.2019", "28.03.2019", "4.06.2019", "7.08.2018",
//     "25.08.2019", "7.08.2018", "8.08.2018", "6.08.2018", "3.10.2020",
//     "7.08.2018", "27.03.2019", "28.03.2019", "28.03.2019", "29.03.2019"]

function createBlock(index) {
    return {
        // blockImg: IMAGES[index],
        // blockCity: CITY[index],
        // blockData: DATES[index],
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