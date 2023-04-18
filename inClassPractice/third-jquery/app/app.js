import { changeRoute, routes } from '../model/model.js'

function initListener(){
    let btnID;

    $("nav a").on("click", function(e){
        btnID = e.currentTarget.id;
        btnID = $(this).attr("id");
        console.log(routes[btnID]);
    })
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function (){
    initURLListener();
    initListener();
})