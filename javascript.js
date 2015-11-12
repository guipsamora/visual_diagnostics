$(document).ready(function() {

  var start = 0;
  var results = [];
  var team;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var time = 0;
  var memberAStart = 0, memberBStart = 0, memberCStart = 0, memberDStart = 0, memberEStart = 0, memberFStart = 0, silenceStart = 0;
  var memberAEnd = 0, memberBEnd = 0, memberCEnd = 0, memberDEnd = 0, memberEEnd = 0, memberFEnd = 0, silenceEnd = 0;
  var down = {};

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

// Keyboard shortcuts from 1 to 5 to represent the team members 
  $(document).keydown(function (e) {  
    if (e.which === 49) {
        if (down['49'] == null) { // first press
          memberAStart = new Date();
          down['49'] = true; // record that the key's down
        }
    } else if (e.which === 50){
        if (down['50'] == null) {
          memberBStart = new Date();
          down['50'] = true;
        };
    } else if (e.which === 51){
        if (down['51'] == null) {
          memberCStart = new Date();
          down['51'] = true;
        };
    } else if (e.which === 52){
        if (down['52'] == null) {
          memberDStart = new Date();
          down['52'] = true;
        };
    } else if (e.which === 53){
        if (down['53'] == null) {
          memberEStart = new Date();
          down['53'] = true;
        };
    } else if (e.which === 54){
        if (down['54'] == null) {
          memberFStart = new Date();
          down['54'] = true;
        };
    } else if (e.which === 32){
        if (down['32'] == null) {
          silenceStart = new Date();
          down['32'] = true;
        };
     }
  });

//changes the buttons' CSS so they are appearing to being pressed
  $(document).keydown(function (e) {  
    if (e.which === 49) {
        $("#member_A").css({
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 50){
        $("#member_B").css({
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 51){
        $("#member_C").css({
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 52){
        $("#member_D").css({
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 53){
        $("#member_E").css({
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 54){
        $("#member_F").css({
        "color": "#fff",
        "backgroundColor": "#ff5500",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    } else if (e.which === 32){
        $("#Silence").css({
        "color": "#fff",
        "backgroundColor": "#7EC0EE",
        "boxShadow": "0px 0px 0px rgba(100,174,177, 0.9)",
        "position": "relative",
        "top": "2px"
        }); 
    }
  });

// Keyboard shortcuts from 1 to 5 to represent the team members and space to represent silence
  $(document).keyup(function (e) {  
    if (e.which === 49) {
        memberAEnd = new Date() - memberAStart;
        getTime(memberAEnd);
        results.push(["Member A", time]);
        $("#member_A").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 50){
        memberBEnd = new Date() - memberBStart;
        getTime(memberBEnd);
        results.push(["Member B", time]);
        $("#member_B").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 51){
        memberCEnd = new Date() - memberCStart;
        getTime(memberCEnd);
        results.push(["Member C", time]);
        $("#member_C").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 52){
        memberDEnd = new Date() - memberDStart;
        getTime(memberDEnd);
        results.push(["Member D", time]);
        $("#member_D").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 53){
        memberEEnd = new Date() - memberEStart;
        getTime(memberEEnd);
        results.push(["Member E", time]);
        $("#member_E").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 54){
        memberFEnd = new Date() - memberFStart;
        getTime(memberFEnd);
        results.push(["Member F", time]);
        $("#member_F").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 32){
        silenceEnd = new Date() - silenceStart;
        getTime(silenceEnd);
        results.push(["Silence", time]);
        $("#Silence").css({
        "color": "#fff",
        "backgroundColor": "#ff7500",
        "boxShadow": "3px 3px 2px rgba(100,174,177, 0.5)",
        "outline": "none",
        });
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    }
  });

// get the difference between time ranges
  function getTime(a){
    hours = "00";
    minutes = Math.floor(a / 60000);
    seconds = ((a % 60000) / 1000);
    time = hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

// don't trigger the timestamps when using the keyboards shortcuts
  $('#team_name_input').bind('keyup keydown', function(e) {
     e.stopPropagation(); 
  });

// don't trigger the timestamps when click on the nextVideo 
  $('#nextVideo').bind('click', function(e) {
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
  function resultsOnScreen(){
          var lastResult = results.length - 1;
          $("table").append("<tr><td>" + results[lastResult][0] + "</td><td>" + results[lastResult][1] + "</td></tr>");
    }

});


var myVideo = document.getElementById("video1");
// PLACE ALL VIDEOS' NAMES HERE
var videoList = ['big_buck_bunny.mp4','test.mp4','test2.mp4','ChocolateScene.mp4'];
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

var mp4Vid = document.getElementById('mp4Source');
var video = document.getElementById('video1');
// Load the video you select from your hard disk
  var x;
  
  $("#loadVideo").click(function(){
    x = $(":file").val();
    x = x.replace(/.*(\/|\\)/, '');
    console.log(x);

    console.log(mp4Vid);
    $(mp4Vid).attr('src', x);
    video.load();
  });

  $(":file").change(function(){
    var newSource = $(":file").val();
    console.log($(":file").val());
  });