class PopupManager {
    
    static showPopup(recipe) {
        var popup = document.getElementById('popup');
        popup.style = 'display: flex';

        let content = document.getElementById('popup-content');
        content.innerHTML = `
<button class="popup-close" onclick="PopupManager.closePopup()">&times;</button>
<h1 class="text-center">${recipe.name}</h1>
<div class="popup-flex"></div>`;

        var domlist = generateImagesDOM(recipe.files);
        for(let i = 0; i < domlist.length; i++) {
            document.querySelectorAll('.popup-flex')[0].appendChild(domlist[i]);
        }

    }

    static closePopup() {
        document.getElementById('popup').style = 'display: none';
    }

}

function generateImagesDOM(filesArray) {
    let list = [];
    for(let i = 0; i < filesArray.length; i++) {
        let $img = document.createElement('img');
        $img.src = `img/${filesArray[i]}`;
        $img.style = 'border: 3px solid black; height: 50vh';
        $img.onclick = () => LightboxManager.showLightbox('img/' + filesArray[i], $img.naturalWidth, $img.naturalHeight);
        list.push($img);
    }
    return list;
}