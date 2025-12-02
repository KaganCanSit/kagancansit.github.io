---
layout: post
title: "Linux Kavramı ve Temel Linux Terminal Komutları"
date: 2022-07-23
lang: tr
header_image: "/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/header_image.webp"
description: "Linux Kavramı ve Temel Linux Terminal Komutları"
---

Merhabalar, son dönemlerde Linux ile yolum kesişti ve yeni yeni öğrenmeye, kavramaya çalışıyorum.
Bu sırada çıkardığım ve oluşturduğum notları paylaşmak istedim. Öğrenme aşamasından olduğum için
mutlaka hatalarım bulunabilir. Lütfen bana bildirin, beraber düzeltelim. Keyifli okumalar!

![Linux Tux](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/00.webp)

## Linux Nedir?

İlk olarak Linux bir işletim sistemi değildir. Zaman içerisinde günlük konuşma dilinde “Linux
kullanıyorum.” deyiminin fazlaca kullanılması ile birlikte bu şekilde bir söylem yer edinmiştir. Fakat Linux bir
işletim sistemi çekirdeğidir. Daha kapsamlı bu konu hakkında bilgi vereceğim. Ama şimdi Linux çekirdeği
hakkında biraz tartışalım.

Linux, Unix çekirdeğinin tamamıyla açık kaynak olmaması sebebiyle ona karşı bir atıf olarak ortaya çıkmıştır.
Unix çekirdeği herkesin aktif olarak kullanamayacağı ve geliştirmeye açık olmaması üzerine “Linus Tornvalds”
ilk başta başka isimler verse de “Linux” ismi ile Unix sistem çekirdeğine karşı kendi çekirdiğini
geliştirmiştir. Linux, GNU prensibinin bir ürünüdür. GNU, GNU’s Not Unix kısaltmasıdır.

**!Not:** Linux Tornvalds, Linux çekirdeğini geliştirirken, proje gerekliliklerini ve gelişimini
kontrol edebilmek için GİT sistemini de geliştirmiştir. Doğru okudun! Vazgeçilmezimiz GİT.

“Burada açık kaynak nedir?” gibi soruları bu konu içerisinde derinlemesine dahil etmek istemiyorum.
Fakat buradan okuyabilirsiniz.

[Açık Kaynak Kavramı ve Açık Kaynağa Katkıda Bulunmaya Dair İlk Adımlar](03.acik_kaynaga_katkida_bulunmaya_dair_ilk_adimlar.html)

Kabaca “Açık Kaynak Yazılım”, geliştirilmekte olan veya yeni başlayan bir yazılım içeriğinin
herkesin erişimine açılarak doğrudan katkıda bulunabileceği, ücretsiz olarak kullanabileceği bir yazılım felsefesi
denebilir.

## Linux Çekirdeğinin İşlevi Nedir?

Linux çekirdeği donanım ile işletim sistemi arasında bir köprü görevi görür. Linux çekirdeğine sahip
olan ve üzerine görsel arayüz, işlev ve paketler oluşturularak kullanıma sunulan işletim sistemleri
paketleri Linux çekirdeği sayesinde basitçe donanıma emir verir, yönetir. Bu çekirdeğin üzerine inşa edilmiş olan ve
işletim sistemi olarak kullanılan yazılımlara “Linux Dağıtımı” adı verilir.

## Peki Biz İşletim Sistemi Olarak Neyi Kullanıyoruz? / Linux Dağıtımları

Linux çekirdeği üzerine amaca uygun bir biçimde özelleştirme, arayüz, yazılım paketleri eklenerek
son kullanıcıya sunulan yazılım ürünlerine “Linux Dağıtımı” adı verilir.

Hatta sizler de açık kaynak olarak yayınlanan Linux çekirdeğini baz alarak kendi işletim sisteminizi
oluşturabilirsiniz. Fakat bu düzeyde bir bilgi birikimi ve geliştirme herkes tarafından
yapılamayacağı için birçok paket yapısına sahip, dağıtıcılar aracılığıyla oluşturulmuş Linux dağıtımları bulunur. Bu durum sizlere istediğiniz gibi işe göre çeşitlilik, performans ve alana özgü özelleştirme sunar.

Birçok Linux dağıtımı içerisinde dpkg (Debian Package Management System), rpm (Red Hat Package Manager) ve packman gibi paket yöneticileri bulunur.

![Debian](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/header_image.webp)

Çok fazla sizleri de sıkmadan kısaca tanımlamak gerekirse “Linux çekirdiği ve belirli paket
yöneticisi üzerine arayüzler, çeşitli gündelik araçlar eklenerek ve yazılımsal düzenleme yapılarak sunulan
Linux dağıtımları bizlerin işletim sistemi olarak kullanıdığı yazılımlardır.” Örneğin Arch, Kali, Ubuntu,
Mint gibi.

**“GNU/Linux dağıtımı(kısaca dağıtım); Linux çekirdeği, GNU araçları ve bir masaüstü ortamının
bir araya gelmesiyle tam teşekküllü bir işletim sistemi haline gelen uygulamalar bütünüdür.”**

[Kaynak: Wikipedia](https://tr.wikipedia.org/wiki/Linux_da%C4%9F%C4%B1t%C4%B1m%C4%B1)

Linux’a dair daha kapsamlı ve iyi bilgi almak için en aşağıdaki kısmında yer alan kaynakları inceleyebilirsiniz.

## Terminal Nedir?

Terminal kısaca kullanıcıların belirli komutlar aracılığıyla işletim sistemine emir vermelerini,
programlarını yönetmelerini sağlayan komut ekranıdır.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/02.webp)

## Temel Linux Terminal Komutları

### Yardım Dokümantasyonu

**man man:** Temel kullanıcı el kitapçığını açar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/03.webp)

Burada bulunan “man” komutu herhangi bir merak edilen komut için arama yapmak amacıyla kullanılabilir. Örnek vermek gerekirse ping komutu hakkında çıklayıcı bilgi almak için `man ping` komut satırına yazılabilir. Çıkan ek ekran içerisinde ping komutunu açılımı ve ek özellikleri bulunur. Bilgilendirme ekranından çıkış yapmak için “q” tuşuna basılması yeterlidir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/04.webp)

### Genel ve Terminale Dair

**clear:** Terminal ekranını temizler.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/05.webp)
![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/06.webp)

**pwd:** pwd: (print name of current/working directory) Bulunduğumuz komut satırını döndürür.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/07.webp)

**echo / printf:** Temel olarak terminal ekranına istenilen bilgileri çıktı olarak gönderir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/08.webp)

**yes:** while(1) gibi düşünülebilir. Girilen parametreyi sonlandırana kadar düzenli olarak console’a basar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/09.webp)

**seq:** Parametre olarak verilen değere kadar ekrana yazdırır.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/10.webp)

**head / tail:** Dosyaya dair ilk veya son on içeriği listele. Örnek: İçerisine 1'den 12'ye kadar yazılmış .txt dosyasının head ile yazdırılması.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/11.webp)

**history:** Komut geçmişini gösterir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/12.webp)

**free:** RAM kullanımını gösterir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/13.webp)

**ls (list directory contents):** Bulunduğumuz komut satırı içerisinde var olan tüm dosya içeriklerini listeler.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/14.webp)

**ls -l:** Bulunan dizin içerisinde yetkileri görüntüler. “-l” parameterisinin ardına dosya ismini parametre olarak vererek sadece belirlenen dosya yetkilerine de bakılabilir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/15.webp)

**ls --color:** Komutu listelenen içeriklerin biçimi ve executable olmasına göre renklendirme sağlar. Yukarıdaki görselde bu durumda gösteriliyor. “denemeDosya” mavi olmasının sebebi onun bir dizin/klasör olmasından kaynaklanıyor.

**ls -all:** Tüm içerikleri yetkileri ve ek özellikleri ile listeler. Burada “..” bir üst dizini, “.” ise bulunduğunuz dizini gösteren bir pointer’dır.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/16.webp)

**ls -ah:** Dizin içerisinde gizli dosyaları gösterir. Bunun içinde örnek yukarıdaki görsel içerisinde yer almaktadır. Normalde dizin içerisinde bizler “.” ve “..” ikilisini göremeyiz.

## Dosya İşlemleri

**cd (Change Directory):** Herhangi bir dizine gitmek veya dizinden çıkmak için kullanılabilir. Örneğin açılan terminal içerisinde “cd Desktop” masaüstü dizinine ulaşmamızı sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/17.webp)

**cd ..:** Home komutu olan ilk terminal dizinine döndürür. Yukarıdaki görselde gördüğümüz ilk duruma geri dönmüş oluruz. Mavi ile gösterilen masaüstü dizini içerisinde daha önce yer aldığımız (üstü satır) home konumuna geri döneriz.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/18.webp)

**cd /** → Bir üst dizine çıkmamızı sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/19.webp)

**mkdir “dosya ismi” (make directories):** Dizin oluşturmamızı sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/20.webp)

**rm “dosya_ismi”:** Adı verilen dosyanın (txt, pdf) silinmesini sağlar. (Remove) Dosya içerisi doluysa silme işlemi için rm -r “dosya_ismi” parametresi kullanılarak silenebilir. “r” parametresi burada recursive anlamındadır. Alt dizinleri sıralı olarak sil, içeriğin tamımını sil.

**rmdir:** Boş olarak bulunan klasörü kaldırır.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/21.webp)

**touch:** Herhangi bir dosya oluşturmak amacıyla kullanılabilir. (touch deneme.txt)

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/22.webp)

**cat:** Komutu yazdırılabilir içerikleri konsol üzerinde görüntülememizi sağlar. Örneğin yukarıda oluşturulan dosya içerisine herhangi bir değer girip Terminal üzerinde “cat deneme.txt” şeklinde çağrıda bulunduğumuzda içerik console ekranında düzenlenebilir ve bastırılabilir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/23.webp)

**less:** Cat ile aynı işlevi barındırır. Tek bir sayfa içerisinde görüntülenir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/24.webp)

**nl:** Numaralandırmış bir şekilde içeriği console üzerinde görüntüler.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/25.webp)

**cp:** Kopyalama işlemi için kullanılır. Örnek; Masaüstünde “deneme.txt” dosyası ve “DenemeKlasörü” adında bir klasörümüz olduğunuz varsayalım. Masaüstü içerisinde aşağıdaki komutu kullandığımızda “deneme.txt” dosyasını al ve “DenemeKlasörü” dizinine kopyala demiş oluyoruz. (Burada daha öncesinde deneme.txt ve DenemeKlasörü oluşturulmuştur.)

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/26.webp)

**mv (move):** Yukarıdaki örnek ile aynı şekilde kullanılabilir.

**find:** Arama İşlemi (find -name “dosya ismi”) Örneğin find -name dizinDeneme.txt

! Dosya ismi arama kısmında büyük/küçük harf duyarlılığı vardır. Bunu engellemek için iname kullanılabilir. Bunun yanı sıra dosya ismi sonuna “ * ” karakterinin eklenmesi girilen parametreyi içeren dosyaların görüntülenmesini sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/27.webp)

**ln -s:** Link oluşturmayı sağlar. Dosyalar arası oluşturulan link, bir dosya değişime uğradığında diğer dosya içeriğinin de güncellenmesini sağlar. Aynı işleve sahip dosyalar arasında aktif olarak kullanılabilir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/28.webp)

**shred (Kelime anlamı = Parçalamak):** Dosyayı tanımsız hale getirir. “deneme.txt” içerisinde merhaba yazmasına rağmen “shred deneme.txt” girdisini girdiğimizde dosya şu hale gelir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/29.webp)

**basename:** Dosya dizin adresi içerisindeki son dizin adresini döndürür. Örneğin “basename /usr/local/” girdisi “local” olarak sonuç verir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/30.webp)

**dirname:** Dizin adresi içerisinde eğik çizgileri kaldırarak başlangıç dizinini, dosyalarda ise nokta operatörünü döndürür. Örneğin “dirname /Desktop/Egitim_Icerikleri/” girdisi “/Desktop” olarak sonuç verir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/31.webp)

**acroread / gv / xdvi:** Dosya görüntüleme.

## Dosya veya Klasör Özellikleri

**chmod:** Dosya yetkilerini düzenlememizi sağlar.

* "u" : Dosya-dizinin sahibi
* "g" : Dosya-dizinin sahibi ile aynı grupta bulunan kullanıcılar
* "o" : Diğer kullanıcılar
* "a" : Herkese açık.
* "=" : Yetki eşitleme
* "+" : Yetki ekleme
* "-" : Yetki çıkarma
* chmod +x “filename”

!ls komut listesinde görüntülenen r/w/x → read/write/execute yetkilerini belirtir. Sırasıyla soldan sağa kullanıcı, grup, kalan kısım yetkileri şeklindedir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/32.webp)

**stat “dosya/dizin ismi”:** Parametre olarak girilen dosya hakkında oluşturma tarihi, boyut gibi bilgileri döndürür.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/33.webp)

**wc “dosya/dizin ismi”:** Dosya içerisindeki byte sayısı, kelime sayısını ve satır sayısını döner.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/34.webp)

**du “dosya/dizin ismi”:** Parametre olarak verilen dosya veya klasörün diskte tuttuğu yeri döndürür.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/35.webp)

**file “dosya/dizin ismi”:** Dosyanın tipini ve içeriğini tahmin eder. Örnek bir metin dosyası için (file deneme.txt — - deneme.txt:ASCII text) şeklinde çıktı görürülebilir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/36.webp)

**chown “dosya/dizin ismi”:** Dosya sahibini değiştirebilmeyi sağlar. Aşağıdaki örnekte kendi Ubuntu’mda ek kullanıcı olmadığı için kendi üzerime sahiplik hatadığımda problem olmuyor, fakat yönetici (root)’a atadığımda hata alıyorum.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/37.webp)

**chgrp “dosya/dizin ismi”:**Dosyanın grup adını değiştirir. Yukarıdaki mantık ile aynı şekilde kullanabilirsiniz.

**umask “dosya/dizin ismi”:** Varsayılan izin düzenleme.Chmod’a benzer olarak izin kümeleri atamak için kullanılır. Genel olarak bir terminal üzerinde hazır chmod ayarı oluşturmaya yarar.

**chattr +i “dosya/dizin ismi”:** Bir dosyayı düzenlemeye karşı korumaya alır ve değiştirilemez, silenemez olmasını sağlar. Eski haline gelebilmesi için i paramatresini çarpan değerini “-” yapmamız yeterlidir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/38.webp)
![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/39.webp)

**lasttr “dosya/dizin ismi”:** Dizinlerin genişletilmiş özniteliklerini listeleyin.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/40.webp)

## Metin Editörleri

**vim / emacs / soffice / ablworld / gnumeric**

**grep:** Yazılı dosya içerisinde değer arama ve bulma gerçekleştirir. Örneğin içerisinde “Merhabalar” yazan bir deneme.txt dosyamız bulunsun. (grep Merha deneme.txt) girdisi bizlere deneme.txt dosyası içerisinde Merha girdisini arar ve console üzerinde Merha kırmızı olacak şekilde döndürür → Merhabalar

!Büyük küçük harf ayrımına duyarlıdır. “merha” şeklinde bir aramada dönüt vermez.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/41.webp)

**cut:** Yazılı dosya içerisinden bir kesit almamızı sağlar. Yukarıdaki örneği aynı şekilde baz alırsak (cut -c 1–5 deneme.txt) girdisi sonucu olarak “Merh” dönüşünü verir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/42.webp)

**paste “dosya1” “dosya2”:** İki dosya içeriğini bir arada ekrana basar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/43.webp)

**sort “dosya_ismi”:** Sıralama yapılmasını sağlar. Txt içerisindeki satırlar arası harf sıralaması döndürür.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/44.webp)

**tr:** Dosya içerisinde harf değişikliği yapmamızı sağlar. (Change to) Örn: Deneme → tr D E → Eeneme

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/45.webp)

**uniq:** Tekrar eden içerikleri elememizi ve metin dosyası içerisinde sıralama yapma gibi ek işlevleri sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/46.webp)

**tee:** Okuduğu dosya içeriğini birden fazla alan içerisine yazmayı sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/47.webp)

## Sıkıştırma ve Paketleme

- tar: Birden çok dosyayı bir dosya içerisine paketler.
- gzip / gunzip: GNU Zip sıkıştırma ve çözümleme işlemleri.
- bzip2 / bunzip2: BZip sıkıştırma ve çözme.
- compress / uncompress: Genel Unix’e dayalı olarak sıkıştırma ve çözümleme.
- zip / unzip: Win. format sıkıştırma ve çözümleme.

## Kıyaslama

**meld “filename1” “filename2”:** İki dosya arasındaki farkları görüntülememizi sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/48.webp)

**diff “filename1” “filename2”:** İki dosya arasındaki farkı meld’e göre daha basit ve console üzerinde gösterir. Meld ile aynı şekilde kullanılabilir. Fakat meld gibi ayrı bir ekran içerisinde açılmaz ve kullanımı zordur.

**comm “filename1” “filename2:** İki dosya içeriğini satır satır kıyaslar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/49.webp)

**md5sum “filename1” “filename2”:** MD5 ile iki dosya arasında sağlama toplamı yapılması.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/50.webp)

## Process Yönetimi

**pstree:** Process’leri hiyerarşik görmemizi sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/51.webp)

**top:** Çalışmakta olan uygulama ve hizmetleri listeler.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/52.webp)

**htop:** Top verilerini console üzerinde grafiksel, renkli bir biçimde sunar. Genel kullanıma uygun ve kapsamlı filtreleme vb. işlevleri içerisinde barındırır. İlk kurulumda yüklü gelmemektedir. “sudo apt install htop” komutu ile kolaylıklarla kurabilirsiniz.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/53.webp)

**gnome-system-monitor:** Grafiksel olarak görev yöneticisine benzer bir yapıyı çağırır. Console üzerinde çalışmaz.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/54.webp)

**ps / ps aux:** Özellikle bir process seçimi için kullanılabilir. Grep burada içerisinde geçen işlevi ile arama yapmak amacıyla kullanılır.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/55.webp)

**ps aux | grep:** Filtreleme.

**kill / killall:** Komutu ile process id’si verilen komut sonlandırılabilir.

## Process Önceliklendirme

- nice
- renice
- cpulimit
- sleep
- watch
- at

## İş Başlatma / Durdurma

- jobs
- `&` arka plan
- bg
- fg
- suspend

## Uygulama İşlemleri

**sudo:** Root yetkisi ile çalıştırma.

**apt update / upgrade / autoremove / clean / dist-upgrade**

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/56.webp)

## Ağ ve Sağlayıcı Komutları

**uname:** Sistem bilgisini döner. (Linux / Win)

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/57.webp)

**hostname:** System hesap sahibi ismini döner.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/58.webp)

**ifconfig:** Sistemde bulunan ağ bağlantı ve IP yapılandırması ayarlarını inceleyip değiştirmemize olanak tanır.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/59.webp)

**ping:** Hedef ile bizim sistemimiz arasında iletişimin sağlanıp sağlanmadığını kontrol ederek hedef sunucunun çalışıp çalışmadığını veya aktarım hızının ne kadar olduğunu öğrenmemizi sağlar. (ping google.com)

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/60.webp)

**host:** Hedef adres hakkında bilgi almanızı sağlar. Host komutu ile IP adresinden alan adı(domain name) ve alan adından(domain name) IP adresine ulaşabiliriz. (host www.outlook.com)


![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/61.webp)

**whois:** Domain’e dair bilgileri döndürür. (whois www.medium.com)

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/62.webp)

**route / route -n:** Ip yönlendirme tablosunu görüntüler.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/63.webp)

**traceroute:** Belirli bir hedefe gönderilen paketin hangi host’lardan geçtiğini bizlere gösterir. (traceroute www.google.com)

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/64.webp)

**dig “bağıntı":** DNS kayıtlarına bakmak için kullanımı oldukça kolay olduğundan yaygın olarak kullanılmaktadır.


![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/65.webp)

**arp:** IP-MAC Adresi eşleştirmelerinin tutulduğu tablolardır.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/66.webp)

**tcpdump:** Sistemimizin yaptığı bağlantıları ve sistemimize yapılan bağlantıları anlık olarak görüntülememize olanak sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/67.webp)

## Ağ ve Sağlayıcı Komutları

**ssh:** SSH (Secure Shell/Güvenli Kabuk) - Ağ üzerinden başka bilgisayara erişim sağlamak, uzak bir bilgisayar da komutlar çalıştırmak ve bir bilgisayardan diğerine dosya transferi amaçlı geliştirilmiş bir protokoldür. Güvensiz kanallar(internet vs) üzerinden güvenli haberleşme olanağı sağlar.

Bu SSH komutu 3 farklı kısımdan oluşur:

```bash
ssh {user}@{host}
```

Bu komut içerisinde user genellikle kullanıcıdır(Root olabilir). Host ulaşılmak istenen noktayı simgeler. Host bir IP adresi (244.235.23.19) veya domain (www.xyzdomain.com) olabilir.

**telnet:** “Telecommunication Network”. Telnet protokolü (iletişim ağı) ağ üzerindeki çok kullanıcılı bir makineye (sunucu-server) başka bir makina (pc) kullanarak bağlanmak ve o makine üzerinde bazı komutları çalıştırmak için kullanılır. Veriler şifrelenmez. Bundan dolayı güvensiz bir protokoldür. Ağımızı dinlemek isteyen herhangi biri verilerimizi görebilir. Bundan dolayı SSH bağlantısı kullanılması önerilir.

```bash
telnet sunucu_adi [port numarası/ip]
telnet 127.0.0.1
```

**scp (Secure Copy — Güvenli Kopyalama):** Bir ağdaki iki bilgisayar arasında dosya kopyalamanızı sağlar. Bağlantı sırasında SSH kullandığı için dosya aktarımı şifreli ve güvenlidir.

`scp kopyalacak_dosyanın_adi kopyalanacağı_yer`

Eğer karşı bilgisayardan kendi bilgisayarımıza kopyalayacaksak:
`scp kullanıcı_adı@host_ismi:kopyalacak_dosyanın_adi kopyalanacağı_yer`

Kendi bilgisayarımızdan karşı bilgisayara kopyalayacaksak:
`scp kopyalacak_dosyanın_adi kullanıcı_adı@host_ismi:kopyalanacağı_yer`

Uzak bilgisayarlar arası kopyalayacaksak:
`scp kullanıcı_adı@host_ismi:kopyalacak_dosyanın_adi kullanıcı_adı@host_ismi:kopyalanacağı_yer`

**sftp:** https://www.hostinger.web.tr/rehberler/sftp-nedir-ve-nasil-kullanilir/ (Basit ve Nitelikli Anlatım)

**ftp:** FTP (File Transfer Protocol — Dosya Aktarma Protokolü) dosyaları Internet’e yollamak ve Internet’ten almak için, kullandığımız protokoldür.

## Genel Açma Ve Kapatma İşlemleri

**reboot:** Yeniden başlatma

**shutdown:** Bilgisayarı kapanması için planlayıcı oluşturur.

**shutdown -c:** Kapama işlemini iptal eder. (Cancel)

**shutdown -h down:** İşletim sisteminin kapanmasını sağlar. (Halt) Bu işlemleri için zamanlama yapılabilir.

## Kullanıcı İşlemleri

Kullanıcı bilgileri GNU/Linux içerisinde etc dosyası içerisinde yer alır. Bu noktaya cd /etc kullanılarak ulaşılabilir. Daha sonra cat passwd denerek kullanıcılara dair bilgiler görüntülenir.

Kısa şekilde cat /etc/passwd olarak da yapılabilir.
ls/home üzerindeki dosyalar da kullanıcı sayısı hakkında bilgi verilebilir.

**adduser “kullanıcı_adı”/ useradd**: Kullanıcı eklemeye yarar, fakat bu işlem root yetkisi ile yapılabilir. (sudo)

**passwd “kullanıcı_adı”**: Komutuyla kullanıcıya dair şifre değiştirilebilir. Root yetkisi ister. (sudo)

**del “kullanıcı_adı” /user del**: Kullanıcıyı siler. Root yetkisi ister. (sudo)

**su “kullanıcıadı”**: İle kullanıcılar arası geçiş yapılabilir. Bu komut sonrası geçilen kullanıcının şifresini isteyecektir. Swict user içerisinde kullanıcı hesabından çıkmak için “exit” kullanılır.

**usermod / chfn**: Hesap bilgi ve içeriklerini modifiye etmeyi sağlar.

**chsh**: Shell üzerindeki kullanıcıyı değiştirir.

**logname**: Giriş yapılan kullanıcı ismini döndürür.

**finger**: Kullanıcı bilgilerine kolonlar halinde döndürür.

**whoami / who / users**: Aktif olarak giriş yapmış olan kullanıcıyı döndürür.

**last**: Oturumların kapatılma tarihlerini ve kullanılan kullanıcıları döndürür.

**id**: Kullanıcının id bilgisini döndürür.

**w**: Diğer giriş yapmış olan kullanıcıları listeler.

**uptime**: Login olunduktan sonra geçen süreyi gösterir.

**uname -a**: Linux dağıtımının ismini döndürür.

! Bu komutların kullanıcı adı belirtilmeden yazılması, var olan kullanıcının bilgileri üzerinde işlem yapmayı sağlar.

## Grup İşlemleri
**groups**: Grup üyelerini listeler.
**groupadd**: Grup oluşturur.
**groupdel**: Grubu siler.
**groupmod**: Grubu modifiye eder.

## Dosya İşlemleri
**df**: Boş alan ve var olan içerikleri görüntüler.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/68.webp)

**mount**: Sistem içerisindeki erişelebilir tüm dosyaları tek bir ağaç içerisinde döndürür.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/69.webp)

## Yedek İşlemleri

**dump**: Aldığı parametreler doğrultusunda yedeklenmesi gereken sistem dosyalarını işaretler.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/70.webp)

**restore**: Dump ile yedeklenmiş noktaya dönmemizi sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/71.webp)

**cdrecord**: Bir Cd vb. aygıt içerisine yedeği yazar.
rsync “kaynak_dosya” “hedef_dosya”: Uzak veya lokal bir bağlantı içerisinde dosya transferi işlemini gerçekler. mt: Uzak sürücü kontrolü gerçekler.

## Gün ve Zaman

**xclock**: Ekranda görsel olarak saatin görüntüleceği bir araç çağırır.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/72.webp)

**cal**:Takvimi çağırır.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/73.webp)

**date**:Terminal console’u içerisine var olan tarihi yazar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/74.webp)

**ntpdate**: Sunucu cihaz saatini internet üzerinden günceller ve doğrular.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/75.webp)

**fsck**: Dosya sistemi içerisinde denetim gerçekleştirir.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/76.webp)

**sync**: Disklerin önbelleklerini sıfırlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/77.webp)

## Mail İşlemleri

hunderbird / evolution / mutt / mail / mailq

## Matematiğe Dayalı İşlemler

xcalc / expr / dc

## Tarayıcı

lynx “link”: Sadce metin bazlı görüntüleme

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/78.webp)

wget: Web dosyaları indirmeyi sağlar.

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/79.webp)

## Harf Kontrolleri

spell / aspell: Parametre aldığı girdinin yazım denetimini sağlar.

## Yazdırma / Yazıcı İşlemleri

lpr: Parametre olarak belirtilen dosyayı yazdırıcıya iletir.

lpq: Yazıcı kuyruğunda bulunun dosyaları görüntüler.

lprm: Parametre olarak alacağı dosyası yazdırma kuyruğundan siler.

## Ubuntu Versiyon Yükseltme

Terminal / Uç birim üzerinden vereceğiniz alttaki komutların kullanılması yükseltilebilir herhangi bir üst sürüm varsa bizi “güncelleme yöneticisi” yoluyla haberdar edicektir, bu şekilde Ubuntu’yu oldukça basit bir şekilde sürüm yükseltmesine hazırlamış oluruz.

```bash
sudo apt-get update
update-manager -c -d
```

![Terminal Screeshot](/assets/images/blogs/linux_kavrami_ve_temel_linux_komutlari/80.webp)

Burada anlatmış olduğum içerikler ve komutlar elbette bu kadarla sınırlı değil. Birçok araştırma, öğrenme ile aktif olarak kullanmalısız. Fakat bende yeni olduğum için diyebilirim ki bir anda olacak bir şey değil. Zaman içerisinde alışkanlık edinilecek bir durum.

Umarım bu yazı sizlere bir şeyler katmıştır. Bu içeriği oluştururken birçok yeni bilgi öğrendim. Öğrenmeye ve güncellemeye de devam edeceğim. Lütfen hata görürseniz, bana iletin!

Yararlandığım kaynakları aşağıya ekliyorum. Lütfen incelemekten çekinmeyin.

## Kaynakça

* [Wiki-SSH](http://tr.wikipedia.org/wiki/SSH)
* [Linux — Vikipedi (wikipedia.org)](https://tr.wikipedia.org/wiki/Linux#:~:text=Linux)
* [Linux Dersleri](https://linux-dersleri.github.io/index.html)
* [Telnet Komutu](https://networkkampus.com/centos-telnet-komutu/)
* [What is umask and how to use it effectively](https://www.liquidweb.com/kb/what-is-umask-and-how-to-use-it-effectively)
* [Process Control Commands](https://www.geeksforgeeks.org/process-control-commands-unixlinux/)
* [Linux#11 Kullanıcı Yönetimi](https://www.youtube.com/watch?v=u1YXHlZYfYU&list=PLh9ECzBB8tJOnxXrUTOqXfurKOZkN4mEY&index=1)
* [Rsync Komutu ve Kullanımı](https://ceaksan.com/tr/rsync-komutu-ve-kullanimi)
* [Linux Komutları](https://www.hostinger.web.tr/rehberler/linux-komutlari/)
* [En Çok Kullanılan Linux Komutları](https://www.vargonen.com/blog/en-cok-kullanilan-linux-komutlari/)
* [gokhansengun / Linux Komut Satırında Hayatta Kalma İpuçları](https://medium.com/@gokhansengun/linux-komut-satırında-hayatta-kalma-ipuçları-3-614c0542459a)
* [Yusuf Sezer / Linux Nedir?](https://www.yusufsezer.com.tr/linux-nedir/)
* [Yusuf Sezer / Linux Dağıtımları](https://www.yusufsezer.com.tr/linux-dagitimlari/)
* [Yusuf Sezer / Linux Dersleri](https://www.yusufsezer.com.tr/linux-dersleri/)
* [Github Docs Temel Linux](https://linux-dersleri.github.io/docs/temel_linux/19.html)