$ (function(){
    var APPLICATION_ID = "52933C61-E5BF-D949-FFA0-F15FAFC09700",
    SECRET_KEY = "5C6DA6B9-8618-BEBD-FFD0-2700A59D4D00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    console.log(postsCollection);
    
    var wrapper = {
        posts: postsCollection.data
    };
    currentDate = Date.now();
    currentDate = moment(currentDate).format("ddd, MMM Do YYYY");
    countOfPostsToday = 0;
    
    for(i = 0; i < postsCollection.data.length; i++)
    {
        post = postsCollection.data[i] ;
        createdDate = moment(post.created).format("ddd, MMM Do YYYY");
        if(createdDate == currentDate)
            countOfPostsToday++;
    }
    postCount = document.getElementById("postCount");
    postCount.innerHTML = countOfPostsToday;
    Handlebars.registerHelper('format', function (time) {
        return moment(time).format("ddd, MMM Do YYYY")
    });
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);
    
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}
 $(".button-collapse").sideNav();