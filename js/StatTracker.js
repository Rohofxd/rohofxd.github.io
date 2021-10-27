class StatTracker {

    static addStatsDOM() {
        document.getElementById('footer').innerHTML += `
<h3 class="text-center mt-3">Statisztikák</h3>
<pre class="container">
* Receptek száma: ${RECIPES.length}
* Források száma: ${SOURCES.length}
* Hozzávalók száma: ${INGREDIENTS.length}
</pre>
`;
    }

}