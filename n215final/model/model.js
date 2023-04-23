const routes = ["home", "about", "tours", "specialOffers", "blog", "contact"];
const callout = $("#callout");
const homeBanner = $("#indexBanner");
const navHolder = $("#navHolder");

function changeRoute(){
    let hash = window.location.hash;
    let pageID = hash.replace("#", "");

    if (pageID != ""){
        $.get(`pages/${pageID}.html`, function(content){
            $("#app").html(content);
        });
    }  else {
        $.get(`pages/home.html`, function(content){
            $("#app").html(content);
        });
    };

    if(pageID !== "home"){
        homeBanner.removeClass("indexBanner");
        navHolder.removeClass("homeNav");
        navHolder.addClass("navHolder")
        callout.detach();
    } else{
        homeBanner.addClass("indexBanner");
        navHolder.removeClass("navHolder")
        navHolder.addClass("homeNav")
        callout.appendTo("#indexBanner");
    }
};

export {routes, changeRoute};