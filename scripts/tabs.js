(function () {
    const tabLru = document.getElementById('tabLru');
    const tabNQueens = document.getElementById('tabNQueens');
    const sectionLru = document.getElementById('sectionLru');
    const sectionNQueens = document.getElementById('sectionNQueens');

    if (!tabLru || !tabNQueens || !sectionLru || !sectionNQueens) return;

    function setActive(target) {
        const isLru = target === 'lru';

        tabLru.classList.toggle('is-active', isLru);
        tabLru.setAttribute('aria-selected', String(isLru));

        tabNQueens.classList.toggle('is-active', !isLru);
        tabNQueens.setAttribute('aria-selected', String(!isLru));

        sectionLru.classList.toggle('is-active', isLru);
        sectionNQueens.classList.toggle('is-active', !isLru);
    }

    tabLru.addEventListener('click', () => setActive('lru'));
    tabNQueens.addEventListener('click', () => setActive('nq'));
})();
