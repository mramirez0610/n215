var homeContent = `<div class="homeContent">
<h1>Home</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio voluptatibus ut, delectus tempore totam sit vitae alias consequatur accusantium nemo eveniet at veritatis quia quos! Vel, ullam. Sed, voluptatum?
</p>
<p>
    Tenetur, minima. Quibusdam quod eaque iure ducimus culpa ut adipisci magnam optio quam? At molestiae animi consectetur eum, itaque iste laborum sapiente sit! Cupiditate sit amet temporibus libero nihil magnam!
</p>
<p>
    Officiis ad dignissimos, in minima unde exercitationem ab nesciunt harum culpa vel? Nobis sapiente mollitia ratione possimus repellat sed repudiandae. Laboriosam possimus voluptatem magnam ea optio reiciendis facere eos fuga.
</p>
<p>
    Ullam praesentium rerum cupiditate facere quos veritatis ea numquam magnam possimus odit, pariatur corrupti quia deserunt animi ipsam doloribus assumenda vel voluptas eum nam ratione. Quaerat impedit vitae velit ab!
</p>
</div>`

var aboutContent = `<h1>About</h1>`
var contactContent = `<h1>Contact</h1>`
var productsContent = `<h1>Products</h1>`

function initListeners(){
    $("nav a").on("click", (event) => {
        let btnID = event.currentTarget.id;
        let pageContentID = btnID + "Content";
        changePageContent(pageContentID);
    });
}

function changePageContent(pageContentVarName){
    $("#app").html(eval(pageContentVarName));
}

$(document).ready(function(){
    changePageContent("homeContent");
    initListeners();
});