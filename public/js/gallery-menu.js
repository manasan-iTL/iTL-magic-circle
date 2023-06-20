
const galleryForm = document.getElementById("js-gallery-select-box")

galleryForm.addEventListener("change", (e) => {
    console.log(e.currentTarget.value)

    location.href = e.currentTarget.value
})