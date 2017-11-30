$(document).ready(function() {
  
  $("#getQuote").on("click", function() {
    // Only change code below this line.
    $.ajax({
      jsonp: "jsonp",
      dataType: "jsonp",
      url: "https://api.forismatic.com/api/1.0/",
      contentType: "application/jsonp",
      data: {
        lang: "en",
        method: "getQuote",
        format: 'jsonp'
      },
      success: function(data) {
        $("#quoteText").text(data.quoteText);
        if (data.quoteAuthor !== "") {
          $("#quoteAuthor").text(data.quoteAuthor);
          $("#tweet-button").attr("href","https://twitter.com/intent/tweet?text=" + data.quoteText + " " + data.quoteAuthor);
        } else {
          $("#quoteAuthor").text("Unknown");
          $("#tweet-button").attr("href", "https://twitter.com/intent/tweet?text=" + data.quoteText + " " + data.quoteAuthor);
  }
        
      },
      error: function(data) {
        $("#quoteText").text('-');
        $("#quoteText").text('An error has occurred');
      }
      
    });
    
    // Only change code above this line.
  });
})
