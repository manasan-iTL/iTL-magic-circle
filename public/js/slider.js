
console.log(window.innerWidth)

// 定数の定義
const LIMIT_SLIDER_ITEM_PC = 5
const LIMIT_SLIDER_ITEM_TABLET = 3
const LIMIT_SLIDER_ITEM_SP = 1
let currentIndex = 1

// 要素を非表示にする関数

const disableSliderItem = () => {
    const items = document.querySelectorAll(".slide")
    console.log(items)

    const windowWidth = window.innerWidth
    console.log(windowWidth)
    if (windowWidth >= 1080) {
        console.log("PCサイズ")
        for (let i = LIMIT_SLIDER_ITEM_PC - 1; i++; i < items.length) {
            if (i == items.length ) return 
            items[i].classList.toggle("disactive")
            items[i].classList.toggle("move-to-left")
        }
    } else if ( (windowWidth < 1080) && (windowWidth >= 550)) {
        console.log("タブレットサイズ")
        for (let i = LIMIT_SLIDER_ITEM_TABLET - 1; i++; i < items.length) {
            if (i == items.length) return 
            items[i].classList.toggle("disactive")
            items[i].classList.toggle("move-to-left")
        }
    } else if (windowWidth < 550) {
        console.log("SPサイズ")
        for (let i = LIMIT_SLIDER_ITEM_SP - 1; i++; i < items.length) {
            if (i == items.length ) return 
            items[i].classList.toggle("disactive")
            items[i].classList.toggle("move-to-left")
        }
    } 
}

// 対象要素を非表示にする関数
// const toggleDisplayNone = ()

window.addEventListener('load', () => {
    disableSliderItem()
})