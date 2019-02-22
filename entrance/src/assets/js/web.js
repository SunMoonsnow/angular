
let toggle = function (banner, head, khd, sjd,tnav,bnav) {
        let b = banner[0].className.indexOf('hide') >= 0;
        if (b) {
                bannerOne(head, khd,sjd,banner,tnav,bnav);
        } else {
                bannerTow(head, khd,sjd,banner,tnav,bnav);
        }
}
        
let bannerOne = function (head, khd, sjd, banner, tnav,bnav) {
        // head.style.backgroundImage = "url('../img/banner1.png')";
        bannerLeave(2, function () {
                banner[0].className = "head-bodys both";
                banner[1].className = "head-bodys both hide";
        
                tnav[0].className = 'bold topnav';
                tnav[1].className = 'topnav'; 
        
                bnav[0].className = 'checked-nav left checked';
                bnav[1].className = 'checked-nav right';
        
                // khd.style.backgroundImage = "url('../img/phones-c.png')";
                // sjd.style.backgroundImage = "url('../img/url.png')";
                bannerJoin(1);
        });
}
        
let bannerTow = function(head,khd,sjd,banner,tnav,bnav){
        // head.style.backgroundImage = "url('../img/banner2.png')";
        bannerLeave(1, function () {
                banner[0].className = "head-bodys both hide";
                banner[1].className = "head-bodys both";
        
                tnav[0].className = 'topnav';
                tnav[1].className = 'bold topnav';
        
                bnav[0].className = 'checked-nav left';
                bnav[1].className = 'checked-nav right checked';
        
                // khd.style.backgroundImage = "url('../img/phones.png')";
                // sjd.style.backgroundImage = "url('../img/url-c.png')";
                bannerJoin(2);
        });
}
        
 let bannerJoin = function(dex, callback) {
        switch (dex) {
                case 1:
                playTopJoin(titlea);
        
                playLeftJoin(buttona, null);
                playLeftJoin(buttonb, null, function (e) {
                        callback ? callback(e) : null;
                });
        
                playRightJoin(codea);
                break;
                case 2:
                playTopJoin(titleb, null, function (e) {
                        callback ? callback(e) : null;
                });
                playRightJoin(blt);
                playLeftJoin(codeb);
                break;
                default:
                break;
        }
}
        
let bannerLeave =  function (dex, callback) {
        switch (dex) {
                case 1:
                playTopLeave(titlea, 300);
                playLeftLeave(buttona, 300);
                playLeftLeave(buttonb, 300, function (e) {
                        callback ? callback(e) : null;
                });
                playRightLeave(codea, 300);
                break;
                case 2:
                playTopLeave(titleb, 300, function (e) {
                        callback ? callback(e) : null;
                });
                playRightLeave(blt, 300);
                playLeftLeave(codeb, 300);
                break;
                default:
                break;
        }
}
        
        
let playJoin = function (dom, times, callback) {
        let frames = [
                { opacity: '0', transform: 'translate(0px,30px)' },
                { opacity: '1', transform: 'translate(0px,0px)' },
        ];
        let timing = {
                duration: times ? times : 800,         //ms
                delay: 0,               //ms
                // iterations: Infinity,
                direction: 'alternate', //'normal', 'reverse'等
                easing: 'ease-in-out',  //'linear', 'ease-in'等
                fill: 'forwards',       //'backwards', 'both', 'none', 'auto'
        };
        let play = dom.animate(frames, timing);
        play.onfinish = function (e) {
                callback ? callback(e) : null;
        }
}
        
let playLeave = function(dom, times, callback) {
        let frames = [
                { opacity: '1', transform: 'translate(0px,0px)' },
                { opacity: '0', transform: 'translate(0px,30px)' },
        ];
        let timing = {
                duration: times ? times : 800,         //ms
                delay: 0,               //ms
                direction: 'alternate', //'normal', 'reverse'等
                easing: 'ease-in-out',  //'linear', 'ease-in'等
                fill: 'forwards',       //'backwards', 'both', 'none', 'auto'
        };
        let play = dom.animate(frames, timing);
        play.onfinish = function (e) {
                callback ? callback(e) : null;
        }
}
        
let playTopJoin = function (dom, times, callback) {
        let frames = [
                { opacity: '0', transform: 'translate(0px,-30px)' },
                { opacity: '1', transform: 'translate(0px,0px)' },
        ];
        let timing = {
                duration: times ? times : 800,         //ms
                delay: 0,               //ms
                // iterations: Infinity,
                direction: 'alternate', //'normal', 'reverse'等
                easing: 'ease-in-out',  //'linear', 'ease-in'等
                fill: 'forwards',       //'backwards', 'both', 'none', 'auto'
        };
        let play = dom.animate(frames, timing);
        play.onfinish = function (e) {
                callback ? callback(e) : null;
        }
}
        
let playTopLeave = function(dom, times, callback) {
        let frames = [
                { opacity: '1', transform: 'translate(0px,0px)' },
                { opacity: '0', transform: 'translate(0px,-30px)' },
        ];
        let timing = {
                duration: times ? times : 800,         //ms
                delay: 0,               //ms
                // iterations: Infinity,
                direction: 'alternate', //'normal', 'reverse'等
                easing: 'ease-in-out',  //'linear', 'ease-in'等
                fill: 'forwards',       //'backwards', 'both', 'none', 'auto'
        };
        let play = dom.animate(frames, timing);
        play.onfinish = function (e) {
                callback ? callback(e) : null;
        }
}
        
let playLeftJoin =  function(dom, times, callback) {
        let frames = [
                { opacity: '0', transform: 'translate(-30px,0px)' },
                { opacity: '1', transform: 'translate(0px,0px)' },
        ];
        let timing = {
                duration: times ? times : 800,         //ms
                delay: 0,               //ms
                // iterations: Infinity,
                direction: 'alternate', //'normal', 'reverse'等
                easing: 'ease-in-out',  //'linear', 'ease-in'等
                fill: 'forwards',       //'backwards', 'both', 'none', 'auto'
        };
        let play = dom.animate(frames, timing);
        play.onfinish = function (e) {
                callback ? callback(e) : null;
        }
}
        
let playLeftLeave = function(dom, times, callback) {
        let frames = [
                { opacity: '1', transform: 'translate(0px,0px)' },
                { opacity: '0', transform: 'translate(-30px,0px)' },
        ];
        let timing = {
                duration: times ? times : 800,         //ms
                delay: 0,               //ms
                // iterations: Infinity,
                direction: 'alternate', //'normal', 'reverse'等
                easing: 'ease-in-out',  //'linear', 'ease-in'等
                fill: 'forwards',       //'backwards', 'both', 'none', 'auto'
        };
        let play = dom.animate(frames, timing);
        play.onfinish = function (e) {
                callback ? callback(e) : null;
        }
}
        
let playRightJoin =  function (dom, times, callback) {
        let frames = [
                { opacity: '0', transform: 'translate(30px,0px)' },
                { opacity: '1', transform: 'translate(0px,0px)' },
        ];
        let timing = {
                duration: times ? times : 800,         //ms
                delay: 0,               //ms
                // iterations: Infinity,
                direction: 'alternate', //'normal', 'reverse'等
                easing: 'ease-in-out',  //'linear', 'ease-in'等
                fill: 'forwards',       //'backwards', 'both', 'none', 'auto'
        };
        let play = dom.animate(frames, timing);
        play.onfinish = function (e) {
                callback ? callback(e) : null;
        }
}
        
let playRightLeave = function (dom, times, callback) {
        let frames = [
                { opacity: '1', transform: 'translate(0px,0px)' },
                { opacity: '0', transform: 'translate(30px,0px)' },
        ];
        let timing = {
                duration: times ? times : 800,         //ms
                delay: 0,               //ms
                // iterations: Infinity,
                direction: 'alternate', //'normal', 'reverse'等
                easing: 'ease-in-out',  //'linear', 'ease-in'等
                fill: 'forwards',       //'backwards', 'both', 'none', 'auto'
        };
        let play = dom.animate(frames, timing);
        play.onfinish = function (e) {
                callback ? callback(e) : null;
        }
}

let web = {
        toggle: toggle,
        bannerOne: bannerOne,
        bannerTow: bannerTow,
        bannerJoin: bannerJoin,
        bannerLeave: bannerLeave,
        playJoin: playJoin,
        playLeave: playLeave,
        playTopJoin: playTopJoin,
        playTopLeave: playTopLeave,
        playLeftJoin: playLeftJoin,
        playLeftLeave: playLeftLeave,
        playRightJoin: playRightJoin,
        playRightLeave: playRightLeave
};

export {  web };





// var phone = document.getElementById('phone');
// var titlea = document.querySelector('#titlea');
// var buttona = document.querySelector('#buttona');
// var buttonb = document.querySelector('#buttonb');
// var codea = document.querySelector('#codea');
// var head = document.querySelector('.head');
// //
// var titleb = document.querySelector('#titleb');
// var codeb = document.querySelector('#codeb');
// var blt = document.querySelector('#blt');
// //titleb
// var banner = document.querySelectorAll('.head-bodys');
// var tnav = document.querySelectorAll('.topnav');
// var bnav = document.querySelectorAll('.checked-nav');

// var khd = document.querySelector('#khd');
// var sjd = document.querySelector('#sjd');
// playTopJoin(phone);
// bannerJoin(1);

