---
layout: post
title: "Yazılımcının Otomasyoncusu Bash Betikleri Hakkında Tüyolar"
date: 2023-08-26
lang: tr
image: "/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/header_image.webp"
description: "Bash betikleri ile otomasyon, dikkat edilmesi gerekenler ve ShellCheck kullanımı"
---

Yazılım geliştirmenin en temel prensiplerinden biri, tekrarlayan işleri otomatikleştirerek zaman ve maliyet tasarrufu sağlamaktır. Bu amaçla "Bash" modern bir komut satırı işlemcisinden çok daha fazlasını sunar. Hem gelişmiş bir komut yorumlayıcısı hem de otomasyon görevlerini kolaylaştıran güçlü bir araçtır.

Örneğin, belirli yazılımların güncellenmesi, yazılım paketlerinin oluşturulması, servis hizmetlerinin yönetimi gibi işlemler Bash ile otomatik hale getirilebilir. Linux tabanlı işletim sistemlerinde terminal aracılığıyla, Windows işletim sistemlerinde ise komut istemcisini (cmd) kullanarak gerçekleştirdiğiniz işlemleri bir betik dosyasına kaydedip istediğiniz zaman çağırabilirsiniz.

Bu yazıda, yakın zamanda öğrendiğim Bash'ın temel kavramlarına odaklanarak, etkili komut dosyaları oluştururken nelere dikkat etmemiz gerektiğini ve geliştirme sürecini nasıl daha güvenli bir şekilde yönetebileceğimizi paylaşmak istiyorum.

Yakın zaman içerisinde kapsamlı olarak geliştirdiğim çeşitli betik dosyalarında yaşadığım ve genel olarak bilindiği taktirde başlangıç için zaman kazandıracak çeşitli tüyolar olmasını ümit ediyorum. Tabii ki, hatalarım olabilir. Fakat birlikte düzeltebiliriz. Her türlü soru, görüş veya düzeltme için bana mail gönderebilirsiniz. Keyifli okumalar! 🚀

### Kısaca Bash Nedir?

Bash (Bourne Again Shell), Linux/Unix tabanlı işletim sistemleri ve birçok dağıtımda varsayılan olarak yer alan kabuk yazılımlarından birisidir. Kullanıcının terminal ekranı üzerinden iletmiş olduğu komut/betik içeriklerini yorumlayarak çekirdek aracılığıyla komutların ve işlemlerin gerçekleştirmesini sağlayan bir kabuk programıdır.

Aynı zamanda betik dosyalarını çalıştırmak için de kullanılır, bu sayede bir dizi komutu sırayla yürüterek daha karmaşık görevleri otomatize etmek mümkündür. Yürütülebilir olarak genellikle "/bin" dizini altında "bash" olarak yer alır.

"Kabuk" veya "Shell" terimleri, işletim sistemi çekirdeği ile kullanıcı arasında bir arayüz sağladığı için kullanılır. Komut setlerinin doğru şekilde iletilmesini, yürütülmesini ve çekirdekten elde edilen dönüş değerlerinin anlaşılabilir bir şekilde kullanıcıya bildirmesini sağlaması sebebiyle kalkan görevi görmektedir.

![Shell Kernel Input](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/shell-kernel.webp)

### Hangi Amaçlar İçin Geliştirilmiştir?

Aslında, bu soruyu Bash'in ilk geliştirildiği dönemi düşünerek yanıtlamak daha doğru olacaktır. 1980'lerde Brian Fox tarafından başlatılan Bash projesi, o dönemin sınırlı işletim sistemlerinde temel işlemleri kolayca gerçekleştirebilmek için bir araç olarak geliştirildi. Bu dönemde işletim sistemleri günümüzdekine kıyasla daha sınırlıydı ve kullanıcı dostu arayüzlerden yoksundu. Daha çok temel işlemler ve akışlar üzerinden programlar, sistemler oluşturuluyordu. En basit işlemlerin bile çekirdek yardımıyla gerçekleştirilmesi dönemin şartları gereği şu ana göre oldukça zordu.

Bu sebeple kullanıcı dostu olan ve çeşitli hata durumlarını açıklayarak kullanıcıyı yönlendiren, işlem yapmayı kolaylaştıran yeniliklere ihtiyaç vardı. Ayrıca bu eklenen yenilikler bir yandan daha fazla işlevsel olmalıydı. Kullanıcı her zaman gerçekleştirdiği rutin işleri daha kolay, hızlı gerçekleştirebilmeliydi. Elbette bunlarla birlikte standartlar olmadığı için farklı donanım ve çekirdeklerle çalışabilen yapıya sahip olması, taşınabilirliği bünyesinde barındırması gerekiyordu.

Zamanla gelişmesinin ve işlevsel yetenekler kazanmasının ardından Bash birçok dağıtımın ve farklı işletim sisteminin varsayılanı olarak içerisinde yer aldı. Bu sayede ilerleyen yıllarda bizlerin işletim sisteminde yapılacak olan işlemleri otomatikleştirmemize kapı araladı. Bugün hâlâ işletim sistemlerinde yaygın olarak kullanılıyor.

### Kabuk/Betik (Script) Dosyaları İçin Nelere Dikkat Edilmeli? Ne Tip Problemler İle Karşılaşılabilir?

![Shell Kernel Input](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/warning.webp)
[Kaynak: T.H. Chia / Unsplash](https://unsplash.com/photos/zkOg39koe80)

Komut/betik dosyaları, işleri otomatikleştirmek ve tekrar eden görevleri kolaylaştırmak için harika bir araç olabilir. Ancak, bu dosyaları yazarken ve kullanırken bazı potansiyel zorluklar ve hatalarla karşılaşabilirsiniz. Ayrıca, bir IDE ortamının bulunmuyor olması ve değişkenlerin debug edilerek takip edilememesi gibi bir gerçeği göz ardı etmemek gerekiyor. İşletim sistemi üzerinde basit bir silme işlemi bile yanlış bir kullanımla sorunlar yaratabilir. Hatta terminal ekranında günlük olarak yaptığınız bir üstüne yazma işlemi bile tüm gününüzü mahvedebilir. Bu nedenle işlevleri adım adım eklemeli ve her aşamada doğru şekilde çalıştıklarından emin olmalıyız. Betik dosyalarının en korkutucu yönlerinden biri, büyüklükleri arttıkça yönetiminin zorlaşması ve hataların tespit edilmesinin güçleşmesidir.

Ayrıca betik çağrıları genellikle diğer yazılım araçları üzerinden gerçekleştirilir. Bu sebeple betik dosyasının dönüş değerleri düzgün bir şekilde oluşturulmadıysa her zaman doğru çalıştığını bile düşünebilirsiniz. Terminal ekranında olduğu gibi hataları ekran üzerinde görüntüleyemeyeceğiniz için sizlere zaman kaybı oluşturacaktır.

Şimdi, hangi tür sorunlarla karşılaşabileceğimize ve nelere dikkat etmemiz gerektiğine yakından bakalım.

### Nelere Dikkat Edilmeli?

#### 1. Sözdizimi Hataları ve Hata Ayıklama

Bash kodları yazarken doğru sözdizimini kullanmak oldukça önemlidir. Eksik veya yanlış tırnak işaretleri, parantezler veya operatörleri kolay bir biçimde fark edemeyeceğiniz hatalara neden olabilir.

Ayrıca, hata ayıklama (debugging) mümkün olmadığı için yazdığınız betiğin gidişatını ve doğrulunu log'lar aracılığıyla kontrol etmek önemlidir. Aksi taktirde hata ayıklama sırasında, hangi satırda hata olduğunu bulmak ve düzeltmek için ekstra fazlaca çaba sarf etmelisiniz.

Buradaki blog yazısı içerisinde kapsamlı olarak tüm sözdizimi hatalarını ele almak pek mümkün değil. Fakat karşılaşılabilecek genel hataları temel örnekler ile açıklamaya çalışacağım.

##### Karşılaştırma ve if ifadelerinde boşluk bulunması gerekliliği;

Bash'ta if ifadeleri, döngüler, koşullu ifadeler gibi yapılar karşılaştırma operatörleri kullanılarak oluşturulur. Bu ifadeleri oluştururken, operatörlerin ve değişkenlerin arasında boşluk bırakmak önemlidir. Aksi taktirde, beklenmedik sonuçlar elde edebilirsiniz. Bu tip hatalar genellikle kolay bulunabilen terminal ekranından hata dönüşleriyle anlayabileceğiniz hatalardır. Bu konu için birkaç örnek ve tüyo vermek gerekirse şu şekilde açıklayabiliriz.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/01.simple.webp)

Boşluklara dikkat edilmeden hatalı yazım örneği.

Yukarıdaki basit örnek üzerinden de görüldüğü gibi if ifadesinin sağında ve solunda boşluk bulunmasıyla birlikte, içerisinde yer alan değişkenleri de boşluklarla ayrılması gereklidir. Ayrıca if ifadesi içerisinde yer alan değişkenlerin değerlerini almak için de "$" işaretini kullanmak gereklidir. Aksi taktirde, değişkenlerin değerleri yerine değişken isimleri yazılacaktır. Sayısal ifadeleri karşılaştırmak için karşılaştırma operatörleri güncel programlama dillerinde sıkça kullanılsa da bir betik dosyası yazarken tanımlı olan operatörleri kullanmak daha güvenilir olacaktır. Bu operatörler şu şekilder;

**Karşılaştırma operatörleri:**
- **-eq:** Eşitse (equals)
- **-ne:** Eşit değilse (not equals)
- **-gt:** Büyükse (greater than)
- **-lt:** Küçükse (less than)
- **-ge:** Büyük eşitse (greater than or equal)
- **-le:** Küçük eşitse (less than or equal)

Bu bilgiler ışığında verilmiş olan basit örneğimizi düzenlersek aşağıdaki şekilde olacaktır.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/01.simple_result.webp)

Boşluk hataları düzeltilmiş yazım örneği.

##### Atama yaparken boşluk kullanmamak;

Yukarıdaki maddeden sonra biraz kafa karıştırdığını biliyorum fakat betik içerisinde yer alan değişkenlerinize atama yaparken boşluk kullanmamalısınız. Örneğin dosya yollarını belirli parametrelere göre değiştirdiğiniz bir betiğiniz varsa ve atamayı yanlış yaparsanız, hatayı bulmanız oldukça uzun sürebilir. Basit ama uğraştırıcı bir problem. Bu maddenin ek olarak tüyoları 3. kısımda yer alıyor.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/02.simple.webp)

Boşluk bırakılarak ve operatör hatalı yapılmış atama örneği.

Bu tip hatayı terminal ekranından görmek kolay fakat başka bir kod parçaçığı ile betik dosyanızı çağırıp sadece dönüşüne bakarsanız hata almazsınız. Bu sebeple buradaki hataları incelerken bu yönden düşünmelisiniz. Düzeltilmiş hali ise aşağıdaki şekilde olacaktır.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/02.simple_result.webp)

Boşluk bırakılmadan ve spesifik operatörlerle yapılmış doğru atama örneği.

##### Çift tırnak ve tek tırnak kullanımının temel farkları;

Dalgınlık ile yapılabilecek hatalardan birisidir. Bu tip durumlarda cift tırnak içerisindeki değişken değerlerinin koruyarak yazdırır fakat tek tırnak kullanımı için bu durum geçerli değildir. Ayrıca çift tırnak kaçış karakterlerini desteklerken "\n vb.", tek tırnak desteklemez.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/03.simple.webp)

Çift tırnak ve tek tırnak farklarının gösterilmesi için değişkenlerin echo ile cümle içerisinde yazılması.

#### 2. Değişkenlerin Doğru Kullanımı

Tanımlanmamış veya yanlış kullanılan değişkenler, hatalara yol açabilir. Ancak Bash betiklerinde daha vurucu hatalar mevcuttur. Ne demek istiyorsun derseniz. Şu şekilde açıklayabilirim;

Bash betiklerinde olabildiğince değişken isimlerini benzersiz olarak tanımlamalısınız. Bu kural, hem lokal değişkenler ve hem global değişkenler içinde geçerlidir. Eski bir araç olması sebebiyle zaman zaman karmaşık durumlara yol açarak değişken değerlerinizin hatalı olmasına yol açabiliyor. Bu durum ise bütün gidişatı etkiliyor. Bu gibi durumlara önlem almak için ise çeşitli kozlarınız var. Bunlar;

* Fonksiyonlar içinde kullanılan tüm değişkenlere atama yaparken, önlerine "local" anahtar kelimesini eklemeyi unutmayın.

Ayrıca lokal değişkenleri küçük harflerle, global değişkenleri ise büyük harflerle tanımlamaya özen gösterin! Aksi taktirde aynı isme sahip olduklarında ve fazla çağrı olması durumda global bir değişkene yaptığınız atamayı lokal olarak tanımladığınız fonksiyon değişkeninizde görüntüleyebilirsiniz. Güncel programlama dillerinde değişkeni fonksiyon içeriside tanımladığınızda lokal olarak tanımlanır. Fakat Bash'te bu durum geçerli değildir.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/04.simple.webp)

"Local" anahtar kelimesi ve büyük/küçük harf kuralına dikkat edilmeden yazılan hatalı örnek.

Görsel içerisinde her şey düzgün gibi görünüyor. Fakat "greetings" fonksiyonu içerisindeki "name" değişkeni aslında bir lokal değişken olmalıydı. Bu yüzden "local" anahtar kelimesi oldukça önemli veya ismi unique olarak tanımlamak gerekiyor. Bu örneğin çözümü aşağıdaki gibi olacaktır. Ayrıca C++ dili yazılmış bir örneğini de bırakıyorum. Kıyaslayarak ne demek istediğimi net şekilde anlayabilirsiniz.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/04.simple_result.webp)

"Local" anahtar kelimesinin kullanımı için yazılmış olan doğru kullanım örneği.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/04.simple_result-1.webp)

Büyük/küçük harf kuralı için yazılmış olan doğru kullanım örneği.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/04.simple_result-2.webp)

C++ dili aracılığıyla verilmiş olan eşlenik doğru örnek.

Güncel programlama dillerinde değişken tanımlarının önünde tipi yer alması sebebiyle bu tip hata olmak çok güç. Fakat Bash betiklerinde dikkat edilmezse kolaylıkla gözden kaçabilecek bir hata. Ayrıca herhangi bir uyarı da görüntülenmez çünkü hangisi doğru bunu işletim sistemininde bilmesi mümkün değil. Güncel IDE'ler içinde bu durum böyledir.

Bu tip hataları özellikle betik dosyasının büyümesi ve çoklu fonksiyon çağrıları durumunda sıkça görülür. Uğraştırıcı ve fark etmesi zor olmalarıyla birlikte, zamanınızı kaybetmenize yol açabilir. Bu konu hakkında StackOverflow üzerinde açılmış çeşitli konular ve blog girdileri bulabilirsiniz. Örnek olması adına [bu linki](https://stackoverflow.com/questions/41770139/variable-assignment-in-nested-function-call-unexpectedly-changes-local-variable) okumanızı tavsiye ederim.

* Fonksiyon tanımlamarında birçok internet üzerindeki örnek için tanımlama yapılırken "function" anahtar kelimesinin kullanıldığını görebilirseniz. Fakat bu kullanım kaldırılmıştır ve önerilmez.

Bunun için doğru örnek kullanım bir yukarıdaki görselde görüntülenebilir. Neden kaldırıldığına dair açıklama ise [şu bağlantıda](https://stackoverflow.com/questions/7917018/what-is-the-function-keyword-used-in-some-bash-scripts) yer alıyor. Kısaca açıklamak gerekirse "function" kelimesi tüm Unix işletim sistemleri tarafından desteklenmemektedir. Bu sebeple yazılan betik içeriği taşınabilirlik için uygun değildir.

Not: Bu konuda net olarak emin olmamakla birlikte bilginiz varsa lütfen mail aracılıyla benimle paylaşın!

* $1, $2 gibi değişken değerlerini sürekli kullanmaktan kaçının.

Bu tür değişkenler, her çağrı ve dönüşte kullanıldığı için zaman zaman karışıklığa yol açabilir. Bu durumun sonucunda hatalı değişken değerleriyle karşılaşma ihtimaliniz yüksektir. Betik dosyanızın dışarıdan parametre almasını gerektiren durumlarla karşılaşabilirsiniz. Eğer bu parametreleri betik dosyasının içerisinde kullanıyorsanız, $1, $2 gibi değişkenlerin değerleri değişebilir. Bu durumda, hata ayıklama yaparken zorluk yaşayabilirsiniz. Parametreleri aldıktan sonra, bunları betik dosyanızın başında global bir değişkene atayıp bu değerleri kontrol ederek kullanmak daha sağlıklı bir yaklaşımdır. Aynı zamanda, dışarıdan geçilen parametrelerin sıraları veya değerleri hatalı olabilir, bu da beklenmeyen sonuçlar doğurabilir.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/05.simple.webp)

Kontrol olmadan dışarıdan parametre alımı için hatalı durum örneği.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/05.simple_result.webp)

Dışarıdan alınan parametreler kontrol edilerek değişkenlere atanmış doğru kullanım örneği.

Fonksiyonlarınızda parametre değerleri geçtiğinizde değişkenleri parametre olarak tanımlayarak kullanmak isterseniz mutlaka fonksiyon içerisinde $1, $2 gibi değişkenleriniz için bir lokal değişken oluşturarak atayın. Yukarıdaki görselde yer alan "result" değişkenini baz alabilirsiniz.

#### 3. Dosya ve Klasör Yollarının İşlenmesi

Dosya ve klasör yollarını işlerken, özellikle boşluklar veya özel karakterler içeren yolları ele alırken dikkat etmelisiniz. Doğru bir şekilde alıntı yapmak veya kaçış karakterleri kullanmak, bu tür sorunları önleyebilir.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/06.simple.webp)

Boşluk karakteri için hatalı kullanım örneği.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/06.simple_result.webp)

Boşluk karakteri için tırnak işaretleriyle birlikte kullanım örneği.

Yukarıdaki örneğin yanı sıra özel karakter içeren "&" gibi karakterler için de kaçış karakteri kullanmak gerekiyor. Aksi taktirde hata alınacaktır. Bu tip hataların çözümü için de aynı şekilde tırnak kullanıma dikkat edilmesi gerekmektedir.

Dosya yollarınızı tanımlarken ve kullanırken "/" ve "\" karakterleri gibi noktalarıda global olarak tanımlarken ve kullanırken dikkat etmeniz sizlere ek olarak avantaj sağlayacaktır.

#### 4. Hata Yönetimi ve Geri Dönüş Değerleri

Bash betiklerinde hata yönetimi oldukça önemlidir. Komutlar başarısız olduğunda veya beklenmedik durumlar ortaya çıktığında nasıl tepki verileceğini belirlemek gerekir. Ayrıca, komutların geri dönüş değerlerini doğru bir şekilde kontrol etmek ve buna göre işlem yapmak, betiklerinizin güvenilirliğini artırabilir.

Ayrıca çeşitli log seviyeleri ve hata kodları kullanarak başka diller üzerinden çağırdığınız betiklerin dönüş değerlerini doğru şekilde yönetebilirsiniz. Dosyalama işlemleri gibi durumlar için hata olduğunda oluşturduğunuz yedek dosyaları geri yüklemek gibi işlevlerini yerine getirebilirsiniz.

Burada dikkat edilmesi gereken husus çalıştırdığınız işlevlerin dönüş değerlerini doğru şekilde kontrol etmek ve dosyaların vb. içeriklerin varlığını kontrol etmektir.

![Example](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/07.simple.webp)

Log yazılması için örnek.

Burada yer alan temel bir örnek olmasıyla birlikte bir log dosyası belirterek loglarınızı bir dosyaya "cat" komutu yardımıyla yazdırabilir. Ayrıca log seviyeleri ve hata dönüşleri için özel dönüşler tanımlayarak, log fonksiyonunuza ek parametreler geçerek anlaşılabilirliği arttırabilirsiniz. Örneğin logun tetiklendiği satır numarası veya fonksiyon ismi gibi.

#### 5. Güvenlik ve Zararlı Komutlar

Kabuk betiklerini yazarken güvenlik hususunu göz ardı etmemek son derece önemlidir. Kötü niyetli kişilerin, zarar verici komutlar veya enjeksiyon saldırıları aracılığıyla sisteminize zarar verebileceği gerçeğini göz önünde bulundurarak, gerekli tüm önlemleri almanız gerekmektedir. Bu tür saldırıları önlemek için kullanıcı girdilerini titizlikle denetlemeli veya kaçış karakterlerini doğru bir şekilde kullanmalısınız.

Önemli bir diğer nokta betik dosyalarının işlevlerine bağlı olarak değişebilecek olan bu durumun, spesifik örneklerle daha iyi anlaşılabilir olduğudur. Bununla birlikte, betik dosyaları .exe gibi derlenmiş dosyalara nazaran daha okunabilir olduğu için hangi dizinde ve hangi yetkilerle çalıştırıldığınızın bilincinde olmalısınız. Özellikle dosya silme gibi işlemleri gerçekleştirirken, etki alanınız altındaki dosyaları dikkatlice değerlendirmeniz gerekmektedir.

#### 6. Taşınabilirlik ve İşletim Sistemi Farklılıkları

Bash betiklerinizi yazarken, işletim sistemi farklılıklarını ve taşınabilirliği göz önünde bulundurmalısınız. Komutlar veya parametreler, farklı işletim sistemlerinde farklı sonuçlar verebilir. Bu nedenle, betiklerinizi mümkün olduğunca taşınabilir ve uyumlu hale getirmeye çalışmalısınız.

Bu madde için yukarıda birkaç noktaya değindik. (Örn; "function" anahtar kelimesi) Fakat kısaca üstünden geçmek gerekirse kullanımı kaldırılmış veya çeşitli dağıtımlar arasında farklılık gösteren komutları kullanmamak, dosya yolları gibi konularda farklılıklar olabileceğini göz önünde bulundurmak ve değişkenlerin doğru şekilde tanımlanması ele almalısınız.

#### 7. Yorumlar ve Belgeleme

Tüm yazılımlarda olduğu gibi burada da geliştirdiğiniz betiğin sizden sonra da kullanılacağını göz önünde bulundurmalısınız. Yapmak istediğiniz ve işletim sistemi özelinde bulunan geliştirmelerinizi "#" karakteriyle başlayan yorum satırları le açıklamayı unutmayın. Özellikle işletim sisteminde çeşitli test girdilerini parçalamak için regex kullanımı oldukça yaygındır. Fakat bir regex komutunu ilk seferde anlamak genellikle güç bir durumdur. Yorum satırlarınız ile bu durumu değiştirebilirsiniz.

#### 8. Veri Kaybı

İşletim sistemi ve geliştirdiğiniz sistem özelinde gerçekleştirdiğiniz işlemler içerisinde büyük hacimli dosya işlemleri bulunabilir. (Database işlemleri, yedek alma). Bu gibi durumlarda işletim sistemi üzerinde gerçekleştirdiğiniz `rm`, `mv` gibi komutlar için dosya yollarını mutlaka kontrol edin. Betiğinizi parça parça dışarıda çeşitli şartlar altında çalıştırarak birleştirin. Bu sayede hata yapma ihtimaliniz azalacaktır.

Dosyalarınız işlemlerden sonra işletim sistemi tarafından `sync` komutuyla senkronize edilmesini bekleyin. Bu şekilde kopyaladığınız/taşıdığınız dosyalar üzerinde işlem yapmak isterseniz. Sağlıklı bir biçimde gerçekleştirebilirsiniz. Ayrıca 3. madde olan "Dosya ve Klasör Yollarının İşlenmesi"nde anlatılanları mutlaka ön planda tutun.

### Peki! Yazdığım Bir Kabuk/Betik(Script)'i Nasıl Kontrol Edebilirim?

Yazmış olduğumuz betik dosyalarının kontrolü için kullanabilir birçok eklenti ve yazılım mevcut. Fakat benim şu an bilgim olan ve aktif olarak kullandığım, çeşitli dağıtımlar için paket olarak indirilebilen ve kullanılabilen [ShellCheck](https://www.shellcheck.net/) olduğundan dolayı, örneklerimi ShellCheck üzerinden vereceğim. Bu arada incelemek istersen projenin [Github](https://github.com/koalaman/shellcheck) adresi de burada!

Yazmış olduğunuz betik içeriklerini kontrol edebilmek için [ShellCheck websitesini](https://www.shellcheck.net/) kullanabilir veya dağıtım paketini indirerek terminal üzerinden kullanabilirsiniz.

![ShellCheck Website](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/shellCheck_Website.webp)

ShellCheck websitesi üzerinden örnek

![ShellCheck Website](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/shellcheck_install.webp)

`apt-get install shellcheck` komutuyla shellCheck paketi kurulumu

![ShellCheck Website](/assets/images/blogs/yazilimcinin_otomasyoncusu_bash_betikleri_hakkinda_tuyolar/shellcheck_terminal.webp)

ShellCheck için hatalı bir script dosyasının kontrolü örneği

Betik dosyasınızı kontrol etmenizin ardından çeşitli seviyelerde uyarı veya error mesajları görüntüleyebilirsiniz. Hata durumu ihtimali barındıran kısımlar satır numarası ile belirtilir, eğer neden hataya yol açabileceğine dair daha çok bilgiye ihtiyaç duyarsanız shellCheck'in size sağladığı bağlantı üzerindeki örnekleri, doğru kullanımını ve hata açıklamasını mutalaka inceleyin. Anlamınza ve önlem almanıza kesinlikle yardımcı olacaktır. Ayrıca sahip olduğu hata kodları için genel tanımlar Github reposu içerisinde yer alıyor. [Buradaki](https://gist.github.com/nicerobot/53cee11ee0abbdc997661e65b348f375) bağlantıdan genel hata tanımlarına bakabilirsiniz.

ShellCheck kullanımı size bir IDE'de olduğu gibi destek maalesef sağlayamaz. O yüzden başta örneklendirdiğimiz tüyolar yardımıyla shellCheck öncesinde mutlaka yazdığınız betik dosyasını gözden geçirin, düzenlemelerinizi yaparak emin olun. Ayrıca mantıksal hataları tam olarak anlamak için işlem dönüşlerini ve hata mesajlarını loglamak sizlere büyük yardım sağlayacaktır. IDE ortamında bulunduğu gibi bir debug ortamı bulunmadığı için değişkenlerin takibi ve kontrolü betik büyüdükçe olabildiğince zor hale gelebiliyor.

### Sonuç

Sonuç olarak, Bash'ın gücünü keşfetmek ve kabuk/betik dosyalarını kullanarak süreçleri otomatikleştirmek, yazılım geliştirme alanında büyük bir avantaj sağlayabilir. Bu yazıda ele aldığımız tüyolar ve bilgiler, Bash'ın temel kavramlarını anlamak, geliştirme sırasında karşılaşılabilecek sorunları minimize etmek ve daha güvenli kodlar oluşturmak için yol gösterebilir. ShellCheck gibi araçları kullanarak betik dosyalarınızı denetlemek, hataları erkenden tespit etmenize yardımcı olabilir.

Unutmayın ki, Bash aracılığıyla betik dosyaları geliştirmek ve süreçleri otomatikleştirmek, IDE ortamının bulunmamasıyla birlikte çeşitli zorlukları beraberinde getirse de, doğru yaklaşımla bu zorlukların üstesinden gelebilir ve verimli bir şekilde işlerinizi otomatize edebilirsiniz.

Bu blog yazısı için anlatabileceklerim bu kadar, keyifle süreçleri otomatize edecek betikler yazman ümidiyle. Umarım faydalı olmuştur. Kendinize iyi bakın! 🚀

### Kaynakça

- [What is Bash? / Opensource.com](https://opensource.com/resources/what-bash)
- [What Is The Bash/Shell? / GNU.org](https://www.gnu.org/software/bash/manual/html_node/Introduction.html)
- [Bash Local Variable Scope Best Practice / StackOverflow](https://www.gnu.org/software/bash/manual/html_node/Introduction.html)
- [Variable Assignment In Nested Function Call Unexpectedly Changes Local Variable In The Caller's Scope / StackOverflow](https://stackoverflow.com/questions/41770139/variable-assignment-in-nested-function-call-unexpectedly-changes-local-variable)
- [Are the Linux utilities parts of the kernel/shell? / askUbuntu](https://askubuntu.com/questions/161511/are-the-linux-utilities-parts-of-the-kernel-shell)
- [The Bash Trap Command / Linux Journal](https://www.linuxjournal.com/content/bash-trap-command)
- [ShellCheck](https://www.shellcheck.net/)
- [What is the 'function' keyword used in some bash scripts? / StackOverflow](https://stackoverflow.com/questions/7917018/what-is-the-function-keyword-used-in-some-bash-scripts)