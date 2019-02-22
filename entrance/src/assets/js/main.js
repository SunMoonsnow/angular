(function () {

    let u = navigator.userAgent.toLowerCase();
    let userType = '';

    if (u.match(/(iPhone|iPod|iPad);?/i)) {

        userType = 'ios';
        // window.location = "mobile.html";

    } else if (u.match(/android/i)) {

        userType = 'android';
        // window.location = "mobile.html";

    } else {

        userType = null;

    }


    window.USERTYPE = userType;

    if (userType == "android" && window.type != "mobile") {

        window.location = "mobile.html";

    } else if (userType == "ios" && window.type != "mobile") {

        window.location = "mobile.html";

    } else if (!(userType) && window.type != "pc") {

        window.location = "index.html";

    }


})();