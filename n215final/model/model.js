const routes = ["home", "about", "tours", "specialOffers", "blog", "contact"];
const callout = $("#callout");
const homeBanner = $("#indexBanner");
const navHolder = $("#navHolder");
const logo = $("#logo");

function changeRoute(){
    let hash = window.location.hash;
    let pageID = hash.replace("#", "");

    if (pageID != ""){
        $.get(`pages/${pageID}.html`, function(content){
            $("#app").html(content);
        });
        homeBanner.removeClass("indexBanner");
        navHolder.removeClass("homeNav");
        navHolder.addClass("navHolder")
        callout.detach();
        logo.attr("src", "img/logo-black.svg")
    }  else {
        $.get(`pages/home.html`, function(content){
            $("#app").html(content);
        });
        navHolder.removeClass("navHolder")
        navHolder.addClass("homeNav")
    };

    if(pageID == "home"){
        homeBanner.addClass("indexBanner");
        navHolder.removeClass("navHolder")
        navHolder.addClass("homeNav")
        callout.appendTo("#indexBanner");
        logo.attr("src", "img/logo-white.svg")
    }
};

export {routes, changeRoute};