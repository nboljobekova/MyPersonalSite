    //Image1
    // Get the modal
    var modal = document.getElementById('myModal1');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myImg1');
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementById("x1");
    
    // When the user clicks on <span> (x), close the modal
    console.log(span)
    span.onclick = function() { 
        modal.style.display = "none";
    }


    //Image2
    // Get the modal
    var modal = document.getElementById('myModal2');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myImg2');
    var modalImg = document.getElementById("img02");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementById("x2");
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }


    //Image3
    // Get the modal
    var modal = document.getElementById('myModal3');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myImg3');
    var modalImg = document.getElementById("img03");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementById("x3");
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }