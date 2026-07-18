---
layout: post
title: "Git, Git Flow, Github Kavramları ve Bazı Git Komutları"
date: 2022-07-30
lang: tr
image: "/assets/images/blogs/git_gitflow_github_kavramlari_ve_bazi_git_komutlari/header_image.webp"
description: "Git versiyon kontrol sistemi, Git Flow ve temel Git komutları rehberi"
---

Hoşgeldin, nasılsın? Bugün yazılımcıların baş köşesinde bulunan "Git" kavramı ve Github'a dair birkaç içeriği seninle paylaşmak istiyorum. Bu yazı içerisinde elbette hatalarım eksiklerim olabilir. Bana iletirsen, beraber düzeltebiliriz. 👋

Yazılım başlı başına ekip olarak gerçekleştirilmesi gereken bir iştir. Kendi içerisinde kapsadığı alanın her bir noktasında uzman olmanız maalesef söz konusu bile olamaz. Bu yüzden beraber çalışma, ekip anlayışı, kademeli geliştirme her büyük projenin vazgeçilmezidir.

Git, bu çalışma karmaşısını engellemek, ekip olarak geliştirmenizi desteklemek ve ayrıca size güvenilir, gelişime açık bir geliştirme ortamı sunar. Git'e dair birçok içerik anlatılabilir. Bu yüzden genel kapsamı bir miktar büyük blog içeriği seni bekliyor. Buradaki terimleri temel alarak araştırmalarına bir başlangıç noktası oluşturabilirsin. Umarım bu blog gönderisi sana yeni bilgiler katar.

Hadi başlayalım!

🏹 Tüm Git kavramı hakkında bilgi alabilmek için aşağıdaki link üzerindeki dokümanı mutlaka incelemeni öneririm.

- [Türkçe Git 101 (bilgi.edu.tr)](https://stk.bilgi.edu.tr/media/uploads/2015/01/12/git101.pdf)
- [Git Book](https://git-scm.com/book/tr/v2)

### Git Nedir?

Basit bir biçimde ele alacak olursak **Versiyon Kontrol Sistemi**’dir. Linux’un geliştiricisi olan Linus Torvalds tarafından dosyaların etkin takip edilebilmesi ve projenin hızlı geliştirilebilmesi için oluşturulmuştur.

### Versiyon Kontrol Sistemi Nedir?

(Kaynak Kod Yönetim Sistemi adı da verilir.)

Bir döküman üzerinde yaptığınız değişiklikleri adım adım izleyen, istediğinizde kayıt eden, güvence altına alan, hata durumunda geri dönebilmenizi sağlayan ve ister internet üzerindeki bir sunucuda ister yerel cihazınızda saklayabilmenize olanak tanıyan bir sistemdir.

### Git'in Alternatifleri Nedir? Ne için Kullanılması Gerekir?

Git’in birçok alternatifleri bulunmaktadır. Fakat sektör içerisinde bulunan taleplere en efektif, etkili cevabı veren ve genel kullanımı bulunan versiyon sistemi Git’tir. Git'in diğer versiyon sistemleri göre daha fazla tercih edilmesinin ve genel versiyon kontrol sistemlerinin kullanılmasının birçok sebebi vardır. Bunlardan bazıları;

#### Esnek ve Dağınık Bir Yapısı

Bu durumu açıklayacak olursak Git sistemi içerisinde projemizi kendi local’imizde, sunucu üzerinde ve projeler içerisinde branch (dal) yapıları ile birçok küçük parçaya ayırabilir, güvenilir bir şekilde proje geliştirme süreci sürdürebiliriz.

#### Çoklu Kişi Desteği / Ekip Yapısına Uygunluk

Yukarıda bahsettiğimiz esnek yapı birçok kişinin bir proje üzerinde aktif olarak farklı kısımlarda çalışma esnekliği sağlar. Örneğin siz kullanıcı giriş işlemleri ile uğraşırken, takım arkadaşınız sizinle çakışmayan ana menü işlemleri ile yakından ilgilenebilir. Oluşturduğunuz kod tüm ekip üyeleri tarafından her yönden incelenebilir.

#### Zaman

Geliştirme ortamına kolay ve güvenilir ulaşım ile birlikte hatalar olması sonucunda geriye dönük güvence sağlar. Bu da bir hatanın veya projeye ulaşımın aldığı süreyi kısaltmada etkilidir.

#### Güvenilirlik

Dosyalarınızı hata durumunda eski versiyonlarına geri döndürebilir veya sunucudan tekrar eski versiyonu edinebilirsiniz.

#### Hata Payında Azalma

Yapmış olduğunuz geliştirmeler sizden bilgili ekip liderleniz, takım arkadaşlarınız tarafından aktif olarak rahatlıkla incelenebilir. Bu durum projenizin test edilebilirliğini arttırmasının yanı sıra maliyetleri en aza indirgeyecektir.

#### Deneme ve Yanılmaya Açık

Projeniz içerisinde dosya ve bilgi kaybetme korkusu olmadan yeni fikirleri deneyebilir, sınayabilirsiniz.

Bunun gibi birçok duruma dair eklemeler yapılabilir. Ancak temel fikir artık net.

## Github Nedir?

Github ise Git sistemi ile birlikte çalışan dosyaları depoladığımız host servisidir. Birçok kişinin çalışmalarını ve içeriklerini paylaştığı, bir yandan da projelerini saklayabildiği bir depolama servisidir.

Örnek:  
<https://github.com/KaganCanSit>

## Git Bize Ne Sağlar?

Birden fazla yerde (dağıtık olarak) dosyalarınızı ve versiyon kontrol bilgilerinizi depolayabilirsiniz. Böylelikle cihaz bağımsız olarak dosyalarınıza erişebilirsiniz.

“commit” yaparak SnapShot (anlık görüntü) özelliği ile istediğiniz zaman proje veya dosyaların o anki halini kayıt altına alabilirsiniz. Böylelikle ileride bir hata ile karşılaşırsanız herhangi bir zamandaki herhangi bir versiyona dönüş yapabilirsiniz. SnapShot alındıktan sonra değişiklik yapılan dosyaları görebilirsiniz. Bu durum gerçekleştirilen proje içerisinde farklıklıklar ve gelişim aşamalarını görmenizi sağlar.

Takımların aynı projede beraber çalışmasına imkan verir. “Kim neyi düzenledi? Ne ekledi? Ne çıkarttı? Son değişiklik ne zaman yapıldı?” gibi bilgilere erişebilirsiniz. Bu sayede topluluk ile proje geliştirme süreçlerini kolaylaştırabilirisiniz.

Projede versiyonlanmasını istemediğiniz dosyaları belirtebilirsiniz.(node_modules, .mp4, .log, .env gibi) Bu sayede temiz bir biçimde dosya yönetimi de sağlayabilirsiniz. Boyut içinde birçok avantajı bulunur. Bu dosyaları ise ”git ignore” dosyası içerisinde uzantılarını belirtmeniz yeterlidir.

### UYARI:

Bu aşamadan sonra anlatacaklarım “Git” kavramının açıklanmasından daha çok Git’in nasıl kullanılacağına dair temel komutlar ve kavramlar üzerine ilerleyecektir eğer “Git” kullanmak için yeni başlıyorsanız, kafa karıştırıcı olabilir. Bunun için aşağıdaki ücretsiz eğitimlere mutlaka göz atın. Bu içerikler sizlere iyi derecede bilgi sağlayacaktır.

- [Git, GitHub ve GitLab Kullanımı / YouTube](https://youtube.com/playlist?list=PLPrHLaayVkhnNstGIzQcxxnj6VYvsHBHy)
- [GIT Versiyon Kontrol Sistemi Nedir? / Patika.dev](https://app.patika.dev/courses/git/git-versiyon-kontrol-sistemi-nedir)
- [İleri Seviye GIT / Patika.dev](https://app.patika.dev/courses/ileri-seviye-git)
- [GIT - Versiyon Kontrol Sistemi Neden Gereklidir? / YouTube](https://www.youtube.com/watch?v=WLPgBUpAcrA&list=PLGrTHqyRDvx4WAg9LPX_GKk7cKF7KBXOg)

**Şimdi anlaştıysak devam edebilirsin.**

## Git Flow Mekanizması

Yazılım geliştirme baştan sona büyük bir kapsama sahip olan bir süreçtir. Geliştirilen projeye göre kapsam ve derinliği değişse de hizmet veren bir yazılım geliştirmek için çoğu zaman bir yaşam döngüsü, çeşitli geliştirme ve test araçlarını bünyesinde barındırır. Bu gelişimin ana yapılarından biri **Git Flow**'dur.

Genel olarak kullanılan flow yaklaşımı;

Yazılım geliştirme süreci içerisinde yazılım yaşayan bir yapıya sahiptir. Anlık olarak hem kullanılan, hem geliştirilmeye devam eden, hem de sektörde kendisinden beklenenleri karşılamaya çalışan bir yapıya sahiptir. Bu sebepler doğrultusunda geliştirme sürecinde karmaşıklık çıkmaması adına geliştirme süreci “Git” gibi araçlar yardımıyla yürütülür.

![Git Flow Yapısı](/assets/images/blogs/git_gitflow_github_kavramlari_ve_bazi_git_komutlari/01.webp)

Genel olarak geliştirme süreci Master, Hotfix, Develop, Remove olmak üzere 4 adet geliştirme branch (dal) ‘ına sahiptir. Fakat kesinlikle bu şekilde olacak diye resmi bir kural yok. Projeden projeye farklılık gösterebilir.

- **Master:** Bu branch (dal) kararlı ve belirli bir süreç sonucunda pişmiş olan aktif olarak kullanıcığının kullandığı versiyonları barındırır. Bu branch(dal) için genellikle geliştiricilerin yetkisi bulunmaz. Master’a sürüm çıkma ve yeni bir içerik ekleme görevi ekip yöneticilerinin sorumluluğundadır. Geliştiricilerin bu dal ile yakından ilişkisi bulunmaz.

- **Hotfix:** Aktif olarak kullanıcıya sunulan sürümde bulunan hatayı düzeltmek amacıyla kullanılır. Genellikle küçük çaplı anlık geliştirmelerde etkilir. Hotfix sonucu ulaşılan versiyon hem master hem developer branch(dal)’larına eklenir, güncellenir.

- **Develop:** Geliştiricilerin temel olarak baz aldığı ana versiyon sürümü olarak kullanıcıya sunulmadan önce geliştirilmeye devam ettiği ve sınama, test, dokümantasyon düzenlemelerini aktif olarak sürdürdüğü branch(dal)’dır. Fakat bu dal içerisine eklemeler direk olarak yapılmaz veya direk bu dal içerisinde geliştirme aktif değildir. Gelişim “Feature” brach(dal)’ları aracılığıyla ilerler.

- **Feature:** Geliştirici bir geliştirme yapmak istediğinde develop branch(dal)’ın son halinden bir yeni dal oluşturarak burada çalışır. Bu geliştirmenin aktif olarak yapıldığı dala “Feature” adı verilir. Özellik geliştirmesi sonrası test ve diğer ekiplerin sınaması sonrasında merge(birleştirme) işlemi gerçekleştirilerek oluşturulan ek feature dalı silinir. Bu geliştirme ve özellik ekleme dallarının ömürlerinin kısa olması gereklidir. İşlem sonrası silinerek karmaşıklık önlenmelidir.

**!** Yukarıdaki şekilde developer ve feature dallarının (branch) kullanımı develop branch’ının her daim testleri ve içeriği ile hazır durumda olmasını, sürüme çıkmaya hazır bir şekilde bulunması sağlar. Çünkü yazılım geliştirme, özellik ekleme süreçlerinde kademeli olarak birden fazla kişinin kontrolü, ek olarak bilgi birikim desteği bulunur.

![Branch Yapısı](/assets/images/blogs/git_gitflow_github_kavramlari_ve_bazi_git_komutlari/02.webp)

---

## Git En Çok Kullanılan Komutlar

![Git Komutları](/assets/images/blogs/git_gitflow_github_kavramlari_ve_bazi_git_komutlari/03.webp)

### Kullanıcı Ayarları

```bash
git config --global user.name "Name Surname"
git config --global user.email "test@gmail.com"
git config --list
```

### Temel Komutlar

- **git** : Git’in kurulu olduğunu ve temel komutları gösterir.  
- **git version** : Git versiyonunu gösterir.  
- **git init** : Yeni bir Git deposu oluşturur.  
- **git add "dosya"** : Dosyayı izlemeye ekler.  
- **git add .** : Tüm dosyaları ekler.
- **git commit -m "Başlık" -m "Açıklama"** : Commit oluşturur.
- **git rm "dosya"** : Dosyayı siler.
- **git remote -v** : Remote bağlantı adresimizi belirtir. (https://github.com…..) Git sistemi ile kendi Github adresinizi bağladığınız oluşturmuş olduğunuz proje dosyalarını Github kod deponuza gönderebilirsiniz. Bu komut ikisi arasında bağ oluşturduktan sonra kontrol etmek amacıyla kullanılabilir.

### Branch İşlemleri

- **git branch** : Local veya remote repository üzerinde yeni bir branch (dal) eklemek, silmek veya listelemek için kullanılır.
- **git branch "branch_name”** : Projenize yeni bir branch eklemek için kullanılır.
- **git branch -a / git branch** : Tüm uzak ve yerel branch’ları listelemek için kullanılır.
- **git branch -r** : İlişkili, kullandığımız brach’ı döndürür.
- **git branch -d branch_name** : Branch silmek için kullanılır.

### Checkout

- **git checkout** : Proje dalları arası geçiş yapmak için kullanılır.
- **git checkout “branch_name”** : Mevcutta var olan branch’a geçiş yapmak için kullanılır.
- **git checkout -b “branch_name”** : Yeni bir branch oluşturup, bu branch’a geçiş yapmak için kullanılır.
- **git checkout “commit_ID”** : Commitler arası geçiş yapmak için kullanılır. (Eski bir versiyona dönmek istediğimiz zaman)

### Merge

- **git merge “branch_name”** : Başka bir branch’da olan değişiklikleri, bulunduğumuz branch ile birleştirmek istediğimizde kullanılır.

Eğer iki ağaç birleştirilirken aynı noktalarda değişim bulunursa bu durumlara conflict ismi verilmektedir. Bunun gibi oluşan durumlarda çakışan kısımların düzeltilmesi ve gözden geçirilmesi gerekir. (release)

### Status

- **git status** : Versiyonlar arası (etiketler) farklarını gösterir. Ya da genel commit ve işlev bilgelerini döndürür.
   * **On branch main** : Main branch’ınde olduğumuzu,
   * **Changes to be commited** : Commit’lenmeye hazır değişiklikler olduğunu,
   * **Modified** : index.html: index.html dosyasında değişiklik yaptığımızı,
   * **Deleted** : styles.css: styles.css dosyasını sildiğimizi,
   * **Changes not staged for commit** : Üzerinde değişiklik yapılan ama staged ortamına gönderilmemiş dosyaları ifade eder.
   * **Untracked files** : Takibi yapılmayan dosyaları ifade eder.

### Log & Reflog

- **git log** : Projedeki commit geçmişini görüntülememizi sağlar. Bütün commit’ler, id’si, yazarı, tarihi ve mesajı ile beraber listelenir. (git log — oneline)
- **git reflog** : Yerel bir deponun tarihçesini yani dal bünyesinde olup bitenlerin listesini bizlere gösterir.
- **git log --graph** : Genel bilgilendirmeleri bir ağaç yapısı ile bize sunar.

### Push & Pull & Fetch

- **git push** : Uzak sunucuya, Github’a gönder.
- **git remote add origin http://uzak_deponun_adresi.git**
- **git push origin feature**

Diğer bir kullanım ise ağaca yönelik olabilir. 
- **git push origin “branch_name”**
- **git push push — force** : Sunucu üzerindekini ezerek bizim local’imizdekini baz alır.
- **git pull** : Uzak bilgisayardan proje klasorünü getir. (Geri getir.) Github üzerindeki bulunan haline bulunan mevcut kodu eşitler.
- **git fetch “remote-repo” “branch”** : Bu komut uzak sunucudaki dosyaları local’e getirir. Fakat var olan kodumuz ile pull gibi birleştirme yapmaz. Local olarak tutar. Bu sayede commit’lemeden önce branch’lar ve kod arasındaki olabilecekleri bakmamıza sağlar.
- **git clone** : Projenin kopyasını kendi local’inize almanızı sağlar.
- **git rm “dosya ve klasor_name”** : Dosya ve klasör silmek için kullanılır.
- **git rm — cached “dosya ve klasor_name”** : Git sistemine eklenmiş ve takip edilen bir dosyayı, takip edilmez olarak işaretler. Bu sayede bu dosyaya dair değişikliklerin takibi bırakılır.
- **git ignore** : Dosyaları versiyonlama dışında bırakmaya yarar. Bazı dosya ve içerikleri depo içerisinde barındırmak istemeyebiliriz. Bunun için ignore ile işaretlenmesi yeterlidir.

Örneğin bir uygulama derlendikten sonra oluşan .dll ya da .class ekli dosyaların depoya eklenmemesi gerekir, çünkü bu tür dosyalar yapılandırma (build) işlemleri esnasında sürekli yeniden oluşturulurlar.

### Diff

- **git diff** : Repository üzerinde yapılan değişikliklerden sonra dosyalar arasında oluşan farklılıkları gösterir.
- **git diff “commit_id_1”..”commit_id_2"** : İki commit arasındaki farklılıkları görmek için kullanılır.

### Clean

- **git clean** : Clean komutu ile dizin içinde bulunan ve indexe henüz eklenmemiş tüm değişiklikleri yok edebiliriz.
- **git clean -n** : Hangi dosyaların silineceğini görmemizi sağlar.
- **git clean -f** : Listelenen dosyaları siler.
- **git clean -f “dizin_ismi/”** : Dizin silmek için kullanılabilir.

### Commit Düzeltme

- **git commit — amend** : Belirli önceden oluşturulmuş bir commit’e ek yapmak için kullanılır.
- **git commit — amend -m “Bu yeni bir mesaj”**: Var olan commit’in açıklamasını değiştirmek için kullanılır.

### Revert

- **git revert “hash_degeri”** : Yanlışlıkla atılan commit’i nasıl geri alırız?

Geri almak istediğimiz commit’in HashID’sini git log ile bakarız.

Daha sonra git revert 165194161(HashID) yazarak atılmış olan commit’i geri alabiliriz.

Geri alınmış commit’i tekrar geri alarak eski haline getirebiliriz. Yine aynı şekilde log’dan bakarak HashID ile gerçekleştireceğiz.

### Reset

Var olan commit’lerin bazılarını geri alarak log içerisinde görünmesini istemiyorum. Nasıl yaparım?

git log kullandıktan sonra silinmesini istediğimiz yerin bir öncesinde commit’in HashID’sini alıyoruz.

Daha sonra “git reset — hard HashID” ile bu işlemi gerçekleştirebiliriz. Seçtiğimiz yere kadar olan log’lar silinecektir.

### Stash

- **git stash** : Geçici olarak sadece en son olan committen itibaren değişiklikleri tutar. Bu acil durumlarda geri dönme ve düzenleme için gereklidir.

“git stash list”le de tüm kayıtları görebiliriz.

“git stash apply” en üstteki kayıdı getirir. Kayıtı bellekten silmez.

### Tag

- **git tag** : git checkout yardımıyla yapmış olduğumuz commitlerin id’sini alabiliyorduk. Almış olduğumuz id bilgisindeki commit üzerine giderek tag ile etiket de verilebilir. Örneğin attığımız 2. komuta v1.0 demek gibi.

“git tag” ile var olan etiketleri görüntüleyebiliriz.

Örnek kullanım (git tag -a v3.0.0 -m “3.0.0 version created”) -a parametresi verilen tag’ı belirtir. -m ise açıklama eklememizi sağlar.

### Show

- **git show “hash_degeri”** : Belirli bir commit bilgisini görüntülememizi sağlar.

### Rebase

- **git rebase “branch_name”** : Rebase komutu çalışan brach’ı belirtilen branch ile birleştirme işlemi sağlar. develop / feature gibi düşünülebilir. Feature branch üzerinden yapılan geliştirmelerden sonra feature brach develop’a rebase edilebilir. 

Bu çözümün problemi daha önce pull çektiğimiz esnada oluşmuş ve çözmüş olabileceğimiz conflict’leri bu esnada tekrar çözmemiz gerekiyor ve bu durum zaman zaman can sıkıcı olabiliyor. Bu gibi birden fazla commit farkı olan durumlarda feature branch’ı için eski bir noktadan fork yapmak yerine daha yakın bir develop versiyonu üzerinden rebase edilmesi daha mantıklı olabilir.

### Interactive rebase kavramı nedir?

Bir branch üzerinde var olan commit’ler üzerinde mesajların, dropların değişmesi gibi olsa da asıl önemli kullanımı brach üzerinde var olan bütün commit’lerin tek commit haline getirilerek birleştirilmesi. Bu durum bizlerin var olan branch’dan ana branch’a merge etme işimiz sırasında tüm commit’leri kontrol etme durumumuzu ortadan kaldırır. Çakışma bulunmayan veya önlenebilir noktalarda tercih edilmelidir.

Bu yöntemin problemleri yukarıdaki rebase kavramı üzerinde incelenebilir.

Başlıca bilmemiz gereken bazı terimler;

- **untracked:** Git tarafından henüz takip edilmeyen, yani yeni oluşturulmuş dosyaları ifade eder.
- **unstaged:** Git tarafından henüz takip edilmeyen, yani yeni oluşturulmuş dosyaları ifade eder.
- **staged:** Git tarafından henüz takip edilmeyen, yani yeni oluşturulmuş dosyaları ifade eder.  
- **deleted:** Projeden silinmiş ama Git üzerinden kaldırılmamış dosyaları ifade eder.
- **branch:** Geliştirme ortamı içerisinde bulunan dosyalama ve yönetim yapısı olarak düşünülebilir. Ağaç dalları ile aynı mantıkta değerlendirilebilir. Bir daldan üretilen ayrılan dal, üretildiği ağacın içeriğini barındırır. Ağaç mantığından farklı olarak birleştirme işlemi uygulanabilir.
- **flow:** Akış ve ilerleyiş anlamına gelir.

## Kaynakça

- [Git Bash Komutları](https://app.patika.dev/moduller/git/git-bash-ile-git-temel-komutlari)  
- [İleri Seviye Git](https://app.patika.dev/moduller/ileri-seviye-git)  
- [Git Ignore Dosyası Ne İşe Yarar?](https://app.patika.dev/moduller/git/gitignore-dosyasi-ne-i̇se-yarar-nasil-kullaniriz)  
- [Git Tag ile Commit Etiketleme](https://www.mobilhanem.com/git-tag-ile-commit-etiketleme/)