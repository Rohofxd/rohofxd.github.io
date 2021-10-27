class UIManager {

    static setupFilterButtons() {
        let srcs = document.getElementById('filter-source');

        for(let i = 0; i < SOURCES.length; i++) {
            let btn = document.createElement('button');
            btn.classList = 'btn btn-badge btn-outline-primary rounded-pill mx-1';
            btn.innerHTML = SOURCES[i].name;
            btn.id = `filter-sources-${i}`;
    
            btn.onclick = () => FilterManager.toggle('sources', i);
    
            srcs.appendChild(btn);
        }
    }

    static showRecipe(id) {
        var recipe = RECIPES[id];

        PopupManager.showPopup(recipe);
    }

    static updateRecipes(array) {
        const OUTPUTDOM = document.getElementById('output');
        OUTPUTDOM.innerHTML = '';
        for (let i = 0; i < RECIPES.length; i++) {
            if(array != undefined && !array.includes(i)) continue;
    
            var recipe = RECIPES[i];
    
            OUTPUTDOM.innerHTML += `
<div class="card">
    <div class="card-body" ${recipe.source == -1 ? '' : 'style="background-color: ' + SOURCES[recipe.source].color};">
        <h5 class="card-title">${recipe.name}</h5>
        <a class="btn btn-secondary" onclick="UIManager.showRecipe(${i})">Recept megtekintése</a>
        <p class="card-text"><small class="text-muted">${recipe.source == -1 ? 'Forrás: Egyéb' : 'Forrás: ' + SOURCES[recipe.source].name}</small></p>
    </div>
</div>`;
        }
    }

}