// Módulo de arrastar e soltar

document.addEventListener('mousedown', (e) => {
    // Conseguir el elemento que se está arrastrando
    const button = e.target.closest('.drag_and_drop');
    if (!button) return;
    if (button !== e.target && !button.contains(e.target)) return;
    const titles = button.parentElement.querySelector('.artista_search');
    console.log(titles);
    const name = titles.children[0].textContent;
    const artist = titles.children[1].textContent;

    const list = document.querySelector('.playlist_content');

    // Crear el elemento que se va a arrastrar
    const helper = document.createElement('div');
    helper.className = 'helper';
    helper.innerHTML = `${name} — ${artist}`;
    document.body.appendChild(helper);

    const line = document.createElement('div');
    line.className = 'helper-line';

    const main = button.closest('.busq2');

    // Posición inicial del elemento que se va a arrastrar
    let where = null;
    let index = null;
    const move = (e) => {
        const top = e.clientY + 'px';
        const left = e.clientX + 'px';
        helper.style.top = top;
        helper.style.left = left;

        // Buscar el elemento que se está arrastrando
        const target = document.elementFromPoint(e.clientX, e.clientY);
        where = target.closest('.busq2');
        if (!where) {
            where = null;
            line.remove();
            return;
        }
        if (where !== target && !where.contains(target)){
            where = null;
            line.remove();
            return;
        }
        index = Array.from(list.children).indexOf(where);
        where.append(line);

    };
    // Mover el elemento que se está arrastrando
    const drop = (e) => {
        helper.remove()
        line.remove();
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', drop);
        if (!where) return;
        console.log(index);
        list.insertBefore(main, where);
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', drop);
});