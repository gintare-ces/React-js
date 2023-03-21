## Kodėl mums reikalingi frameworkai?

Mes su jumis rašėme nemažai JavaScript'o kodo, kur naudojome innerHTML/textContent bei createElement su append. Ir turbūt daugumai tai pasirodė kaip visai nemažai darbo. O jei dar pagalvojus, kad kuriame puslapį su daug funkcijų, kur dinamiškai keičiasi ir meniu informacija, ir turinys; resursai pernaudojami; fetch'ų ne po vieną ar du - beprotiškai sudėtingi ir painūs taptų mūsų JS file'ai.

Ir iš tiesų, kai kurie projektai reikalauja Vanilla JavaScript kodo, t.y. parašyti viską nenaudojant jokių frameworkų ar bibliotekų - taip kaip mes iki dabar darėm, bet dažniausiai tai nėra efektyvu, o labiau daroma, kad nebūtų priklausomybės nuo išorinių organizacijų (ar teisingas toks požiūris - diskutuotina, bet tai retenybė, kurią kartais sutinkame kariuomenės ar banko projektuose). Juk frameworkai būtent sukurti, kad padėtų mums kurti produktą greičiau, patogiau ir saugiau.

Jei prisiminsime, naršyklės skaito front-end'o kodą sudarytą iš HTML/CSS/JS ir taip sugeneruoja puslapį. Jie React'o JSX ar Angular kodo nesupranta - dienos gale, React/Angular/Vue turi sugeneruoti HTML/CSS/JS file'us (panašiai kaip SASS naudojant pasirašydavome patogesnį stiliaus kodą, kurį konvertuodavo į CSS). Tad, kad ir kaip frameworkai pagelbėja kuriant dinaminius puslapius - galutiniai file'ai serveryje, kuriuos paduos klientui bus statiniai front-end'o file'ai (taip, kaip iki šiol).

### Tačiau, kaip ir su SCSS, frameworkai gelbėja su:

1. JS ir HTML integravimu (naudoja template variklius ar panašiai, kad nereikėtų mums rašyti append/innerHTML, o galėtume viską rašyti kartu - neužilgo pamatysite su JSX praktikoje);
2. Komponentizavimu (padeda projektą išdalinti į mažas dalis, kad lengviau būtų susigaudyti bei komandoje dirbti prie vieno puslapio; pernaudoti jau turimą kodą);
3. Reaktyvumu (dinaminiu informacijos atnaujinimu - t.y. įvykus pokyčiui per virtualų DOM greitai ir efektyviai pakeičia tik reikiamas puslapio vietas);
4. State valdymu (projektai turi savo statusus - pvz. vartotojas prisijungęs ar ne; ir dažnai JS frameworkai mums padeda šią informaciją globaliai laikyti ir efektyviai atnaujinti)
5. Daug daugiau (juk frameworkai vienas nuo kito skiriasi ir atneša savo naujumų)!
6. Vienas svarbiausių privalumų yra reaktyvumas (iš to ir kilo pavadinimas React), susipažinkime, ką tai reiškia:

Vienas svarbiausių privalumų yra reaktyvumas (iš to ir kilo pavadinimas React), susipažinkime, ką tai reiškia:

<div align="center">
  <a href="https://www.youtube.com/watch?v=BYbgopx44vo"><img src="https://img.youtube.com/vi/BYbgopx44vo/0.jpg" alt="IMAGE ALT TEXT"></a>
</div>

# Kas yra ReactJS?

ReactJS yra viena populiariausių JS bibliotekų, sukurta Facebook įmonės. Ji plačiai paplitusi ir net kartais skaitoma kaip standartas kuriant front-end projektus. Su šia biblioteka ar jos atšakomis (kaip React Native, kuri leidžia kurti programėles telefonui), sukurta daugybė populiarių aplikacijų kaip Instagram, Netflix, Whatsapp, Yahoo Mail, Dropbox.

Susipažinkime su šia biblioteka:

<div align="center">
  <a href="https://www.youtube.com/watch?v=Tn6-PIqc4UM"><img src="https://img.youtube.com/vi/Tn6-PIqc4UM/0.jpg" alt="IMAGE ALT TEXT"></a>
</div>

Vienas svarbiausių aspektų mums - JS frameworkai dažnai turi labai geras dokumentacijas, o ReactJS - tikrai ne išimtis. Galite visada reikiamą informaciją susirasti [čia](https://react.dev/learn) arba paprasčiausiai pagoogle'inus (turbūt net atsakymus rastumėte visoms idėjoms, gerai paieškoję - juk prikurta milijonai projektų su ReactJS).
