function myFunction() {

      var IF1_x = document.getElementById("IF1").value;
      var IF2_x = document.getElementById("IF2").value;
      var IF3_x = document.getElementById("IF3").value;
      var IF4_x = document.getElementById("IF4").value;

      var IF = (parseFloat(IF1_x)+parseFloat(IF2_x)+parseFloat(IF3_x)+parseFloat(IF4_x))/4;
      //var IFR = IF;
      var IFr = Math.round(IF*10000000)/10000000;
      //var IFR = Math.round(IF*10)/10;

      var CD_x = document.getElementById("CD").value;
      var CD = parseFloat(CD_x);

      var LV_x = document.getElementById("LV").value;
      var LV = parseFloat(LV_x);

      var radios_HA = document.getElementsByName('HA');
      for (var i = 0, length = radios_HA.length; i < length; i++) {
    if (radios_HA[i].checked) {
        // do whatever you want with the checked radio
        HA_x=radios_HA[i].value;
        var HA = parseFloat(HA_x);
        // only one radio can be logically checked, don't check the rest
        break;
    }
}
    var radios_TP = document.getElementsByName('TP');
      for (var i = 0, length = radios_TP.length; i < length; i++) {
    if (radios_TP[i].checked) {
        // do whatever you want with the checked radio
        TP_x=radios_TP[i].value;
        var TP = parseFloat(TP_x);
        // only one radio can be logically checked, don't check the rest
        break;
    }
}

      var GP_result=(((4.4*TP*0.79)+(2.7*IFr*0.81)+(HA*2.55))/(8.2))+CD+LV;
      var SC_result=(((TP*1.70)+(IFr*3.20)+(HA*3.20))/(8.1))+CD+LV;
      var C_result=(((TP*1.10)+(IFr*2.50)+(HA*3.20))/(6.8))+CD+LV;

      // document.getElementById("demo1").innerHTML = IF1_x;
      // document.getElementById("demo2").innerHTML = IF2_x;
      // document.getElementById("demo3").innerHTML = IF3_x;
      // document.getElementById("demo4").innerHTML = IF4_x;
      document.getElementById("demo5").innerHTML = IFr;
      //document.getElementById("demo5r").innerHTML = IFR;
      // document.getElementById("demo6").innerHTML = HA;
      // document.getElementById("demo7").innerHTML = TP;
      // document.getElementById("demo8").innerHTML = CD;
      // document.getElementById("demo9").innerHTML = LV;


      document.getElementById("demo10").innerHTML = Math.round(GP_result*10000)/10000;
      document.getElementById("demo11").innerHTML = Math.round(SC_result*10000)/10000;
      document.getElementById("demo12").innerHTML = Math.round(C_result*10000)/10000;

      document.getElementById("demo13").innerHTML = Math.round(GP_result*10)/10;
      document.getElementById("demo14").innerHTML = Math.round(SC_result*10)/10;
      document.getElementById("demo15").innerHTML = Math.round(C_result*10)/10;

    }
