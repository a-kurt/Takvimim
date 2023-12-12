import React, { useState } from 'react'
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Register = () => {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const provinces = ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"];
    const districts = {
        'Adana': ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir" ],
        'Adıyaman': [ "Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Merkez", "Samsat", "Sincik", "Tut" ],
        'Afyon': [ "Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Merkez", "Sandıklı", "Sinanpaşa", "Sultandağı", "Şuhut" ],
        'Ağrı': [ "Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Merkez", "Patnos", "Taşlıçay", "Tutak" ],
        'Amasya': [ "Göynücek", "Gümüşhacıköy", "Hamamözü", "Merkez", "Merzifon", "Suluova", "Taşova" ],
        'Ankara': [ "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Güdül", "Haymana", "Kalecik", "Kızılcahamam", "Nallıhan", "Polatlı", "Şereflikoçhisar", "Yenimahalle", "Gölbaşı", "Keçiören", "Mamak", "Sincan", "Kazan", "Akyurt", "Etimesgut", "Evren", "Pursaklar" ],
        'Antalya': [ "Akseki", "Alanya", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "Kaş", "Korkuteli", "Kumluca", "Manavgat", "Serik", "Demre", "İbradı", "Kemer", "Aksu", "Döşemealtı", "Kepez", "Konyaaltı", "Muratpaşa" ],
        'Artvin' : [ "Ardanuç", "Arhavi", "Merkez", "Borçka", "Hopa", "Şavşat", "Yusufeli", "Murgul" ],
        'Aydın' : [ "Merkez", "Bozdoğan", "Efeler", "Çine", "Germencik", "Karacasu", "Koçarlı", "Kuşadası", "Kuyucak", "Nazilli", "Söke", "Sultanhisar", "Yenipazar", "Buharkent", "İncirliova", "Karpuzlu", "Köşk", "Didim" ],
        'Balıkesir': [ "Altıeylül", "Ayvalık", "Merkez", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gönen", "Havran", "İvrindi", "Karesi", "Kepsut", "Manyas", "Savaştepe", "Sındırgı", "Gömeç", "Susurluk", "Marmara" ],
        'Bilecik': [ "Merkez", "Bozüyük", "Gölpazarı", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar", "İnhisar" ] ,
        'Bingöl': [ "Merkez", "Genç", "Karlıova", "Kiğı", "Solhan", "Adaklı", "Yayladere", "Yedisu" ],
        'Bitlis': [ "Adilcevaz", "Ahlat", "Merkez", "Hizan", "Mutki", "Tatvan", "Güroymak" ],
        'Bolu': [ "Merkez", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Mudurnu", "Seben", "Dörtdivan", "Yeniçağa" ] ,
        'Burdur': [ "Ağlasun", "Bucak", "Merkez", "Gölhisar", "Tefenni", "Yeşilova", "Karamanlı", "Kemer", "Altınyayla", "Çavdır", "Çeltikçi" ],
        'Bursa': [ "Gemlik", "İnegöl", "İznik", "Karacabey", "Keles", "Mudanya", "Mustafakemalpaşa", "Orhaneli", "Orhangazi", "Yenişehir", "Büyükorhan", "Harmancık", "Nilüfer", "Osmangazi", "Yıldırım", "Gürsu", "Kestel" ],
        'Çanakkale': [ "Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Merkez", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Yenice" ] ,
        'Çankırı': [ "Merkez", "Çerkeş", "Eldivan", "Ilgaz", "Kurşunlu", "Orta", "Şabanözü", "Yapraklı", "Atkaracalar", "Kızılırmak", "Bayramören", "Korgun" ] ,
        'Çorum': [ "Alaca", "Bayat", "Merkez", "İskilip", "Kargı", "Mecitözü", "Ortaköy", "Osmancık", "Sungurlu", "Boğazkale", "Uğurludağ", "Dodurga", "Laçin", "Oğuzlar" ] ,
        'Denizli': [ "Acıpayam", "Buldan", "Çal", "Çameli", "Çardak", "Çivril", "Merkez", "Merkezefendi", "Pamukkale", "Güney", "Kale", "Sarayköy", "Tavas", "Babadağ", "Bekilli", "Honaz", "Serinhisar", "Baklan", "Beyağaç", "Bozkurt" ],
        'Diyarbakır': [ "Kocaköy", "Çermik", "Çınar", "Çüngüş", "Dicle", "Ergani", "Hani", "Hazro", "Kulp", "Lice", "Silvan", "Eğil", "Bağlar", "Kayapınar", "Sur", "Yenişehir", "Bismil" ],
        'Edirne': [ "Merkez", "Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Uzunköprü", "Süloğlu" ],
        'Elazığ': [ "Ağın", "Baskil", "Merkez", "Karakoçan", "Keban", "Maden", "Palu", "Sivrice", "Arıcak", "Kovancılar", "Alacakaya" ] ,
        'Erzincan': [ "Çayırlı", "Merkez", "İliç", "Kemah", "Kemaliye", "Refahiye", "Tercan", "Üzümlü", "Otlukbeli" ] ,
        'Erzurum': [ "Aşkale", "Çat", "Hınıs", "Horasan", "İspir", "Karayazı", "Narman", "Oltu", "Olur", "Pasinler", "Şenkaya", "Tekman", "Tortum", "Karaçoban", "Uzundere", "Pazaryolu", "Köprüköy", "Palandöken", "Yakutiye", "Aziziye" ],
        'Eskişehir': [ "Çifteler", "Mahmudiye", "Mihalıççık", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Alpu", "Beylikova", "İnönü", "Günyüzü", "Han", "Mihalgazi", "Odunpazarı", "Tepebaşı" ],
        'Gaziantep': [ "Araban", "İslahiye", "Nizip", "Oğuzeli", "Yavuzeli", "Şahinbey", "Şehitkamil", "Karkamış", "Nurdağı" ],
        'Giresun': [ "Alucra", "Bulancak", "Dereli", "Espiye", "Eynesil", "Merkez", "Görele", "Keşap", "Şebinkarahisar", "Tirebolu", "Piraziz", "Yağlıdere", "Çamoluk", "Çanakçı", "Doğankent", "Güce" ],
        'Gümüşhane': [ "Merkez", "Kelkit", "Şiran", "Torul", "Köse", "Kürtün" ],
        'Hakkari': [ "Çukurca", "Merkez", "Şemdinli", "Yüksekova" ] ,
        'Hatay': [ "Altınözü", "Arsuz", "Defne", "Dörtyol", "Hassa", "Antakya", "İskenderun", "Kırıkhan", "Payas", "Reyhanlı", "Samandağ", "Yayladağı", "Erzin", "Belen", "Kumlu" ],
        'Isparta': [ "Atabey", "Eğirdir", "Gelendost", "Merkez", "Keçiborlu", "Senirkent", "Sütçüler", "Şarkikaraağaç", "Uluborlu", "Yalvaç", "Aksu", "Gönen", "Yenişarbademli" ],
        'Mersin': [ "Anamur", "Erdemli", "Gülnar", "Mut", "Silifke", "Tarsus", "Aydıncık", "Bozyazı", "Çamlıyayla", "Akdeniz", "Mezitli", "Toroslar", "Yenişehir" ] ,
        'İstanbul': [ "Adalar", "Bakırköy", "Beşiktaş", "Beykoz", "Beyoğlu", "Çatalca", "Eyüp", "Fatih", "Gaziosmanpaşa", "Kadıköy", "Kartal", "Sarıyer", "Silivri", "Şile", "Şişli", "Üsküdar", "Zeytinburnu", "Büyükçekmece", "Kağıthane", "Küçükçekmece", "Pendik", "Ümraniye", "Bayrampaşa", "Avcılar", "Bağcılar", "Bahçelievler", "Güngören", "Maltepe", "Sultanbeyli", "Tuzla", "Esenler", "Arnavutköy", "Ataşehir", "Başakşehir", "Beylikdüzü", "Çekmeköy", "Esenyurt", "Sancaktepe", "Sultangazi" ],
        'İzmir': [ "Aliağa", "Bayındır", "Bergama", "Bornova", "Çeşme", "Dikili", "Foça", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Menemen", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla", "Beydağ", "Buca", "Konak", "Menderes", "Balçova", "Çiğli", "Gaziemir", "Narlıdere", "Güzelbahçe", "Bayraklı", "Karabağlar" ],
        'Kars': [ "Arpaçay", "Digor", "Kağızman", "Merkez", "Sarıkamış", "Selim", "Susuz", "Akyaka" ],
        'Kastamonu': [ "Abana", "Araç", "Azdavay", "Bozkurt", "Cide", "Çatalzeytin", "Daday", "Devrekani", "İnebolu", "Merkez", "Küre", "Taşköprü", "Tosya", "İhsangazi", "Pınarbaşı", "Şenpazar", "Ağlı", "Doğanyurt", "Hanönü", "Seydiler" ],
        'Kayseri': [ "Bünyan", "Develi", "Felahiye", "İncesu", "Pınarbaşı", "Sarıoğlan", "Sarız", "Tomarza", "Yahyalı", "Yeşilhisar", "Akkışla", "Talas", "Kocasinan", "Melikgazi", "Hacılar", "Özvatan" ],
        'Kırklareli': [ "Babaeski", "Demirköy", "Merkez", "Kofçaz", "Lüleburgaz", "Pehlivanköy", "Pınarhisar", "Vize" ],
        'Kırşehir': [ "Çiçekdağı", "Kaman", "Merkez", "Mucur", "Akpınar", "Akçakent", "Boztepe" ],
        'Kocaeli': [ "Gebze", "Gölcük", "Kandıra", "Karamürsel", "Körfez", "Derince", "Başiskele", "Çayırova", "Darıca", "Dilovası", "İzmit", "Kartepe" ],
        'Konya': [ "Akşehir", "Beyşehir", "Bozkır", "Cihanbeyli", "Çumra", "Doğanhisar", "Ereğli", "Hadim", "Ilgın", "Kadınhanı", "Karapınar", "Kulu", "Sarayönü", "Seydişehir", "Yunak", "Akören", "Altınekin", "Derebucak", "Hüyük", "Karatay", "Meram", "Selçuklu", "Taşkent", "Ahırlı", "Çeltik", "Derbent", "Emirgazi", "Güneysınır", "Halkapınar", "Tuzlukçu", "Yalıhüyük" ],
        'Kütahya': [ "Altıntaş", "Domaniç", "Emet", "Gediz", "Merkez", "Simav", "Tavşanlı", "Aslanapa", "Dumlupınar", "Hisarcık", "Şaphane", "Çavdarhisar", "Pazarlar" ] ,
        'Malatya': [ "Akçadağ", "Arapgir", "Arguvan", "Darende", "Doğanşehir", "Hekimhan", "Merkez", "Pütürge", "Yeşilyurt", "Battalgazi", "Doğanyol", "Kale", "Kuluncak", "Yazıhan" ],
        'Manisa': [ "Akhisar", "Alaşehir", "Demirci", "Gördes", "Kırkağaç", "Kula", "Merkez", "Salihli", "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Şehzadeler", "Yunusemre", "Turgutlu", "Ahmetli", "Gölmarmara", "Köprübaşı" ] ,
        'Kahramanmaraş': [ "Afşin", "Andırın", "Dulkadiroğlu", "Onikişubat", "Elbistan", "Göksun", "Merkez", "Pazarcık", "Türkoğlu", "Çağlayancerit", "Ekinözü", "Nurhak" ],
        'Mardin': [ "Derik", "Kızıltepe", "Artuklu", "Merkez", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Dargeçit", "Yeşilli" ],
        'Muğla': [ "Bodrum", "Datça", "Fethiye", "Köyceğiz", "Marmaris", "Menteşe", "Milas", "Ula", "Yatağan", "Dalaman", "Seydikemer", "Ortaca", "Kavaklıdere" ],
        'Muş': [ "Bulanık", "Malazgirt", "Merkez", "Varto", "Hasköy", "Korkut" ] ,
        'Nevşehir': [ "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Merkez", "Ürgüp", "Acıgöl" ] ,
        'Niğde': [ "Bor", "Çamardı", "Merkez", "Ulukışla", "Altunhisar", "Çiftlik" ],
        'Ordu': [ "Akkuş", "Altınordu", "Aybastı", "Fatsa", "Gölköy", "Korgan", "Kumru", "Mesudiye", "Perşembe", "Ulubey", "Ünye", "Gülyalı", "Gürgentepe", "Çamaş", "Çatalpınar", "Çaybaşı", "İkizce", "Kabadüz", "Kabataş" ],
        'Rize': [ "Ardeşen", "Çamlıhemşin", "Çayeli", "Fındıklı", "İkizdere", "Kalkandere", "Pazar", "Merkez", "Güneysu", "Derepazarı", "Hemşin", "İyidere" ],
        'Sakarya': [ "Akyazı", "Geyve", "Hendek", "Karasu", "Kaynarca", "Sapanca", "Kocaali", "Pamukova", "Taraklı", "Ferizli", "Karapürçek", "Söğütlü", "Adapazarı", "Arifiye", "Erenler", "Serdivan" ] ,
        'Samsun': [ "Alaçam", "Bafra", "Çarşamba", "Havza", "Kavak", "Ladik", "Terme", "Vezirköprü", "Asarcık", "Ondokuzmayıs", "Salıpazarı", "Tekkeköy", "Ayvacık", "Yakakent", "Atakum", "Canik", "İlkadım" ] ,
        'Siirt': [ "Baykan", "Eruh", "Kurtalan", "Pervari", "Merkez", "Şirvan", "Tillo" ],
        'Sinop': [ "Ayancık", "Boyabat", "Durağan", "Erfelek", "Gerze", "Merkez", "Türkeli", "Dikmen", "Saraydüzü" ],
        'Sivas': [ "Divriği", "Gemerek", "Gürün", "Hafik", "İmranlı", "Kangal", "Koyulhisar", "Merkez", "Suşehri", "Şarkışla", "Yıldızeli", "Zara", "Akıncılar", "Altınyayla", "Doğanşar", "Gölova", "Ulaş" ],
        'Tekirdağ': [ "Çerkezköy", "Çorlu", "Ergene", "Hayrabolu", "Malkara", "Muratlı", "Saray", "Süleymanpaşa", "Kapaklı", "Şarköy", "Marmaraereğlisi" ],
        'Tokat': [ "Almus", "Artova", "Erbaa", "Niksar", "Reşadiye", "Merkez", "Turhal", "Zile", "Pazar", "Yeşilyurt", "Başçiftlik", "Sulusaray" ] ,
        'Trabzon': [ "Akçaabat", "Araklı", "Arsin", "Çaykara", "Maçka", "Of", "Ortahisar", "Sürmene", "Tonya", "Vakfıkebir", "Yomra", "Beşikdüzü", "Şalpazarı", "Çarşıbaşı", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı" ],
        'Tunceli': [ "Çemişgezek", "Hozat", "Mazgirt", "Nazımiye", "Ovacık", "Pertek", "Pülümür", "Merkez" ] ,
        'Şanlıurfa': [ "Akçakale", "Birecik", "Bozova", "Ceylanpınar", "Eyyübiye", "Halfeti", "Haliliye", "Hilvan", "Karaköprü", "Siverek", "Suruç", "Viranşehir", "Harran" ],
        'Uşak': [ "Banaz", "Eşme", "Karahallı", "Sivaslı", "Ulubey", "Merkez" ] ,
        'Van': [ "Başkale", "Çatak", "Erciş", "Gevaş", "Gürpınar", "İpekyolu", "Muradiye", "Özalp", "Tuşba", "Bahçesaray", "Çaldıran", "Edremit", "Saray" ],
        'Yozgat': [ "Akdağmadeni", "Boğazlıyan", "Çayıralan", "Çekerek", "Sarıkaya", "Sorgun", "Şefaatli", "Yerköy", "Merkez", "Aydıncık", "Çandır", "Kadışehri", "Saraykent", "Yenifakılı" ],
        'Zonguldak': [ "Çaycuma", "Devrek", "Ereğli", "Merkez", "Alaplı", "Gökçebey" ],
        'Aksaray': [ "Ağaçören", "Eskil", "Gülağaç", "Güzelyurt", "Merkez", "Ortaköy", "Sarıyahşi" ] ,
        'Bayburt': [ "Merkez", "Aydıntepe", "Demirözü" ],
        'Karaman': [ "Ermenek", "Merkez", "Ayrancı", "Kazımkarabekir", "Başyayla", "Sarıveliler" ],
        'Kırıkkale': [ "Delice", "Keskin", "Merkez", "Sulakyurt", "Bahşili", "Balışeyh", "Çelebi", "Karakeçili", "Yahşihan" ],
        'Batman': [ "Merkez", "Beşiri", "Gercüş", "Kozluk", "Sason", "Hasankeyf" ],
        'Şırnak': [ "Beytüşşebap", "Cizre", "İdil", "Silopi", "Merkez", "Uludere", "Güçlükonak" ],
        'Bartın': [ "Merkez", "Kurucaşile", "Ulus", "Amasra" ],
        'Ardahan': [ "Merkez", "Çıldır", "Göle", "Hanak", "Posof", "Damal" ],
        'Iğdır': [ "Aralık", "Merkez", "Tuzluca", "Karakoyunlu" ],
        'Yalova':[ "Merkez", "Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Termal" ] ,
        'Karabük': [ "Eflani", "Eskipazar", "Merkez", "Ovacık", "Safranbolu", "Yenice" ],
        'Kilis': [ "Merkez", "Elbeyli", "Musabeyli", "Polateli" ],
        'Osmaniye': [ "Bahçe", "Kadirli", "Merkez", "Düziçi", "Hasanbeyli", "Sumbas", "Toprakkale" ],
        'Düzce': [ "Akçakoca", "Merkez", "Yığılca", "Cumayeri", "Gölyaka", "Çilimli", "Gümüşova", "Kaynaşlı" ],
    }

    const handleProvinceChange = (e) => {
        setSelectedProvince(e.target.value);
    }

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    }

  return (
    <section>
        <div className='flex items-center justify-center mx-auto sm:h-screen lg:py-0'>
            <div className='w-full bg-white rounded-lg max-w-2xl xl:p-0'>
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                    <h1 className="text-2xl font-bold leading-tight tracking-tight text-blue-500 md:text-3xl text-center mt-12 sm:-mt-20">
                        Kayıt Ol
                    </h1>
                    <form className='space-y-4 md:space-y-6' action='#'>
                        <div className='flex flex-col sm:flex-row sm:justify-between'>
                            <div className='mb-4'>
                                <label htmlFor="name">Ad Soyad</label>
                                <input type="text" name="name" id="name" className="text-[#374754] sm:w-72 w-full bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block p-2.5 h-12" placeholder="Atakan Kurt" required="" />
                            </div>
                            <div>
                                <label htmlFor="nickname">Kullanıcı Adı</label>
                                <input type="text" name="nickname" id="nickname" className="text-[#374754] sm:w-72 w-full bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block p-2.5 h-12" placeholder="Terzi Atakan" required="" />
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:justify-between'>
                            <div className='mb-4'>
                                <label htmlFor="email">E-Posta</label>
                                <input type="email" name="email" id="email" className="text-[#374754] sm:w-72 w-full bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block p-2.5 h-12" placeholder="örnek@örnek.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="phone">Telefon Numarası</label>
                                <input type="tel" name="phone" id="phone" pattern="[0-9]{10}" className="text-[#374754] sm:w-72 w-full bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block p-2.5 h-12" placeholder="5555555555" required="" />
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:justify-between'>
                            <div className='mb-4'>
                                <label htmlFor="province">İl</label>
                                <select id='province' value={selectedProvince} onChange={handleProvinceChange} className="text-[#374754] sm:w-72 w-full bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block p-2.5 h-12">
                                    <option disabled value="">İl Seç</option>
                                    {provinces.map((province, index) => (
                                        <option key={index} value={province}>
                                            {province}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="district">İlçe</label>
                                <select id='district' value={selectedDistrict} onChange={handleDistrictChange} className="text-[#374754] sm:w-72 w-full bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block p-2.5 h-12">
                                    <option disabled value="">İlçe Seç</option>
                                    {selectedProvince &&
                                        districts[selectedProvince].map((district, index) => (
                                            <option key={index} value={district}>
                                                {district}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:justify-between'>
                            <div className='mb-4'>
                                <label htmlFor="password">Şifre</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="text-[#374754] sm:w-72 w-full bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block p-2.5 h-12" required="" />
                            </div>
                            <div>
                                <label htmlFor="password_repeat">Şifre Tekrar</label>
                                <input type="password" name="password_repeat" id="password_repeat" placeholder="••••••••" className="text-[#374754] sm:w-72 w-full bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block p-2.5 h-12" required="" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="user-agreement" aria-describedby="user-agreement" type="checkbox" className="w-4 h-4 border border-[#B0B0B0] rounded bg-gray-50 accent-blue-500" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="user-agreement" className="text-[#374754] text-xs"><Link to='/terms' className='text-blue-500 hover:underline'>Kullanıcı Sözleşmesini</Link> okudum, kabul ediyorum.</label>
                                </div>
                            </div>
                        </div>
                        <div class='flex justify-between'>
                            <Link to="/">
                                <button type="submit" class="border-2 border-blue-500 flex items-center text-blue-500 bg-white hover:text-white hover:bg-blue-600 focus:outline-none font-medium rounded-sm text-sm px-3 py-3 text-center">
                                    <BiChevronLeft size={26} class='' />
                                    <span class="mr-2">Geri Dön</span>
                                </button>
                            </Link>
                            <Link to="/main">
                                <button type="submit" class="flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded-sm text-sm px-3 py-3 text-center">
                                    <span class="ml-2">Devam Et</span>
                                    <BiChevronRight size={26} class='' />
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register