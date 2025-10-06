const  fileInput= document.querySelector('.file-input')
const filterOptions = document.querySelector('.filter button')
const filterName = document.querySelector('.filter-info .name')
const filterValue = document.querySelector('.filter-info .value')
const filterSlider = document.querySelector('.slider input') 
const rotateOptions = document.querySelectorAll('.rotate button')
const previewImg = document.querySelector('.preview-img img')
const resetFilterBtn = document.querySelector('.reset-filter')
const chooseImgBtn = document.querySelector('.choose-img')
const saveImgBtn = document.querySelector('.save-img')


let brightness = '100', saturation = '100', inversion = '0', grayscale = '0';
let rotate = 0, flipHorizontal = 1, flipVertical  = 1;


// load image
const loadImage = () => {
    let file =  fileInput.files[0]
    if (!file) return;
    
    previewImg.src = URL.createObjectURL(file)
    previewImg.addEventListener("load", () => {
        resetFilterBtn.click()
        document.querySelector(".container").classList.remove('disable');
    })
}