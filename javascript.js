var video = document.getElementById('video1');

$(document).ready(function(){

  var results = [["Member", "Start Time", "End Time"]];
  var memberAStart = 0, memberBStart = 0, memberCStart = 0, memberDStart = 0, memberEStart = 0, memberFStart = 0, silenceStart = 0;
  var memberAEnd = 0, memberBEnd = 0, memberCEnd = 0, memberDEnd = 0, memberEEnd = 0, memberFEnd = 0, silenceEnd = 0;
  var down = {};
  var filterArray = [];

// Keyboard shortcuts from 1 to 5 to represent the team members 
  $(document).keydown(function (e) {  
    if (e.which === 49 && video.currentTime !==0) {
        $("#member_A").addClass('active');
        if (down['49'] == null) { // first press
          memberAStart = video.currentTime;
          down['49'] = true; // record that the key's down
        }
    } else if (e.which === 50 && video.currentTime !==0){
        $("#member_B").addClass('active');
        if (down['50'] == null) {
          memberBStart = video.currentTime;
          down['50'] = true;
        };
    } else if (e.which === 51 && video.currentTime !==0){
        $("#member_C").addClass('active');
        if (down['51'] == null) {
          memberCStart = video.currentTime;
          down['51'] = true;
        };
    } else if (e.which === 52 && video.currentTime !==0){
        $("#member_D").addClass('active');
        if (down['52'] == null) {
          memberDStart = video.currentTime;
          down['52'] = true;
        };
    } else if (e.which === 53 && video.currentTime !==0){
        $("#member_E").addClass('active');
        if (down['53'] == null) {
          memberEStart = video.currentTime;
          down['53'] = true;
        };
    } else if (e.which === 54 && video.currentTime !==0){
        $("#member_F").addClass('active');
        if (down['54'] == null) {
          memberFStart = video.currentTime;
          down['54'] = true;
        };
    }
  });

// Keyboard shortcuts from 1 to 5 to represent the team members and space to represent silence
  $(document).keyup(function (e) {  
    if (e.which === 49 && video.currentTime !==0) {
        $("#member_A").removeClass('active');
        memberAEnd = video.currentTime;
        results.push(["Member A", memberAStart, memberAEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 50 && video.currentTime !==0){
        $("#member_B").removeClass('active'); 
        memberBEnd = video.currentTime;
        results.push(["Member B", memberBStart, memberBEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 51 && video.currentTime !==0){
        $("#member_C").removeClass('active');
        memberCEnd = video.currentTime;
        results.push(["Member C", memberCStart, memberCEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 52 && video.currentTime !==0){
        $("#member_D").removeClass('active');
        memberDEnd = video.currentTime;
        results.push(["Member D", memberDStart, memberDEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 53 && video.currentTime !==0){
        $("#member_E").removeClass('active');
        memberEEnd = video.currentTime;
        results.push(["Member E", memberEStart, memberEEnd]);
        down[e.which] = null
        resultsOnScreen();
        console.log(results);
    } else if (e.which === 54 && video.currentTime !==0){
        $("#member_F").removeClass('active');
        memberFEnd = video.currentTime;
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
  $('#clean').bind('click', function() {
    clearResults(); 
  });

// removes row entry on the screen and array
  $('table').on('click', 'button.removebutton', function () {
    //member in the row
    // var memberRow = $(this).parent().parent()[0]["children"][0]["innerHTML"];
    //start time in the row
    // var startTimeRow = +$(this).parent().parent()[0]["children"][1]["innerHTML"];
    // end time in the row
    var endTimeRow = +$(this).parent().parent()[0]["children"][2]["innerHTML"];
    filterArray.push(endTimeRow);
    console.log(filterArray);
    // removes the row on the screen
    $(this).closest('tr').remove();
    return false;
  });



// function that exports array results to excel .xlsx
  function exportData() {
      var team = $("#team_name_input").val();

      // filters the results array
      results = results.filter(function(value){
        return filterArray.indexOf(value[2]) === -1
      })

      alasql("SELECT * INTO XLSX(\'"+ team + ".xlsx\',{headers:true}) FROM ? ",[results]);
  }

// clear the results array
  function clearResults(){
    results = [["Member", "Start Time", "End Time"]];
    // clean the results on the page, but keeps the first row
    $('tr').not(':first').remove();
    console.log(results);
  };

// displays time stamps in the HTML page
  function resultsOnScreen(){
          var lastResult = results.length - 1;
          $("table").append("<tr id =" + lastResult + "><td>" + results[lastResult][0] + "</td><td>" + results[lastResult][1] + "</td><td>" + results[lastResult][2] + "</td><td class=\"delete\"><button class=\"removebutton\"><img src=\"delete.png\" height=10px width=10px ></td></tr>");
          // $("table").append("<tr id =\"row"+lastResult + "\"><td>" + results[lastResult][0] + "</td><td>" + results[lastResult][1] + "</td><td>" + results[lastResult][2] + "</td><td class=\"delete\"><button class=\"removebutton\"><img src=\"delete.png\" height=10px width=10px ></td></tr>");
  }

});

// Use this part of code if you are going to use the Next Video button
// PLACE ALL VIDEOS' NAMES HERE
var videoList = ['big_buck_bunny.mp4','test.mp4','test2.mp4','ChocolateScene.mp4'];
var index = videoList.indexOf(window.currentVideoName);

//Next video button
function nextButton(){
  index = index + 1;

  if (index === videoList.length){
    index = 0;
    video.src = videoList[index];
  } else {
    video.src = videoList[index];
    window.currentVideoName = videoList[index];
  }
}

var mp4Vid = document.getElementById('mp4Source');
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

//slow down video button
$("#slowDownVid").click(function(){
  if(video.playbackRate = 1){
    video.playbackRate = 0.75;
  } else {
    video.playbackRate = 1
  }
});
    
//rewind video button
$("#rewind").click(function(){
  video.currentTime = video.currentTime - 10;
});

(function localFileVideoPlayerInit(win) {
    var URL = win.URL || win.webkitURL;
    
    var displayMessage = (function displayMessageInit() {
            var node = document.querySelector('#message');

            return function displayMessage(message, isError) {
                node.innerHTML = message;
                node.className = isError ? 'error' : 'info';
            };
        }());

    var playSelectedFile = function playSelectedFileInit(event) {
            var file = this.files[0];
            var type = file.type;
            var videoNode = document.querySelector('#video1');
            var canPlay = videoNode.canPlayType(type);

            canPlay = (canPlay === '' ? 'no' : canPlay);

            var message = 'Can play type "' + type + '": ' + canPlay;
            var isError = canPlay === 'no';

            displayMessage(message, isError);

            if (isError) {
                return;
            }

            var fileURL = URL.createObjectURL(file);

            videoNode.src = fileURL;
        };

    var inputNode = document.querySelector('#videoSource');

    if (!URL) {
        displayMessage('Your browser is not ' + '<a href="http://caniuse.com/bloburls">supported</a>!', true);
        return;
    }

    inputNode.addEventListener('change', playSelectedFile, false);
}(window));