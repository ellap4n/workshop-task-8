
let hol_api = 'https://date.nager.at/api/v3/PublicHolidays/2025/NZ'
let holiday= [];
let date = [];
let note, hand, cry;
let j_data;
let month, noHol, jan, feb, mar, apr, jun, aug, sep, oct, nov, dec;

function preload() {
  note = loadFont('Cute Notes.ttf');
  hand = loadFont('simplicity.ttf');
  cry = loadImage('cry.jpg');
}
function setup() {
  createCanvas(400, 400);
  month = createSelect();
  month.position(130, 120);
  month.option('-- Select Month --')
  month.option('January');
  month.option('February');
  month.option('March');
  month.option('April');
  month.option('May');
  month.option('June');
  month.option('July');
  month.option('August');
  month.option('September');
  month.option('October');
  month.option('November');
  month.option('December');
  getHol();
}

async function getHol() {
  let data = await fetch(hol_api);
  j_data = await data.json();

}

function draw() {
  background(220);
  noHol = 'NO HOLIDAYS :(';
    let monthSelect = month.selected();
    if (monthSelect === 'January') {
    background(255, 196, 232);
    holiday.length = 0;
    date.length = 0;
    for(i=0; i < 4; i++) {
      jan = j_data[i].name;
      holiday.push(jan);
      jan = j_data[i].date;
      date.push(jan);
    }
  } else if (monthSelect === 'February') {
    background(204, 100, 84);
    holiday.length = 0;
    date.length = 0;
    for(i =0; i < 2; i++) {
      feb = j_data[i+4].name;
      holiday.push(feb);
      feb = j_data[i+4].date;
      date.push(feb);
    }
  } else if (monthSelect === 'March') {
    background(112, 181, 110);
    holiday.length = 0;
    date.length = 0;
    for(i =0; i < 2; i++) {
      mar = j_data[i+6].name;
      holiday.push(mar);
      mar = j_data[i+6].date;
      date.push(mar);
    }
  } else if (monthSelect === 'April') {
    background(144, 191, 224);
    holiday.length = 0;
    date.length = 0;
    for(i =0; i < 4; i++) {
      apr = j_data[i+8].name;
      holiday.push(apr);
      apr = j_data[i+8].date;
      date.push(apr);
    }
  } else if (monthSelect === 'May' || monthSelect === 'July' || monthSelect === 'August') {
    background(112, 104, 82);
    image(cry, 200, 200, 150, 150);
    holiday.length = 0;
    date.length = 0;
      holiday.push(noHol);
  } else if (monthSelect === 'June') {
    background(98, 107, 181);
    holiday.length = 0;
    date.length = 0;
    for(i =0; i < 2; i++) {
      jun = j_data[i+12].name;
      holiday.push(jun);
      jun = j_data[i+12].date;
      date.push(jun);
    }
  } else if (monthSelect === 'September') {
    background(219, 160, 96);
    holiday.length = 0;
    date.length = 0;
    sep = j_data[14].name;
    holiday.push(sep);
    sep = j_data[14].date;
    date.push(sep);
  } else if (monthSelect === 'October') {
    background(250, 125, 125);
    holiday.length = 0;
    date.length = 0;
    for(i =0; i < 2; i++) {
      oct = j_data[i+15].name;
      holiday.push(oct);
      oct = j_data[i+15].date;
      date.push(oct);
    }
  } else if (monthSelect === 'November') {
    background(136, 219, 211);
    holiday.length = 0;
    date.length = 0;
    for(i =0; i < 2; i++) {
      nov = j_data[i+17].name;
      holiday.push(nov);
      nov = j_data[i+17].date;
      date.push(nov);
    }
  } else if (monthSelect === 'December') {
    background(50, 140, 65);
    holiday.length = 0;
    date.length = 0;
    for(i =0; i < 4; i++) {
      dec = j_data[i+19].name;
      holiday.push(dec);
      dec = j_data[i+19].date;
      date.push(dec);
    }

  }
  textAlign(CENTER);
  textFont(note);
  textSize(30);
  text('public holiday\ncalendar!', 200, 55);
  // reveal text
  textFont(hand);
  textSize(20);
  for(let a = 0; a < holiday.length; a++) {
  textAlign(LEFT);
  text(holiday[a], 20, a*20 + 200);
  textAlign(RIGHT);
  text(date[a], 380, a*20 + 200);
  }
}