
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

/*

    UIを操作する関数群

*/


// ロード時にウィンドウ幅からあふれるスライダー要素を非表示にする関数
const initDisableSliderItem = (items, limitCountItem) => {
    for (let i = limitCountItem; i < items.length; i++) { 
        items[i].classList.toggle("disactive")
        items[i].classList.toggle("move-to-left")
    }
}

// 矢印ボタンの動きに合わせて、スライダー要素を非表示・表示する関数
const toggleDisableSliderItem = (PREFIX, currentBeginIndex, currentEndIndex) => {
    if (PREFIX === "ADD") {
        items[currentBeginIndex - 1].classList.toggle("disactive")
        items[currentEndIndex].classList.toggle("disactive")
        items[currentEndIndex].style.transform = "translateX(0)"　// 表示する際にウィンドウ外にある要素を移動させる必要がある
    } else if (PREFIX === "REDUCE") {
        items[currentBeginIndex].classList.toggle("disactive")
        items[currentBeginIndex].style.transform = "translateX(0)"
        items[currentEndIndex + 1].classList.toggle("disactive")
    }
}

// 矢印ボタンの表示・非表示を切り替える関数
const toggleDisplayArrowBtn = (countClick, countAllSliderItem) => {

    // 表示
    if (countClick !== 0 && prevBtn.classList.contains("disabled")) {
        prevBtn.classList.toggle("disabled")
    } else if (countClick !== countAllSliderItem - 1 && nextBtn.classList.contains("disabled")) {
        nextBtn.classList.toggle("disabled")
    }

    // 非表示
    if (countClick === 0) {
        prevBtn.classList.toggle("disabled")
    } else if (countClick === countAllSliderItem - 1) {
        nextBtn.classList.toggle("disabled")
    }
}

// 矢印の動きに合わせて、自己紹介セクションを表示・非表示する関数
const toggleDisplayIntroSection = (PREFIX, countClick) => {

        if (PREFIX === "ADD") {
        members_introduce[countClick - 1].classList.toggle("disactive")
        members_introduce[countClick].classList.toggle("disactive")
        } else {
        members_introduce[countClick + 1].classList.toggle("disactive")
        members_introduce[countClick].classList.toggle("disactive")
        }
    }



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