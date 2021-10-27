class SearchEngine {

    static search(searchInput) {
        var output = [];

        for(let i = 0; i < RECIPES.length; i++) {
            let r = RECIPES[i];
            if(searchInput == undefined || r.name.toLowerCase().replace(/ /g, '').includes(searchInput.toLowerCase().replace(/ /g,''))) output.push(i);
        }

        return output.sort((a, b) => {
            let namea = RECIPES[a].name.toLowerCase();
            let nameb = RECIPES[b].name.toLowerCase();
            if(namea < nameb) return -1;
            if(namea > nameb) return 1;
            return 0;
        });
    }

}