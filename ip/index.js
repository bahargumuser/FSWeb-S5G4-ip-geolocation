//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

let cards = document.querySelector("div.cards");
const cardYapici = (item) => {
  const {
    ülke,
    parabirimi,
    saatdilimi,
    isp,
    şehir,
    enlem,
    boylam,
    sorgu,
    ülkeKodu,
    ülkebayrağı,
  } = item;

  const divAdd = document.createElement("div");
  divAdd.setAttribute("class", "card");

  const imgAdd = document.createElement("img");
  imgAdd.src = ülkebayrağı;
  divAdd.appendChild(imgAdd);

  let divAdd1 = document.createElement("div");
  divAdd1.classList = "card-info";
  divAdd.appendChild(divAdd1);

  let cardh3 = document.createElement("h3");
  cardh3.classList = "ip";
  cardh3.textContent = sorgu;
  divAdd1.appendChild(cardh3);

  const cardp7 = document.createElement("p");
  cardp7.classList = "ulke";
  cardp7.textContent = `${ülke}(${ülkeKodu})`;
  divAdd1.appendChild(cardp7);

  let cardp1 = document.createElement("p");
  cardp1.textContent = `Enlem: ${enlem} Boylam: ${boylam}`;
  divAdd1.appendChild(cardp1);

  let cardp2 = document.createElement("p");
  cardp2.textContent = `Şehir: ${şehir}`;
  divAdd1.appendChild(cardp2);

  let cardp4 = document.createElement("p");
  cardp4.textContent = `Saat dilimi: ${saatdilimi}`;
  divAdd1.appendChild(cardp4);

  let card5 = document.createElement("p");
  card5.textContent = `Para birimi: ${parabirimi}`;
  divAdd1.appendChild(card5);

  const card6 = document.createElement("p");
  card6.textContent = `ISP: ${isp}`;
  divAdd1.appendChild(card6);

  return divAdd;
};

const dummy = {
  sorgu: "78.185.211.164",
  durum: "OK",
  kıta: "Asia",
  ülke: "Turkey",
  ülkeKodu: "TR",
  ülkebayrağı: "https://apis.ergineer.com/ulkebayraklari/TR",
  bölge: "09",
  bölgeAdı: "Aydın",
  şehir: "Aydin",
  zip: "09370",
  enlem: 37.84479999999999932924765744246542453765869140625,
  boylam: 27.8385999999999995679900166578590869903564453125,
  saatdilimi: "Europe/Istanbul",
  parabirimi: "TRY",
  isp: "TurkTelecom",
  organizasyon: "Turk Telekomunikasyon A.S",
  as: "AS47331 TTNet A.S.",
};

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/
const connection = async function () {
  await ipAdresimiAl();
  await axios
    .get("https://apis.ergineer.com/ipgeoapi/" + benimIP)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .then(function (a) {
      cards.appendChild(cardYapici(a));
    });
};
connection();
//cards.appendChild(cardYapici(dummy));
/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
