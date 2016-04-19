$ (function(){
    var APPLICATION_ID = "52933C61-E5BF-D949-FFA0-F15FAFC09700",
    SECRET_KEY = "5C6DA6B9-8618-BEBD-FFD0-2700A59D4D00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var postsCollection = Backendless.Persistence.of(Posts).find();
    //var post = new Posts({title:"Please Work.", content:"If this works I will be very happy.", email:"Meme@Eme.com"});
    //dataStore.save(post);
    
    console.log(postsCollection);
    
    var wrapper = {
        posts: postsCollection.data
    };
    
    Handlebars.registerHelper("format", function (time) {
            return moment(time).format("dddd, MMMM do YYYY");
        })
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);
    });
function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}