$ (function(){
    var APPLICATION_ID = "52933C61-E5BF-D949-FFA0-F15FAFC09700",
    SECRET_KEY = "5C6DA6B9-8618-BEBD-FFD0-2700A59D4D00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);
    });
    
    $(document).on("submit", "form-signin", function(event){
        event.preventDefault();
        
        var data = $this.serializeArray(),
            email = data[0].value,
            password = data[1].value;
            
            Backendless.userservice.login(email, password, true, new Backendless.Async(UserLoggedIn, gotError));
    });
function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

function userLoggedIn(user) {
    console.log("User Successfuly Logged In");
    
    var welcomeScript = $("#welcome-template").html();
    var welcomeTemplate = Handlebars.compile(welcomeScript);
    var welcomeHTML = welcomeTemplate(user);
    
    $(".main-container").html(welcomeHTML);
}

function gotError(error) {
    console.log("Error Message -" + error.message);
    console.log("Error Code -" + error.code);
}


//Addition is easy.