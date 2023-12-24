const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const closee = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        bar.style.display = 'none';
        closee.style.display = 'block';
    })
}
if (closee) {
    closee.addEventListener('click', () => {
        nav.classList.remove('active');
        closee.style.display = 'none';
        bar.style.display = 'block';
    })

}