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



// filter
const applyFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale})`;
}


filterOptions.forEach((option) => {
    option.addEventListener("click", () => {
        document.querySelector('.active').classList.remove('active')
        option.classList.add('active')
        filterName.innerText = option.innerText;

        if(option.id === 'brightness'){
            filterSlider.max = '200'
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`
        }
        else if(option.id === 'saturation'){
            filterSlider.max = '200'
            filterSlider.value = saturation;
            filterValue.innerText = `${saturation}%`
        }
        else if(option.id === 'inversion'){
            filterSlider.max = '100'
            filterSlider.value = inversion;
            filterValue.innerText = `${inversion}%`
        }
        else {
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}%`;
        }
    })
});


//  updata filter
const updataFilter = () => {
    filterValue.innerText = `${filterSlider.value}%`
    const selectedFilter = document.querySelector('.filter .active')

    if(selectedFilter.id = 'brightness'){
        brightness = filterSlider.value
    }
    else if (selectedFilter.id = 'saturation'){
        saturation = filterSlider.value
    }
    else if (selectedFilter.id = 'inversion'){
        inversion = filterSlider.value
    }
    else {
        grayscale = filterSlider.value
    }
}

