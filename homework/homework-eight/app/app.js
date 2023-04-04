var homeRoute = `<div class="home">
<div alt="Team Posing" class="banner homeHero"></div>
<div class="content">    
    <h1>A Team of Workers Here Just For You</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio voluptatibus ut, delectus tempore totam sit vitae alias consequatur accusantium nemo eveniet at veritatis quia quos! Vel, ullam. Sed, voluptatum?
    </p>
    <p>
        Tenetur, minima. Quibusdam quod eaque iure ducimus culpa ut adipisci magnam optio quam? At molestiae animi consectetur eum, itaque iste laborum sapiente sit! Cupiditate sit amet temporibus libero nihil magnam!
    </p>
    <h1>Our Goal:</h1>
    <p>
        Officiis ad dignissimos, in minima unde exercitationem ab nesciunt harum culpa vel? Nobis sapiente mollitia ratione possimus repellat sed repudiandae. Laboriosam possimus voluptatem magnam ea optio reiciendis facere eos fuga.
    </p>
    <div class="photos">
        <div class="photo home1"></div>
        <div class="photo home2"></div>
        <div class="photo home3"></div>
    </div>
    <h1>
        Satisfaction, Guaranteed
    </h1>
    <p>
        Ullam praesentium rerum cupiditate facere quos veritatis ea numquam magnam possimus odit, pariatur corrupti quia deserunt animi ipsam doloribus assumenda vel voluptas eum nam ratione. Quaerat impedit vitae velit ab!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore quasi laboriosam, doloribus nostrum rem facere obcaecati excepturi cupiditate iure aliquam hic quisquam nemo, dolorem repellat vitae reprehenderit fugiat error.
    </p>
</div>    
</div>`

var aboutRoute = `<div class="about">
<div alt="Team Posing" class="banner aboutHero"></div>
<div class="content">    
    <h1>About Us:</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio voluptatibus ut, delectus tempore totam sit vitae alias consequatur accusantium nemo eveniet at veritatis quia quos! Vel, ullam. Sed, voluptatum?
    </p>
    <p>
        Tenetur, minima. Quibusdam quod eaque iure ducimus culpa ut adipisci magnam optio quam? At molestiae animi consectetur eum, itaque iste laborum sapiente sit! Cupiditate sit amet temporibus libero nihil magnam!
    </p>
    <h1>Founded in 2006</h1>
    <p>
        Officiis ad dignissimos, in minima unde exercitationem ab nesciunt harum culpa vel? Nobis sapiente mollitia ratione possimus repellat sed repudiandae. Laboriosam possimus voluptatem magnam ea optio reiciendis facere eos fuga.
    </p>
    <div class="photos">
        <div class="photo about1"></div>
        <div class="photo about2"></div>
        <div class="photo about3"></div>
    </div>
    <h1>Previous Customer Testimonies</h1>
    <p>
        Ullam praesentium rerum cupiditate facere quos veritatis ea numquam magnam possimus odit, pariatur corrupti quia deserunt animi ipsam doloribus assumenda vel voluptas eum nam ratione. Quaerat impedit vitae velit ab!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore quasi laboriosam, doloribus nostrum rem facere obcaecati excepturi cupiditate iure aliquam hic quisquam nemo, dolorem repellat vitae reprehenderit fugiat error.
    </p>
</div>    
</div>`

var contactRoute = `<div class="contact">
<div alt="Team Posing" class="banner contactHero"></div>
<div class="content">    
    <h1>Contact Us:</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio voluptatibus ut, delectus tempore totam sit vitae alias consequatur accusantium nemo eveniet at veritatis quia quos! Vel, ullam. Sed, voluptatum?
    </p>
    <p>
        Tenetur, minima. Quibusdam quod eaque iure ducimus culpa ut adipisci magnam optio quam? At molestiae animi consectetur eum, itaque iste laborum sapiente sit! Cupiditate sit amet temporibus libero nihil magnam!
    </p>
    <h1>We're Here to Talk, Day or Night</h1>
    <p>
        Officiis ad dignissimos, in minima unde exercitationem ab nesciunt harum culpa vel? Nobis sapiente mollitia ratione possimus repellat sed repudiandae. Laboriosam possimus voluptatem magnam ea optio reiciendis facere eos fuga.
    </p>
    <div class="photos">
        <div class="photo contact1"></div>
        <div class="photo contact2"></div>
        <div class="photo contact3"></div>
    </div>
    <h1>Get in Touch With Us:</h1>
    <p>
        Ullam praesentium rerum cupiditate facere quos veritatis ea numquam magnam possimus odit, pariatur corrupti quia deserunt animi ipsam doloribus assumenda vel voluptas eum nam ratione. Quaerat impedit vitae velit ab!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore quasi laboriosam, doloribus nostrum rem facere obcaecati excepturi cupiditate iure aliquam hic quisquam nemo, dolorem repellat vitae reprehenderit fugiat error.
    </p>
</div>    
</div>`

var faqRoute = `<div class="faq">
<div alt="Team Posing" class="banner faqHero"></div>
<div class="content">    
    <h1>Frequently Asked Questions:</h1>
    <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Unde odio ullam ipsum magnam exercitationem earum provident in modi delectus temporibus sapiente, velit nesciunt?</li>
        <li>Optio temporibus atque voluptas sequi, molestiae doloribus.</li>
    </ul>
    <h1>Feel Free to Ask, Whenever.</h1>
    <p>
        Officiis ad dignissimos, in minima unde exercitationem ab nesciunt harum culpa vel? Nobis sapiente mollitia ratione possimus repellat sed repudiandae. Laboriosam possimus voluptatem magnam ea optio reiciendis facere eos fuga.
    </p>
</div>    
</div>`

function initListeners(){
    $("nav a").on("click", (event) => {
        let btnID = event.currentTarget.id;
        let pageContentID = btnID + "Route";
        changePageContent(pageContentID);
    });
}

function changePageContent(pageContentVarName){
    $("#app").html(eval(pageContentVarName));
}

$(document).ready(function(){
    changePageContent("homeRoute");
    initListeners();
});