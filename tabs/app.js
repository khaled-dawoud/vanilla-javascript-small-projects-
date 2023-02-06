const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const contents = document.querySelectorAll('.content');

//solution one
about.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;
    if(id) {
        btns.forEach((btn)=>{
            btn.classList.remove('active');
            e.target.classList.add('active')
        });

        contents.forEach((content)=>{
            if(id === content.id) {
                content.classList.add('active')
            } else {
                content.classList.remove('active')
            }
        });
    }
});

//solution two
// btns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         btns.forEach((btn)=>{
//             btn.classList.remove('active');
//             e.target.classList.add('active')
//         });

//         contents.forEach((content)=>{
//             if(e.target.dataset.id === content.id) {
//                 content.classList.add('active')
//             } else {
//                 content.classList.remove('active')
//             }
//         });
//     })
// });