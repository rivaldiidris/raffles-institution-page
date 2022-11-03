
(function (window, $, fx) {
    $(function () {
        
    });
}(window, jQuery, FXM));

function myFunction() {
    var x = document.getElementById("hamburgerMenu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }; 

  function myFunction2() {
    var x = document.getElementById("childLink");
    if (x.style.display === "initial") {
      x.style.display = "none";
    } else {
      x.style.display = "initial";
    }
  };   
  function myFunction3() {
    var x = document.getElementById("childLink2");
    if (x.style.display === "initial") {
      x.style.display = "none";
    } else {
      x.style.display = "initial";
    }
  };   
  function myFunction4() {
    var x = document.getElementById("search");
    if (x.style.display === "initial") {
      x.style.display = "none";
    } else {
      x.style.display = "initial";
    }
  };   

  $(function () {
    FXM.backToTop(".back-to-top", {
        duration: 500,
        hideClass: "is-hidden",
    });
});