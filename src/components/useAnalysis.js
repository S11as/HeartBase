import anime from "animejs";
export default function useAnalysis(){
    // const changeSize = 1100 - 650;
    // const addedPart = changeSize/100;
    // const addedY = 5;
    // let ctx = document.getElementById('myChart').getContext('2d');
    let text = document.getElementById('hero');
    // anime({
    //     targets: "#cWrapper",
    //     width: '1100px',
    //     easing: 'easeInOutSine',
    //     duration: 2000,
    //     update: anim =>{
    //         const progress = Math.round(anim.progress);
    //         ctx.width = 650+addedPart*progress;
    //         ctx.height = 350+addedY*progress;
    //     }
    // })
    anime({
        targets: '#hero',
        translateY: '500px',
        opacity: 0,
        easing: 'easeInOutSine',
        duration: 2000,
        begin: function(){
            text.style.left = text.getBoundingClientRect().left + "px";
            text.style.width  = "450px"
            text.style.position = "absolute"
        },
        complete: function (){
            text.style.display = "none"
        }
    })
}
