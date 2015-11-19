var vid = document.getElementById('video1');

$(document).ready(function() {

  var results = [["Member", "Start Time", "End Time"]];
  var memberAStart = 0, memberBStart = 0, memberCStart = 0, memberDStart = 0, memberEStart = 0, memberFStart = 0, silenceStart = 0;
  var memberAEnd = 0, memberBEnd = 0, memberCEnd = 0, memberDEnd = 0, memberEEnd = 0, memberFEnd = 0, silenceEnd = 0;
  var down = {};

// Keyboard shortcuts from 1 to 5 to represent the team members 
  $(document).keydown(function (e) {  
    if (e.which === 49) {
        $("#member_A").addClass('active');
        if (down['49'] == null) { // first press
          memberAStart = vid.currentTime;
          down['49'] = true; // record that the key's down
        }
    } else if (e.which === 50){
        $("#member_B").addClass('active');
        if (down['50'] == null) {
          memberBStart = vid.currentTime;
          down['50'] = true;
        };
    } else if (e.which === 51){
        $("#member_C").addClass('active');
        if (down['51'] == null) {
          memberCStart = vid.currentTime;
          down['51'] = true;
        };
    } else if (e.which === 52){
        $("#member_D").addClass('active');
        if (down['52'] == null) {
          memberDStart = vid.currentTime;
          down['52'] = true;
        };
    } else if (e.which === 53){
        $("#member_E").addClass('active');
        if (down['53'] == null) {
          memberEStart = vid.currentTime;
          down['53'] = true;
        };
    } else if (e.which === 54){
        $("#member_F").addClass('active');
        if (down['54'] == null) {
          memberFStart = vid.currentTime;
          down['54'] = true;
        };
    }
  });

// Keyboard shortcuts from 1 to 5 to represent the team members and space to represent silence
  $(document).keyup(function (e) {  
    if (e.which === 49) {
        $("#member_A").removeClass('active');
        memberAEnd = vid.currentTime;
        results.push(["Member A", memberAStart, memberAEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 50){
        $("#member_B").removeClass('active'); 
        memberBEnd = vid.currentTime;
        results.push(["Member B", memberBStart, memberBEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 51){
        $("#member_C").removeClass('active');
        memberCEnd = vid.currentTime;
        results.push(["Member C", memberCStart, memberCEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 52){
        $("#member_D").removeClass('active');
        memberDEnd = vid.currentTime;
        results.push(["Member D", memberDStart, memberDEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 53){
        $("#member_E").removeClass('active');
        memberEEnd = vid.currentTime;
        results.push(["Member E", memberEStart, memberEEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 54){
        $("#member_F").removeClass('active');
        memberFEnd = vid.currentTime;
        results.push(["Member F", memberFStart, memberFEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } 
  });

// don't trigger the timestamps when using the keyboards shortcuts
  $('#team_name_input').bind('keyup keydown', function(e) {
     e.stopPropagation(); 
  });

// don't trigger the space default functions
  $(document).keydown(function(e) {
    if (e.which == 32) {
        return false;
    }
  });

// don't trigger the timestamps when click on the nextVideo button
  $('#nextVideo').bind('click', function(e) {
     e.stopPropagation(); 
  });

// don't trigger the timestamps when click on the export button
  $('#Export').bind('click', function(e) {
    e.stopPropagation();
    exportData();
  });

  // clean the results array when button is clicked
  $('#clean').bind('click', function(e) {
    clearResults(); 
    console.log(results);
  });

// function that exports array results to excel .xlsx
  function exportData() {
      var team = $("#team_name_input").val();
      alasql("SELECT * INTO XLSX(\'"+ team + ".xlsx\',{headers:true}) FROM ? ",[results]);
  }

// clear the results array
  function clearResults(){
    results = [["Member", "Start Time", "End Time"]];
  }

// displays time stamps in the HTML page
  function resultsOnScreen(){
          var lastResult = results.length - 1;
          $("table").append("<tr><td>" + results[lastResult][0] + "</td><td>" + results[lastResult][1] + "</td><td>" + results[lastResult][2] + "</td></tr>");
  }

});

// Use this part of code if you are going to use the Next Video button
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