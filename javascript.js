$(document).ready(function() {

  var start = 0;
  var elapsed = 0;
  var results = [];
  var team;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var time = 0;
  var memberAStart = 0, memberBStart = 0, memberCStart = 0, memberDStart = 0, memberEStart = 0, memberFStart = 0, silenceStart = 0;

  $("button").click(function(){
      getTime();
      // pushes member and minutes since timer started to array results
      results.push([this.id, time]);
      // resultsOnScreen();
      console.log(results);
   });

// starts the timer when the video begins to play
  $("video").on("play", function(){
    start = new Date();
  })

// export array results to excel xlsx file and clean the results array
  $(".export").click(function(){
    exportData();
    clearResults();
  });

// // Keyboard shortcuts from 1 to 5 to represent the team members 
  $(document).keydown(function (e) {  
    if (e.which === 49) {
      memberAStart = new Date();
      $("#member_A").css({//changes the button so it appered to being pressed
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 50){
        memberBStart = new Date();
        $("#member_B").css({//changes the button so it appered to being pressed
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 51){
        memberCStart = new Date();
        $("#member_C").css({//changes the button so it appered to being pressed
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 52){
        memberDStart = new Date();
        $("#member_D").css({//changes the button so it appered to being pressed
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 53){
        memberEStart = new Date();
        $("#member_E").css({//changes the button so it appered to being pressed
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 54){
        memberFStart = new Date();
        $("#member_F").css({//changes the button so it appered to being pressed
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 32){
        silenceStart = new Date();
        $("#Silence").css({//changes the button so it appered to being pressed
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    }
  });

  $(document).bind('keydown', function(){
        console.log('keydown');
    });

// Keyboard shortcuts from 1 to 5 to represent the team members and space to represent silence
  $(document).keyup(function (e) {  
    if (e.which === 49) {
        getTime();
        results.push(["Member A", time]);
         $("#member_A").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        console.log(results);
    } else if (e.which === 50){
        getTime();
        results.push(["Member B", time]);
        $("#member_B").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        console.log(results);
    } else if (e.which === 51){
        getTime();
        results.push(["Member C", time]);
        $("#member_C").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        console.log(results);
    } else if (e.which === 52){
        getTime();
        results.push(["Member D", time]);
        $("#member_D").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        console.log(results);
    } else if (e.which === 53){
        getTime();
        results.push(["Member E", time]);
        $("#member_E").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        console.log(results);
    } else if (e.which === 54){
        getTime();
        results.push(["Member F", time]);
        $("#member_F").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        console.log(results);
    } else if (e.which === 32){
        getTime();
        results.push(["Silence", time]);
        $("#Silence").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        console.log(results);
    }
  });

// get the difference between time ranges
  function getTime(){
    elapsed = new Date() - start;
    hours = "00";
    minutes = Math.floor(elapsed / 60000);
    seconds = ((elapsed % 60000) / 1000);
    time = hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

// don't trigger the timestamps when using the keyboards shortcuts
  $('#team_name_input').bind('keyup keypress keydown', function(e) {
     e.stopPropagation(); 
  });

// function that exports array results to excel .xlsx
  function exportData() {
      team = $("#team_name_input").val();
      alasql("SELECT * INTO XLSX(\'"+ team + ".xlsx\',{headers:true}) FROM ? ",[results]);
  }

// clear the results array
  function clearResults(){
    results = [];
  }


// displays time stamps in the HTML page
//   function resultsOnScreen(){
//   for (var j = 0; j < results.length; j++){
//           $("#flex-container").append("<div class=\"flex-item headline" + j + "\">"+results[j][0] +"</div>");
//           $("#flex-container").append("<div class=\"flex-item headline" + j + "\">"+results[j][1] +"</div>");
//           $("#flex-container").removeClass("flex-item headline" + j + "");
//     }
// }

});


var myVideo = document.getElementById("video1");
// PLACE ALL VIDEOS' NAMES HERE
var videoList = ['big_buck_bunny.mp4','test.mp4','test2.mp4'];
var index = videoList.indexOf(window.currentVideoName);

//Next video button
function nextButton(){
  index = index + 1;

  if (index === videoList.length){
    index = 0;
    myVideo.src = videoList[index];
  } else {
    myVideo.src = videoList[index];
    window.currentVideoName = videoList[index];
  }
}