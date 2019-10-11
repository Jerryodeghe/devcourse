document.onclick = handleClick;

function handleClick(e) {
    
    const id  = e.target.id;
    
    let el = document.getElementById('display')
    let vals = el.innerHTML;
    console.log(id)
    if (id === 'C') { // clear all
        el.innerHTML = '';
    } else if(id === '↶') {
        if (vals.length === 0) return;
        el.innerHTML = vals.split('').splice(0, vals.length - 1).join('');
    } else {
        el.innerHTML = vals + id;
    }
}

