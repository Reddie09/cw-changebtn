function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const btn = document.getElementById("colorbtn")
    btn.style.backgroundColor = randomColor;
}