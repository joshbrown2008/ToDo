//EXCELLENT jQuery EXERCISE HERE! I FEEL LIKE I AM FINALLY STARTING TO LEARN HOW IT WORKS!! CRAZY RIGHT??!!



//This calls the 'complete' CSS class, applying gray color text and strikethrough to completed tasks.
$("ul").on("click", "li", function() {
    $(this).toggleClass("complete");
});

//This toggles the New Task input text bar on/off. Note: We use fadeToggle() here.
$("#newTask").on("click", function() {
    $("input[type='text'").fadeToggle();    
});

//This clears the placeholder text when you click in the box to start typing. 
//Otherwise you'd have to select/delete each time. Annoying!
$("#newInput").on("click", function() {
        $(this).attr("placeholder", "");
});

//Listens for 'enter' key and adds new LI tag at the bottom of the Task List.
$("#newInput").on("keypress", function(enter) {
    if (enter.which === 13) {
        $("ul").last().fadeIn(300, function() {
            $("ul").append(
                "<li><span><i class='fa fa-trash'></i></span>" + $("#newInput").val() + "</li>"                
            );
            $("#newInput").val("");          
        });  
    }     
});

//This is the trash can function to delete a task. 
//Because when you click on the page, all items above get included, we use stopPropagation() to limit our click to the <span> inside the <ul>.
//NOTE: The use of this function requires a parent to always be visible. 
//Because we're using CSS to show/hide elements, we have to say 'Get the UL's first, then get the 'SPANs' inside, then remove.
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(400, function() {
        $(this).remove();
    });
    event.stopPropagation();
});



