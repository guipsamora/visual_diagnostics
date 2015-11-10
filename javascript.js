$(document).ready(function() {

  var start = 0;
  var elapsed = 0;
  var results = [];
  var team;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var time = 0;

  $("button").click(function(){
   if (start === 0){
      start = new Date();
   } else {
      getTime();
      // pushes member and minutes since timer started to array results
      results.push([this.id, time]);
      console.log(results);
   }
  });

// export array results to excel xlsx file and clean the results array
  $(".export").click(function(){
    exportData();
    clearResults();
  });

// Keyboard shortcuts from 1 to 5 to represent the team members and space to represent silence
  $("button").keypress(function (e) {  
    if (e.which === 49) {
        getTime();
        results.push(["Member A", time]);
        console.log(results);
    } else if(e.which === 50){
        getTime();
        results.push(["Member B", time]);
        console.log(results);
    } else if(e.which === 51){
        getTime();
        results.push(["Member C", time]);
        console.log(results);
    } else if(e.which === 52){
        getTime();
        results.push(["Member D", time]);
        console.log(results);
    } else if(e.which === 53){
        getTime();
        results.push(["Member E", time]);
        console.log(results);
    } else if(e.which === 54){
        getTime();
        results.push(["Member F", time]);
        console.log(results);
    } else if (e.which === 32){
        getTime();
        results.push(["Silence", time]);
        console.log(results);
    }
  });

// function that exports array results to excel .xlsx
  function exportData() {
      team = $("#team").val();
      alasql("SELECT * INTO XLSX(\'"+ team + ".xlsx\',{headers:true}) FROM ? ",[results]);
  }

// clear the results array
  function clearResults(){
    results = [];
  }

// 
  function getTime(){
    elapsed = new Date() - start;
    hours = "00";
    minutes = Math.floor(elapsed / 60000);
    seconds = ((elapsed % 60000) / 1000);
    time = hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

});