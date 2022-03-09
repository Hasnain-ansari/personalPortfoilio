// console.log("hasnain ansari");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    //toggle means lagi hui hain toh hata do aur hati hui hain toh laga do
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.menu').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        //set timeout because cross sign was coming first to make them sync we use timeout sidebar and cross
        setTimeout(() =>{
            document.querySelector('.cross').style.display = 'inline';

        }, 300);
        document.querySelector('.menu').style.display = 'none';

    }
})

