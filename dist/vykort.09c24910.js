'use strict';
const randomNum = (min, max)=>Math.floor(Math.random() * (max - min) + min);
setInterval(()=>{
    document.body.style.backgroundColor = `rgb(${randomNum(0, 255)},${randomNum(0, 255)},${randomNum(0, 255)})`;
}, 1000);

//# sourceMappingURL=vykort.09c24910.js.map
