const changeDisplay = (element) => {
    var content = element.querySelector('.con');
    if (content) {
        if (content.style.display === 'none'|| content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }
}