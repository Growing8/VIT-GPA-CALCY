const calcy = () =>{

    let one = document.getElementById('one').value;
    let two = document.getElementById('two').value;
    let three = document.getElementById('three').value;
    let four = document.getElementById('four').value;
    let five = document.getElementById('five').value;
    let six = document.getElementById('six').value;
    let seven = document.getElementById('seven').value;
    let eight = document.getElementById('eight').value;

    let c1 =0;
    let c2 =0;
    let c3 =0;
    let c4 =0;
    let c5 =0;
    let c6 =0;
    let c7 =0;
    let c8 =0;

    c1 = document.getElementById('a').value;
    c2 = document.getElementById('b').value;
    c3 = document.getElementById('c').value;
    c4 = document.getElementById('d').value;
    c5 = document.getElementById('e').value;
    c6 = document.getElementById('f').value;
    c7 = document.getElementById('g').value;
    c8 = document.getElementById('h').value;

    if(one=='S' || one=='s'){
        one=10;
    }
    else if(one=='A' || one=='a'){
        one=9;
    }
    else if(one=='B' || one=='b'){
        one=8;
    }
    else if(one=='C' || one=='c'){
        one=7;
    }
    else if(one=='D' || one=='d'){
        one=6;
    }
    else{
        one=0;
    }
    if(two=='S' || two=='s'){
        two=10;
    }
    else if(two=='A' || two=='a'){
        two=9;
    }
    else if(two=='B' || two=='b'){
        two=8;
    }
    else if(two=='C' || two=='c'){
        two=7;
    }
    else if(two=='D' || two=='d'){
        two=6;
    }
    else{
        two=0;
    }
    if(three=='S' || three=='s'){
        three=10;
    }
    else if(three=='A' || three=='a'){
        three=9;
    }
    else if(three=='B' || three=='b'){
        three=8;
    }
    else if(three=='C' || three=='c'){
        three=7;
    }
    else if(three=='D' || three=='d'){
        three=6;
    }
    else{
        three=0;
    }
    if(four=='S' || four=='s'){
        four=10;
    }
    else if(four=='A' || four=='a'){
        four=9;
    }
    else if(four=='B' || four=='b'){
        four=8;
    }
    else if(four=='C' || four=='c'){
        four=7;
    }
    else if(four=='D' || four=='d'){
        four=6;
    }
    else{
        four=0;
    }
    if(five=='S' || five=='s'){
        five=10;
    }
    else if(five=='A' || five=='a'){
        five=9;
    }
    else if(five=='B' || five=='b'){
        five=8;
    }
    else if(five=='C' || five=='c'){
        five=7;
    }
    else if(five=='D' || five=='d'){
        five=6;
    }
    else{
        five=0;
    }
    if(six=='S' || six=='s'){
        six=10;
    }
    else if(six=='A' || six=='a'){
        six=9;
    }
    else if(six=='B' || six=='b'){
        six=8;
    }
    else if(six=='C' || six=='c'){
        six=7;
    }
    else if(six=='D' || six=='d'){
        six=6;
    }
    else{
        six=0;
    }
    if(seven=='S' || seven=='s'){
        seven=10;
    }
    else if(seven=='A' || seven=='a'){
        seven=9;
    }
    else if(seven=='B' || seven=='b'){
        seven=8;
    }
    else if(seven=='C' || seven=='c'){
        seven=7;
    }
    else if(seven=='D' || seven=='d'){
        seven=6;
    }
    else{
        seven=0;
    }
    if(eight=='S' || eight=='s'){
        eight=10;
    }
    else if(eight=='A' || eight=='a'){
        eight=9;
    }
    else if(eight=='B' || eight=='b'){
        eight=8;
    }
    else if(eight=='C' || eight=='c'){
        eight=7;
    }
    else if(eight=='D' || eight=='d'){
        eight=6;
    }
    else{
        eight=0;
    }
    let totalGrades = 0;    

    let totalcredits =0;
    if(c1){
      totalcredits+=parseFloat(c1);
      totalGrades +=parseFloat(one)*parseFloat(c1);
    }
    if(c2){
      totalcredits+=parseFloat(c2);
      totalGrades +=parseFloat(two)*parseFloat(c2);
    }
    if(c3){
      totalcredits+=parseFloat(c3);
      totalGrades +=parseFloat(three)*parseFloat(c3);
    }
    if(c4){
      totalcredits+=parseFloat(c4);
      totalGrades +=parseFloat(four)*parseFloat(c4);
    }
    if(c5){
      totalcredits+=parseFloat(c5);
      totalGrades +=parseFloat(five)*parseFloat(c5);
    }
    if(c6){
      totalcredits+=parseFloat(c6);
      totalGrades +=parseFloat(six)*parseFloat(c6);
    }
    if(c7){
      totalcredits+=parseFloat(c7);
      totalGrades +=parseFloat(seven)*parseFloat(c7);
    }
    if(c8){
      totalcredits+=parseFloat(c8);
      totalGrades +=parseFloat(eight)*parseFloat(c8);
    }
  
    let gpa = (totalGrades/totalcredits);
  
    debugger;
  
    document.getElementById('showData').innerHTML = ` Your GPA is  ${gpa}. `
    
  
    
  }