$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



// new 



// let slideIndex = 1;

//         function plusSlides(n) {
//             showSlides(slideIndex += n);
//         }

//         function currentSlide(n) {
//             showSlides(slideIndex = n);
//         }

//         function showSlides(n) {
//             let slides = document.querySelectorAll('.slider img');
//             if (n > slides.length) {
//                 slideIndex = 1;
//             }
//             if (n < 1) {
//                 slideIndex = slides.length;
//             }
//             for (let i = 0; i < slides.length; i++) {
//                 slides[i].style.display = 'none';
//             }
//             slides[slideIndex - 1].style.display = 'block';
//         }

//         function autoSlide() {
//             plusSlides(1);
//         }

//         setInterval(autoSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)

//         showSlides(slideIndex);


// var container = document.getElementById("container");

//     // Content for each div
//     var content = [
//       "<h2 >Track 1 – Artificial Intelligence And Intelligent Machining</h2><div id='scroll-container'><div id='scroll-text'>Deep Learning<br>Neural Networks<br>Fuzzy Logic<br>Expert Systems<br>Agents and Multi-Agent Systems<br>Natural Language Processing<br>Data Mining<br>Support Vector Machines<br>Ambient Intelligence<br>Sentiment Analysis<br>Human-Computer Interaction<br>Medical Diagnosis<br>Augmented Reality<br>Virtual Reality<br>Geographic Information Systems<br></div></div>",
//       "<h2>Track 2 – Innovative Business Process</h2><div id='scroll-container'><div id='scroll-text'>Market Intelligence<br>Integrated Management<br>Business Innovation<br>Industry 4.0 for MSM<br>Infrastructure Management<br>Factory Automation<br>Smart Cities Construction 4.0<br>Sustainable Analysis Design</div></div>",
//       "<h2>Track 3 – Cloud Computing & Big Data Analysis</h2><div id='scroll-container'><div id='scroll-text'>Cloud Computing<br>Grid Computing<br>Internet of Things (IOT)<br>Data Analytics<br>Big Data<br></div></div>",
//       "<h2>Track 4 – Communication Networks & Cyber Security</h2><div id='scroll-container'><div id='scroll-text'>Cyber Security<br>Wireless/ Mobile Communication<br>3G/4G/5G Network Evolutions<br>Sensing and Sensor Networks<br>Open Spectrum Solutions<br>Cognitive Radio<br>Mobile Apps<br></div></div>",
//       "<h2>Track 5 – E- Learning</h2><div id='scroll-container'><div id='scroll-text'>E-Learning Tools<br>Educational Systems Design<br>Delivery Systems and Environment<br>E-Learning Organisational Issues<br>Cognitive Radio<br>Mobile Apps<br></div></div>",
//       "<h2>Track 6 – Biotechnology and Healthcare System</h2><div id='scroll-container'><div id='scroll-text'>AI in Medical Field & Dental<br>Block Chain for Healthcare<br>Internet of Medical Things (IOMT)<br>Predictive Analysis<br>Drug Management<br>Smart Biosciences<br>Medical Robots<br></div></div>",
//       "<h2>Track 7 – Case Study on Industry 4.0</h2><div id='scroll-container'><div id='scroll-text'>Construction 4.0<br></div></div>"
//     ];

//     // Create seven dynamic divs and append them to the container with content
//     for (var i = 0; i < content.length; i++) {
//       var div = document.createElement("div");
//       div.className = "dynamic-div";
//       div.innerHTML = content[i];
//       container.appendChild(div);
//     }