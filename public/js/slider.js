
console.log(window.innerWidth)

// 定数の定義
const LIMIT_SLIDER_ITEM_PC = 5
const LIMIT_SLIDER_ITEM_TABLET = 3
const LIMIT_SLIDER_ITEM_SP = 1
let currentBeginIndex = 0
let currentEndIndex = 0
let isPc = false
let isTablet = false
let isSp = false
let count_introduce = 0
const prevBtn = document.getElementById("js-arrow-left")
const nextBtn = document.getElementById("js-arrow-right")
const members_introduce = document.querySelectorAll(".member-container")


// 要素を非表示にする関数

const disableSliderItem = () => {
    const items = document.querySelectorAll(".slide")
    console.log(items)

    const windowWidth = window.innerWidth
    console.log(windowWidth)
    if (windowWidth >= 1080) {
        console.log("PCサイズ")

        isPc = true

        // Indexの計算
        currentEndIndex = LIMIT_SLIDER_ITEM_PC - 1

        // 非表示にする
        for (let i = LIMIT_SLIDER_ITEM_PC - 1; ++i; i < items.length) {
            if (i == items.length ) return 
            items[i].classList.toggle("disactive")
            items[i].classList.toggle("move-to-left")
        }
    } else if (windowWidth > 820) {
        console.log("タブレットサイズ")
        
        isTablet = true
        
        // Indexの計算
        currentEndIndex = LIMIT_SLIDER_ITEM_TABLET - 1

        // 非表示にする
        for (let i = LIMIT_SLIDER_ITEM_TABLET - 1; ++i; i < items.length) {
            if (i == items.length) return 
            items[i].classList.toggle("disactive")
            items[i].classList.toggle("move-to-left")
        }
    } else  {
        console.log("SPサイズ")

        isSp = true

        // Indexの計算
        currentEndIndex = LIMIT_SLIDER_ITEM_SP - 1

        // 非表示にする
        for (let i = LIMIT_SLIDER_ITEM_SP - 1; ++i; i < items.length) {
            console.log(i)
            if (i == items.length ) return 
            items[i].classList.toggle("disactive")
            items[i].classList.toggle("move-to-left")
        }
    } 
}

// スライだー非表示要素の切り替え
const checkDisableSliderItem = (PREFIX) => {
    const items = document.querySelectorAll(".slide")

    if (isPc && count_introduce >= LIMIT_SLIDER_ITEM_PC - 1 ) {
        return
    }

    // if (isTablet && count_introduce >= LIMIT_SLIDER_ITEM_TABLET - 1) {
    //     return
    // }

    // if (isSp && count_introduce >= LIMIT_SLIDER_ITEM_SP - 1) {
    //     return
    // }

    if (PREFIX === "ADD") {
        console.log(currentBeginIndex, currentEndIndex, count_introduce)
        items[currentBeginIndex - 1].classList.toggle("disactive")
        items[currentEndIndex].classList.toggle("disactive")
        items[currentEndIndex].style.transform = "translateX(0)"
    } else if (PREFIX === "REDUCE") {
        console.log(currentBeginIndex, currentEndIndex, count_introduce)
        items[currentBeginIndex].classList.toggle("disactive")
        items[currentEndIndex + 1].classList.toggle("disactive")
    }
}

// 自己紹介セクションの非表示の切り替え

const checkDisableMemberIntroduceItem = (PREFIX) => {

    if (PREFIX === "ADD") {
        members_introduce[count_introduce - 1].classList.toggle("disactive")
        members_introduce[count_introduce].classList.toggle("disactive")
    } else {
        members_introduce[count_introduce + 1].classList.toggle("disactive")
        members_introduce[count_introduce].classList.toggle("disactive")
    }
}

// 矢印要素を非表示にする関数
const checkDisableArrowItem = (beginIndex, endIndex) => {

    const items = document.querySelectorAll(".slide")

    // 表示
    if (count_introduce !== 0 && prevBtn.classList.contains("disabled")) {
        prevBtn.classList.toggle("disabled")
    } else if (count_introduce !== items.length - 1 && nextBtn.classList.contains("disabled")) {
        nextBtn.classList.toggle("disabled")
    }

    // 非表示
    if (count_introduce === 0) {
        prevBtn.classList.toggle("disabled")
    } else if (count_introduce === items.length - 1) {
        nextBtn.classList.toggle("disabled")
    }
}


// 現在の始めと終わりIndexを計算する
const calcIndex = (PREFIX) => {

    const items = document.querySelectorAll(".slide")

    if (isPc && count_introduce - 1 >= LIMIT_SLIDER_ITEM_PC - 1) {
        if (PREFIX === "ADD") {
            count_introduce++
        } else {
            count_introduce--
        }
        return
    }

    // if (isTablet && count_introduce - 1 >= LIMIT_SLIDER_ITEM_TABLET - 1) {
    //     if (PREFIX === "ADD") {
    //         count_introduce++
    //     } else {
    //         count_introduce--
    //     }
    //     return
    // }

    // if (isSp && count_introduce - 1 >= LIMIT_SLIDER_ITEM_SP - 1) {
    //     if (PREFIX === "ADD") {
    //         count_introduce++
    //     } else {
    //         count_introduce--
    //     }
    //     return
    // }

    if (PREFIX === "ADD") {

        count_introduce++
        if (isPc && currentBeginIndex >= 3 && count_introduce <= 2) return 
        // if (isTablet && currentBeginIndex >= 3 && count_introduce <= 2) return 
        // if (isPc && currentBeginIndex >= 3 && count_introduce <= 2) return 
        console.log("koko実行") 
        currentBeginIndex = currentBeginIndex + 1
        if (currentEndIndex == items.length - 1) {
            return
        }
        currentEndIndex = currentEndIndex + 1
    } else {

        count_introduce--

        if (currentBeginIndex === 0) {
            return
        } 

        console.log("実行")

        console.log(currentBeginIndex, currentEndIndex)
        currentBeginIndex = currentBeginIndex - 1
        currentEndIndex = currentEndIndex - 1
    }
}

window.addEventListener('load', () => {
    disableSliderItem()
    checkDisableArrowItem(currentBeginIndex, currentEndIndex)
})

prevBtn.addEventListener("click", (e) => {
    console.log("前へ")
    calcIndex("REDUCE")
    checkDisableArrowItem(currentBeginIndex, currentEndIndex)
    checkDisableSliderItem("REDUCE")
    checkDisableMemberIntroduceItem("REDUCE")
})

nextBtn.addEventListener("click", (e) => {
    console.log("次へ")
    calcIndex("ADD")
    checkDisableArrowItem(currentBeginIndex, currentEndIndex)
    checkDisableSliderItem("ADD")
    checkDisableMemberIntroduceItem("ADD")
})