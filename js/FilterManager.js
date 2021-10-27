class FilterManager {

    static filters = { sources: [] };

    static toggleAll() {
        for (let i = 0; i < SOURCES.length; i++) this.filters['sources'][i] = i;
        this.updateButtons();
    }

    static toggle(type, num) {
        this.filters[type].includes(num) ? this.filters[type].splice(this.filters[type].indexOf(num), 1) : this.filters[type].push(num);
        this.updateButtons();
    }

    static updateButtons() {
        for(let i = 0; i < SOURCES.length; i++) document.getElementById(`filter-sources-${i}`).classList = `btn btn-badge btn${this.filters.sources.includes(i) ? '' : '-outline'}-primary rounded-pill mx-1`;
    }

}