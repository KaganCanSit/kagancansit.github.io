---
layout: post
title: "Dahi Programcı Efsanesi ve Yetersizlik Hissi"
date: 2023-09-24
lang: tr
header_image: "/assets/images/blogs/dahi_yazilimci_efsanesi_ve_yetersizlik_hissi/header_image.webp"
description: "Yazılım dünyasında dahi programcı miti, ekip çalışması ve yetersizlik hissiyle başa çıkma"
---

**Hoş geldin!**

Başlamadan önce şunu belirtmeliyim: Aşağıda yer alan içeriği oluştururken **farklı mühendislerin, yazarların ve bilim insanlarının görüşlerini ele alarak kendi düşüncelerime yer verdim.** İçeriğin genel kapsamının benim bakış açımdan olduğunu bilmelisin.

### Giriş

Hayatımız boyunca çeşitli alanlarda becerilerimizi geliştirmeye ve bilgimizi artırmaya çalışırız. Ancak hangi yeteneklere sahip olursak olalım, bu kazanımları edinmek için büyük bir çaba harcamamız gerekir.

**Peki, neden bu kadar zor?**

Beceri kavramını "Elinden iş gelme durumu, ustalık." veya "Kişinin, yatkınlık ve öğrenime bağlı olarak, bir işi başarma, gerektiği gibi sonuçlandırma yeteneği." olarak tanımlıyoruz. Aslında cevap yapmış olduğumuz bu tanımlarda gizli. Bir beceri geliştirmek, ustalık için tecrübe, deneyim elde etmeye eş değer bir durumdur. Süreç içerisinde istikrar, zaman ve emek harcamak gerekir. Bu nedenle, beceri kazanma sürecinin değeri, bireylerin çaba harcadıkları ve öğrenmeye ayırdıkları zamana dayanır. Başarı ve ustalık, süreç boyunca edinilen irili ufaklı birçok denemenin sonucunda gerçekleşen deneyimlerin sonucudur.

Geçmişten günümüze kar topu gibi büyüyerek gelen bir bilgi birikimi var. Bundan 25 -30 yıl önce tuşlu telefon, internet gibi teknolojiler daha yeni yaygınlaşıyor. Ev telefonları ise modaydı. Şu an uzaktan eğitim alıyor, birçok işimizi internet üzerinden hallediyor, kuantum bilgisayarlarla hesaplama yapıyor ve uzaya kargo gönderiyoruz. Bu durum karşısında ise işler giderek karmaşık bir hal alıyor. Problemler daha kapsamlı hale geliyor. Artan dünya nüfusu, azalan enerji kaynakları, hava kirliliği, sanal olarak artan iş süreçleri...

Bizim ise ustalık edinmek için gerçekleştirmemiz gereken irili ufaklı denemelerin sayısı bir hayli artıyor. Eskiden sadece birkaç kişi tarafından bilinen bir bilgi şu an birçok kişi tarafından biliniyor. Bu sebeple bilgiye sahi olmaktadan daha önemlisi bilgiyi işleyerek kazanım haline getirebilmek.

Peki karşımızda sayısız teknolojik araç ve programlama dili, çözülmesi gereken büyük kapsamlı sorunlar varken tüm bu alanlarda bir kişinin uzmanlaşması mümkün mü? Elbette hayır. Mühendislik ve gelişim, ekip çalışması ve iş birliği gerektirir. Yarını inşa edebilmek ve bilgi birikimleri aracılığıyla büyüyen kar topunu yuvarlamak için kendimize ve çevremize karşı daha gerçekçi, paylaşımcı olmamız gerekiyor. Yoksa asırlarca da çalışsak kar topunun büyümeyeceği kesin.

Şimdi kısaca giriş yaptığımıza göre, bu blog içeriğini nasıl yönlendireceğimizi ve geliştireceğimizi düşünelim. İlham aldığım kaynak, Brian Fitzpatrick ve Collins Sussman'ın 2009'da gerçekleştirdiği "Google I/O 2009 - The Myth of the Genius Programmer" konuşması. Bu konuşma, bir geliştiricinin temel hatalarını, insan ilişkilerinin etkilerini ve gelişme düşüncesini bizler için ele alıyor. Bizde içeriğin başlıklarını genişleterek düşüncelerimizi derinleştireceğiz. Başlamadan önce sana bu konuşmayı izleme fırsatı sunmak istiyorum. Video içeriği hemen aşağıda yer alıyor.

{% raw %}
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/0SARbwvhupQ" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
</div>
{% endraw %}

### Temel

Temeli atarken bizlere hem mesleki olarak verdikleri örneklerle hem sordukları sorularla güzel bir bakış açısı kazandıracak olan Fitzpatrick ve Collins Sussman'a kulak verelim.

Konuşmada sorulan sorular:
1. Odada bulunan kaç kişi tamamen yalnız başına kod yazıyor?

* Bu soru için kimsenin el kaldırmadığını fark etmişsinizdir. Çünkü kapsamlı olarak geliştirilen yazılım projeleri başta da belirttiğim gibi bir ekip işidir. Ardından "Yalnız kod geliştirmeyi kimler seviyor?" (Ekip var ama bir kısım üzerinde yalnız çalışmak.) sorusuyla katılımcılar artıyor.

2. Takımlarda kaç kişi çalışıyor?
3. Bu odada kaç kişi geliştirme süreçlerinin bir parçası olarak kod analizi (code review) yapıyor?
4. Başkalarının önünde aptal gibi görünmekten kim korkuyor?

* Aslında soruların gidişatı bizler için düşünce sistemini ifade ediyor. Temel olarak toplum tarafından yargılanma korkusunu barındırıyorlar. Bu arada şunu da eklemeliyim. Bu videonun çekildiği tarihlerde birden fazla versiyon kontrol sistemi geliştiriliyor ve kalıplaşmış bir standart henüz yok. Genel anlamda ekip olarak çalışma yaklaşımları ve süreçler tartışılıyor. Bu sebeple o dönem için code review günümüzde olduğu kadar temel bir kavram değil.

Ardından isim verilmeden iş yerinde yapılmış olan çeşitli istek alıntılarını görüyoruz;
* "Lütfen Google Code'da Subversion'a belirli dalları gizleme yeteneği verebilir misiniz?"
* "Başlangıçta gizli olan ve hazır olduklarında 'ortaya çıkan' açık kaynaklı projeler yaratmayı mümkün kılabilir misiniz?"
* "Merhaba tüm kodlarımı sıfırdan yeniden yazmak istiyorum, lütfen tüm geçmişi silebilir misiniz?"

Tüm alıntıların ardından ise "Bunların hepsinin ortak noktası nedir?" sorusu ve Collins Sussman'ının "Burada çok fazla güvensizlik var. Bu hepimizin ortak duygusu." cevabıyla bağ kurulmuş oluyor. Aslında bu kısa cevabın da barındırdığı anlam bence çok büyük. "hepimizin ortak duygusu" ifadesiyle birlikte birçok kişinin bu durumu yaşadığını ve yaşamaya devam edeceğini vurguluyor. Bu durumun temelinde yatan ise hepimizin düşündüğü gibi insan psikolojisi...

Biraz farklı açılardan video da örnek verilen durumlara bakalım. Michelle Obama'nın elbisesi bir konuşmasından hemen sonra tükenirken, Michael Jordan'ın Nike ayakkabıları ise diğerlerine oranla çok fazla satılıyor. Peki, Michael Jordan'ın ayakkabıları bizlerin daha iyi basketbol oynamasını sağlıyor mu? Collins Sussman'ın bu durum için "Burada insan psikolojisinin içinde bazı önemli unsurlar var gibi görünüyor. İçgüdülerimiz, ünlüleri ve hayranlık duyduğumuz kişileri bulma ve bu kişiler gibi olma isteği konusunda bize rehberlik ediyor. Bazen, bu ünlüleri veya davranışlarını hatırlatan basit davranışlar veya materyal unsurlarına sarılıyoruz." yorumuyla bizlere yolu açıyor. Aynı zamanda akranlarımız ile sahip olduğumuz ilişkilerde ise bir dahi olarak görülme arzusunun bizleri daha ileri taşıdığını belirtmeden de geçmiyor.

Yazılım dünyası için aynı kahramanların varlığını biliyoruz. Linus Torvalds, Bill Gates, Guido gibi kişiler konuşma sırasında örnek verilerek öne çıkartılıyor. "Goodio, Python'u Google'da kendisi oluşturdu değil mi? Linus, Linux'u tek başına mı yazdı?" Elbette her ne kadar başarılı insanlar olsalar da bu sorunun cevabı hayır! "Bu kişiler ortaya çıkan yazılımlar ve ürünler için her ne kadar övgüyü hak etseler de tamamını hak etmedikleri ve aslında başarılı liderler olmalarıyla birlikte bir mağarada kalarak (metafor gibi düşünün bir başına) her şeyi bitirip bir anda ortaya çıkıp ünlü olmadıkları"na konuşma içerisinde birden fazla kez vurgu yapılıyor.

Tamam, şimdi burada videoyu bir kenara koyalım ve çeşitli sorularla durumu değerlendirelim.

![Society](/assets/images/blogs/dahi_yazilimci_efsanesi_ve_yetersizlik_hissi/society.webp)

[Arka Plan Görseli: Unsplash / Alexander Grey](https://unsplash.com/photos/_vkztdUDhvY)

#### Neden geliştirdiklerimizi, yaptıklarımızı topluma atfetmekten bu kadar korkuyoruz? Bu korku neden çözülmesi gereken bir sorun?

Genel akışı ve çerçeveyi önümüze alarak düşünelim. Birden fazla insan ile etkileşimde bulunarak, karmaşık, çözmesi zaman alan ve emek isteyen çeşitli problemleri çözmeye çalışıyoruz. Bu süreçte ise doğal olarak birçok hatalar yapıyoruz. Bu hataların bir kısmı bizi geliştirirken bir kısmı ise bizi yıpratıyor. Fakat bizler hata yapmaktan kaçınmaya çalışmak yerine, çeşitli fikirlerin peşinden gidiyoruz.

Başaramazsam ne derler düşüncesi, yazdığımız kodun herkes tarafından değerlendirilip eleştirilmesi olasılığı, yeterince bilgiye sahip olup olmadığımız gibi düşünceler sık sık aklımızı kurcalar. Videodan yine alıntı olarak "Hatalarım olsa da en azından başarısızlık ve hata izlerimi kimsenin görmesini istemiyorum.", "İzlerimi sileceğim.", "Zeki insanlar hata yapmaz!" şeklindeki düşünce kalıplarıyla kendimizi şartlıyoruz. Bu yüzden de yukarıda not almış olduğum sorular doğuyor ve çeşitli söylemler doğuyor. Her şey bittiğinde göstereceğim, yaptıklarıma dair geçmişimi göstermek istemiyorum.

Topluluk önünde açıkça hatalar yapma fikri, birçok kişi için korkutucu olabilir. Ancak unutulmaması gereken önemli bir gerçek var: Hatalar, öğrenme ve büyüme fırsatları sunar. Büyük başarılar genellikle zorlukları aşarak ve hatalardan ders çıkarılarak elde edilir. Özellikle teknoloji ve yazılım gibi hızla değişen alanlarda, sürekli olarak yeni şeyler denemek ve hatalar yapmak kaçınılmazdır. Hatalar ilerlemenin temellerinden birisidir. Kullandığımız yazılımlar, işletim sistemleri, uygulamalar, web siteleri ve daha fazlası, bir seferde yazılmış olamaz değil mi? İşin ilgincidir hala işletim sistemlerinin birçok hatası, uygulamaların çeşitli eksikleri var. Yazılımlar insanlar gibi yaşar. Ne kadar güncel ve işlevsel kalabilirlerse o kadar uzun süre kullanılırlar. Bu yüzden yazılım geliştirme sürecinde hataların olması kaçınılmazdır.

![Live Love Learn](/assets/images/blogs/dahi_yazilimci_efsanesi_ve_yetersizlik_hissi/live_love_learn.webp)

[Arka Plan Görseli: Unsplash / Brett Jordan](https://unsplash.com/photos/NDjaUqvB7uE)

Yaptıklarımızı topluma sunma korkusu, potansiyelimizi sınırlayabilir ve yenilikçi projelerin önündeki engellerden biri haline gelebilir. Bu durum ekip içerisinde de geçerlidir. Ekip içerisinde herhangi bir bilgi paylaşımı olmaksızın ilerlemeye çalışmak projenin sonlanmasıyla sonuçlanacaktır.

Bunun için de temel bir örnek durum konuşma sırasında da veriliyor. "Herkes bir mağarada kendi başına çalışıyor ve sadece ara sıra sahip olunan projeye katkı yapıyorsa kod kalitesinin ve bus factor değerinin düşük olması kaçınılmazdır." Sizin kodunuz diğer bir kod parçacığıyla çalışması ve sistemin bir uyuma sahip olması gerekir.

Ekibinizde 15 kişi olduğunu ve yazılım projenizin belirli bir kısmının tamamını bir kişi geliştirdiğini düşünün. Ayrıca tüm ekibiniz kendi mağaralarında geliştirme yapıyor. İşte burada "Bus Factor" devreye giriyor. O kişi kaza geçirirse veya işten ayrılırsa üstüne üstlük geçmişe yönelik hangi yollardan geçtiğini, hangi kararları denediğini bilmiyorsanız. O andan itibaren kör uçuşu yapmak zorundasınız. Şimdi o kısmı çözmek için o kadar çok adam/saat iş gücü harcayacaksınız ki. Belki işin sonunda pes edecek ve belirlenen kısmı yeniden inşa edeceksiniz.

![Bus Factor](/assets/images/blogs/dahi_yazilimci_efsanesi_ve_yetersizlik_hissi/bus_factor.webp)

[Arka Plan Görseli: sketchplanations.com / Bus Factor](hhttps://sketchplanations.com/bus-factor)

Bu yüzden paylaşıma açık olmak, yapılan hataları da paylaşmak bir ekip için çok önemlidir. Bir arkadaşın yeni bir şeyler denemek istediğinde "Bu kısım için önceden şöyle bir eklemeyi şu kodda yapmıştım ve bunlara sebep oldu. Belki geliştirirken bu faktörlere daha fazla dikkat etmelisin." diyebilmen gerekir. Bu net bir biçimde en hızlı yoldan tecrübe aktarımıdır. Ayrıca burada tüyo alan kişi olduğunuzda öğrenme ve gelişme hızınız da artacaktır. Belki 6 ayda öğreneceğiniz içeriği 4.5 - 5 ay içerisinde öğreneceksin. Bu sayede o kişinin ve kendinizin saatlerini kurtarmakla kalmaz ayrıca görev aldığınız projenizi bir üst kademeye taşımak için zaman oluşturabilirsiniz. Yani kar topunuzu büyütebilirsiniz.

Sonuç olarak, olaylara biraz farklı köşelerden bakmak ve farklı bakış açılarına sahip olmak gerekir. Dünya da yer alan tek geliştirici siz değilsiniz ve olmayacaksınız. En iyisi olmak zorunda da değilsiniz. Kapsam ve amaç kişiye değil, topluma özgü olmalıdır. Bizlerin ana amacı her zaman problem çözmek ve gelişim sağlamaktır. Yazdığımız yazılımın tam olarak istekleri karşılaması ve (çoğu zaman) insanlar ile etkileşime geçmesi gerekir. Süreç geliştirilmekte olan içerikten daha önemlidir.

"Proje doğrultum doğru mu? Doğru araçlarımı mı kullanıyorum? Dokümantasyonum anlaşılabilir mi? Bu hatayı daha öncesinde çözen var mı?" bu soruları projenizi video da yer verildiği gibi doğru zamanda projenizi açarak çözebilirsiniz. İşinizin kapsamı, hedefiniz ve içeriğinizin temeli hazır olduğunda Github vb. alanlarda paylaşarak "Temel olarak bu işleri yapmasını hedeflediğim bir projem var. Şu an temel aşamasında planlamam ve kullanacağım teknolojiler bu şekildedir." diyebilirsiniz. İnsanlar bu aşamada sizlerin projesine dahil olarak gittiğiniz doğrultuya dair fikir verebilir veya geliştirmenize yardımcı olabilir. Katılım sağlayan herkes sizler kadar tecrübe edinecek ve teknik olarak ilerleyecektir.

Günümüzde Open Source projeler, Github gibi platformlar sayesinde çok daha kolay bir şekilde sahip olduğumuz gelişim eğrilerini daha da yükseklere taşıyabiliriz.

"Başkalarının hatalarından öğrenmek, yaşamınızı daha kolay ve daha verimli hale getirebilir." - Bill Gates

#### Bu `dahi` yazılımcıları `dahi` kabul etmemizi sağlayan ne?

Yukarıda örneklerde de verilen Linus Torvalds, Bill Gates, Guido gibi kişiler elbette teknik becerilerini belirli bir seviyenin üzerine çıkarmış geliştiricilerdir. Fakat sanılanın aksine tamamıyla kendileri bütün projeleri tek başlarına geliştirmemişlerdir. Örneğin, Linus Torvalds Linux çekirdeğini tek başına geliştirmemiştir. Veya Bill Gates Microsoft'u tek başına kurmamıştır. Bu kişilerin ortak noktası ise ekip çalışması ve paylaşım üzerine kurulu olmasıdır. Başardıkları ve ulaştıkları popülariteyle birlikte atfettiklerimizden biri de 'dahi' tutumudur. Topluluğa liderlik eden, düşüncelerini paylaşan, fikirlerini aktaran ve birçok kişinin faydalanmasını sağlayan kişilerdir.

Linus Torvalds, Linux çekirdeğini Open Source olarak geliştirmiştir. Ayrıca IBM, Intel gibi firmaların birçok geliştiricisi de desteklemiştir. Linux için Red Hat, Linux Foundation gibi kurumlar ve topluluklar oluşturulmuştur. Github üzerinde [Linus Torvalds](https://github.com/torvalds/linux)'ın profilini ziyaret eder ve Linux reposunu incelerseniz. 5000'den fazla katılımcı olduğunu göreceksiniz.

![Linux Contributors](/assets/images/blogs/dahi_yazilimci_efsanesi_ve_yetersizlik_hissi/Linux_Contributors.webp)

Ayrıca Open Source dediğimiz kültürün de temellerini atan insanlardan birisidir. Açık kaynak yazılım lisanslama modeli, özgür yazılım hareketi ve GNU projesi gibi birçok alanda katkıları bulunmaktadır. Bu kişiler temelde birçok insanı ortak bir amaç için paylaşımcı bir bakış açısıyla bir araya getirmişlerdir. Şu an Linux ticari, akademik ve kişisel kullanımlar için birçok alanda kullanılmaktadır. Çeşitli konular için meme sayfaları, forumlar, topluluklar oluşturulmuştur. Yaşayan, gelişen ve topluluğuyla birlikte büyüyen bir yapıya sahiptir.

![Linux](/assets/images/blogs/dahi_yazilimci_efsanesi_ve_yetersizlik_hissi/LinuxMeme.webp)

[Source: Reddit](https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fpy9zhj2wkw2b1.webp)

Elbette bu örnek dünya üzerinde gerçekten dahi olan yazılımcı yok demek değildir. Fakat az sayı da olduklarını kabul etmek gerekir. Kendi başlarına fark yaratmaları ve birçok kişinin faydalanmasını sağlamaları mevcut koşullara bakıldığında bir hayli zordur.

#### Dahi olmayı isteme tuzağına karşı ne yapılmalı?

#### Egoyu bırakmak!

Burada tekrardan videoya dönmek istiyorum. Open Source dünyasında meşhur olan "Apache Software Foundation" için güzel bir örnek veriliyor. Çeşitli geliştirmelerin yapılması ve büyütülmesi için gelen tekliflerin olduğu ve bu tekliflerin genellikle milyonlarca satır kod olduğundan bahsediliyor. Fakat Brian Fitzpatrick'in söylemiyle "Topluluk, Apache Yazılım Vakfı'ndaki her projenin özüdür. Onlar için koddan daha önemli olan şey budur." söylemi olayı farklı bir noktaya taşıyor.

Yazılımın yaşayan bir yapıya sahip olduğunu biliyoruz, zamanla birlikte çeşitli özellikler kazanır ve kaybeder. Bu değişimlerin yaşanabilmesi için her zaman geri dönütlere, farklı alanlardaki geliştiricilere ve en önemlisi kullanıcılara ihtiyaç duyar. Bunlardan birisi bile olmasa yazılımın hayatta kalması mümkün olmaz.

Ego ise topluluğun size sağladığı tüm bu katkıları, gereken şartları elinizin tersiyle itmenize benzer. Bilgi alışverişine ve geri dönütlere kendinizi kapatmak, kendi dünyanızda yaşamak demektir. Yazılımın ise böyle bir dünyada var olması mümkün değildir.

Yukarıda yer verdiğim hatalara benzer durumlar hep olacaktır. Asıl hedeflememiz gereken nokta farklı yolları hızlı bir şekilde deneyerek doğru yolu bulmak, hatalardan nasıl kaçınabileceğimiz olmalıdır. Bu düşünce sistemiyle kendimizi gelişimimiz için tam potansiyel bir şekilde kullanabiliriz. Bu konu hakkında çok detaylı ve güzel bulduğum bir diğer konuşma ise [Julie Pagano: It's Dangerous to Go Alone: Battling the Invisible Monsters in Tech - PyCon 2014 adıyla PyCon 2014](https://www.youtube.com/embed/1i8ylq4j_EY?si=nA1R0IJEaKRAA3sO)'de gerçekleştirilmiş. (Video diğer sitelerden yürütülmemesi için düzenlenmiş.)

#### Eleştiri Kötü Değildir

Hatalar yapmak kadar kabullenmek ve yaptığımız hataya karşılık düzeltmek için eyleme geçmek de önemlidir. Egoyu kenara bırakmak sizin için bu kapıyı açar. Günümüzde kullandığımız yazılım araçlarının evrimi de genel olarak bu durum üzerine düzenlenmiştir.

Pull Request, Code Review, Issue, Bug Report, Feature Request gibi kavramlar ve daha fazlasını aslında bu amaç için kullanırız. Örneğin birçok şirket kullanıcılarından veri toplayarak iyileştirme yaparken Open Source olarak da Github üzerinden var olan problemleri çözmek için Issue kısımlarını takip eder. Hatta açık olan Issue'ların çözülmesi için gelen Pull Request'leri değerlendirir.

Şirketlerin ve Open Source projelerin sahip olduğu bu yapıyı kendimiz içinde kabullenmemiz gerekir. Bir dilin veya aracın fanatiği olmak yerine, birçok dil ve aracı kullanarak farklı bakış açılarıyla performanslı ve güvenilir bir şekilde hizmet edebilecek yazılım ürünleri oluşturmayı amaçlamak sizin ve projenizin gelişimi için daha faydalı olacaktır.

Bu durum için bir örnek olması adına [Elastic Search](https://github.com/elastic/elasticsearch) reposu incelenebilir.

![Linux](/assets/images/blogs/dahi_yazilimci_efsanesi_ve_yetersizlik_hissi/ElasticSearch_Issue.webp)

Elastic Search Issues

![Linux](/assets/images/blogs/dahi_yazilimci_efsanesi_ve_yetersizlik_hissi/ElasticSearch_PullRequest.webp)

Elastic Search Pull Requests

#### Başarısızlığı Kucaklamayı Öğrenmek

Her zaman her durum yolunda gitmez. Başarısızlık durumu oluştuğunda ise yapılması gereken bazı adımlar vardır. Öncelikle başarısızlığı kabullenmek ve nedenlerini araştırmak gerekir. Aksi halde her zaman "Yapamıyorum" düşüncesini benimsemek, olağan akışımızı bozmakla kalmaz aynı zamanda bırakmamıza da sebep olabilir.

Hatayı anlamak, nedenlerini araştırmak ve çözüm üretmek için hızlı bir şekilde yeniden denemek gerekir. Bu şekilde bizlerden tecrübeli olan ve "dahi" sıfatıyla yaklaştığımız insanlara yaklaşabiliriz. Hiç fark ettiniz mi bilmiyorum ama yazılım üzerinde oluşturulan içeriklerin büyük bir paydası hatalar üzerine inşa edilir. Hiçbir problemi çözdüğünüzde arama yaptığınızı hatırlıyor musunuz? Stackoverflow, Medium, Github gibi kanallar genel olarak bir hata süreciyle başlatılır. İnternet üzerinde arama isteğini bir hata sonrasında yaparız. Bu hataların çözümleri ise sizin için birçok kişi tarafından paylaşılmıştır. Ayrıca yazılımın ana amacı belirli olan süreç ve işleri kolaylaştırmaktır. Hata çözmek, otomatikleştirmektir.

Burada "yetersizlik" hissi de ayrıca baskındır. Instagram, Twitter, Youtube gibi platformlar gibi Github, Stackoverflow, RedHat platformlarında da çeşitli insanlar popülariteye sahiptir. Bizler ise onların yaptıkları, yaşadıkları, çalıştıkları şartlar kapsamında kıyaslama yaparız. Burada psikolojik, ekonomik birçok faktör etkilidir.

Fakat temel olarak benim ele almak istediğim kısım Iceberg illüzyonu 'u. Bu illüzyonu günümüzde sosyal medyanın ve çeşitli araçların aracılığıyla bol bol yaşıyoruz. Belirli başarıya sahip insanların yaptıklarını, emek verdiklerini, tecrübe edindiklerini, harcadıkları zamanları görmeden sonuca odaklanarak paylaşılan içeriklerin şartlarıyla sahip olduklarımızı kıyaslıyoruz.

Mühendislik için ise bunu bizden yıllarca fazla deneyimli insanları takip ederken, onların yaptıklarını incelerken yaşıyoruz. Burada dediğim gibi birden çok parametre var. Alınan eğitim, doğduğu aile, mesleki tercihler, yaşadığı şartlar, ekonomik durum, sosyal çevre gibi birçok faktör var. Yapmamız gereken ise bu faktörleri ve yaşanılan hayatları kıyaslamak yerine bu kişinin bilgi ve tecrübesinden ne edinebilirim, hangi kararları alabilirim, hangi yolları seçebilirim gibi sorulara odaklanmak olmalıdır.

Yazıldığı kadar basit olmadığının bende farkındayım. Fakat örnek aldığımız kişileri kahraman olarak görmektense kendi düşüncülerimiz ile değerlendirerek öğretmen olarak görmek gerekir. Bu kişilerinde geçmişte hatalar yaptığını bilmek, önerilerini dinlemek ve onlardan öğrenmek değerlidir. Kaybolduğunuzda haritanızı geliştirmenizi sağlayan rehberler edinmek gibi düşünülebilir. Kendi adıma bu konuda en çok etkilendiğim kişilerden birisi de [Bilgem Çakır](https://www.youtube.com/@YalinKod)'dır.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/EeGpwC5zr4o" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
</div>

#### Pratik Anahtardır

Bloğun en başında belirttiğim gibi beceri elde etmek zordur. Çevremizde her zaman bizlerden daha iyi veya daha kötü olan insanlar olacaktır. Fakat bizlerin yapması gereken şey gelişmek ve öğrenmek için çaba sarf etmek, paylaşımcı olarak hareket etmek, hatalarımızdan ders çıkarmaktır.

Mühendisliğim temeli problem çözmeye dayanır. Bu sebeple iş hayatında, gündelik hayatta karşılaşılan problemler karşısında karamsar olmamak, bunun bir adım olduğunu kabullenmek ve çözüm üretmek gerekir. Her üretilen çözüm, yapılan hata edinilen tecrübedir. Bir sürenin ardından teknik beceri adını verdiğimiz yetkinliğimiz oluşacaktır.

#### Küçük Balık Olmak

Gelişmenin bulunduğumuz çevre ile ilişkisi de gayet açıktır. Bir ekibin veya topluluğun içerisinde bulunmak önemlidir. Fakat bizlerden daha tecrübeli insanlar ile birlikte olmak, onların tecrübelerinden faydalanmak, onların yaptıklarını gözlemlemek ve onlardan öğrenmek gerekir. Bu sayede kendi gelişimimizi hızlandırabiliriz. Eğer su içerisinde en büyük balık sizseniz, büyümek için başka bir suya veya daha büyük balıklara ihtiyacınız vardır. Tecrübe edinmek her zaman kişisel bir çaba sonucu gerçekleşmez.

### Sonuç

Bu blog yazısı içerisine eklenebilecek daha nice konu başlığı bulunabilir. Fakat benim üzerinde durmak istediğim noktalar kendime bakarak gördüklerim bunlardı. Yazılım dünyasında birçok kişi tarafından takip edilen, örnek alınan kişilerin de hatalar yaptığını, başarısızlıklar yaşadığını ve bunları kabullendiğini bilmek gerekiyor. Unutmamalıyız temelde hepimiz insanız ve hata yapmak bizim doğamızda var.

Mesleki olarak ilerlemek ve beceri edinmek her zaman zor, çaba gerektiren bir eylem. Paylaşımcı olmak, problemleri topluluk ile çözmek. Ürettiğimiz içeriğin yaşayan bir yapıya sahip olduğunu bilmek sizlere de belki başka bakış açıları katabilir.

Bizlerin amacı her zaman kişisel alanda kalmak değil, topluma fayda sağlamak olmalıdır. Bu yüzden mühendislik yenilikçi, gelişime açık ve kapsamlı problemlerin çözümü için bir araçtır.

Görüşmek üzere, kendinize iyi bakın...