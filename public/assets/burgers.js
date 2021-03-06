
$(function() {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  $(".change-devoured").on("click", function(event) 
  {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    var newDevouredState = {
      devoured: newDevoured
    };
console.log(newDevoured)
    $.ajax("/api/burgers/" + id, 
    {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      location.reload();
    }
    );
  });

  $(".create-form").on("submit", function(event) 
  {
    event.preventDefault();
    var newBurgers = 
    {
    name: $("#bu").val().trim(),
    devoured: $("[name=devoured]:checked").val().trim()
    };

    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurgers
    }).then(function() 
    {
      location.reload();
    }
    );
  });

  $(".delete-burgers").on("click", function(event) 
  {
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, 
    {
      type: "DELETE"
    })
    .then(function() 
    {
      location.reload();
    }
    );
  });
});
