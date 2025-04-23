window.onload = () => {
    const startYear = 1995;
    const thisYear = new Date().getFullYear();
    const experience = thisYear - startYear;
    const el = document.getElementById("experience-counter");
    let counter = 0;
    const interval = setInterval(() => {
        if (counter < experience) {
            counter++;
            el.innerText = counter;
        } else {
            clearInterval(interval);
        }
    }, 100);
}
