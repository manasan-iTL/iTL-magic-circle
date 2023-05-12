
// DOM要素の取得
const prevBtn = document.getElementById("js-arrow-left")
const nextBtn = document.getElementById("js-arrow-right")
const members_introduce = document.querySelectorAll(".member-container")
const items = document.querySelectorAll(".slide")

// Sliderを実装するうえで使用する状態を管理するクラス

class SliderState {

    LIMIT_SLIDER_ITEM_PC;
    LIMIT_SLIDER_ITEM_TABLET;
    LIMIT_SLIDER_ITEM_SP;

    #limitCountItem;
    #countClick;
    #currentBeginIndex;
    #currentEndIndex;

    constructor() {
        this.LIMIT_SLIDER_ITEM_PC = 5;
        this.LIMIT_SLIDER_ITEM_TABLET = 3;
        this.LIMIT_SLIDER_ITEM_SP = 1;
        this.#limitCountItem = 0;
        this.#countClick = 0;
        this.#currentBeginIndex = 0;
        this.#currentEndIndex = 0;
    }

    initState(windowWidth) {
         // Windows幅による表示要素数の初期化
         this.#limitCountItem = windowWidth >= 1080 ? this.LIMIT_SLIDER_ITEM_PC: windowWidth > 820 ? this.LIMIT_SLIDER_ITEM_TABLET: this.LIMIT_SLIDER_ITEM_SP

        // 表示されているスライダーの最後のインデックス
        this.#currentEndIndex = this.#limitCountItem - 1
        }
        
    getLimitCountItem() {
        return this.#limitCountItem
    }
        
    getCountClick() {
        return this.#countClick
    }

    getCurrentBeginIndex() {
        return this.#currentBeginIndex
        }

    getCurrentEndIndex() {
        return this.#currentEndIndex
    }

    incrementCountClick(countAllSliderItem) {
        if (this.#countClick >= countAllSliderItem -1) return
        this.#countClick = this.#countClick + 1
        return true
    }

    decrementCountClick() {
        if (this.#countClick <= 0) return 
        this.#countClick = this.#countClick - 1
        return true
        }

    incrementCurrentIndex(countAllSliderItem) {
        if (this.#currentEndIndex >= countAllSliderItem - 1) return

        this.#currentEndIndex = this.#currentEndIndex + 1
        this.#currentBeginIndex = this.#currentBeginIndex + 1

        return true
}

    decrementCurrentIndex() {
        if (this.#currentBeginIndex <= 0) return
        if (this.#currentBeginIndex !== this.#countClick) return

        this.#currentEndIndex = this.#currentEndIndex - 1
        this.#currentBeginIndex = this.#currentBeginIndex - 1

        return true
    }
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

    if (isPc && currentBeginIndex >= items.length - LIMIT_SLIDER_ITEM_PC) {
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

/*

以下クラスのインスタンス化、関数呼び出しを行う。＝＝コードの本文

*/


// SliderStateの初期化
const slider = new SliderState()

        console.log("実行")

        if (isPc && currentBeginIndex >= items.length - LIMIT_SLIDER_ITEM_PC + 1 ) {
            return
        }
        currentBeginIndex = currentBeginIndex - 1
        currentEndIndex = currentEndIndex - 1

        console.log(currentBeginIndex, currentEndIndex, count_introduce)
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