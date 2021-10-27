class StorageManager {

    static loadSettings() {
        var ls = localStorage.getItem('receptek_filters');
        if(ls != null) {
            ls = JSON.parse(ls);
            for(let i = 0; i < ls.length; i++) {
                // FilterManager.filters[]
            }
        }
    }

}