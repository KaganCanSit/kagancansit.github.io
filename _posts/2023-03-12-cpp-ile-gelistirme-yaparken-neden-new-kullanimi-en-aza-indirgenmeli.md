---
layout: post
title: "C++ İle Geliştirme Yapılırken Neden 'new' Kullanımı En Aza İndirgenmeli?"
date: 2023-03-12
lang: tr
header_image: "/assets/images/blogs/C++_Ile_Gelistirme_Yap._Neden_new_En_Aza_Ind/header_image.webp"
description: "C++ dilinde new kullanımı, bellek yönetimi ve Smart Pointer'lar hakkında rehber"
---

Merhaba, bugün C++ dilinde "new" kullanımının arkasında neler olduğuna dair bir bakış atacağız. C++ ve C donanım tabanlı birçok amaç için kullanılabilen dillerdir ve bellek yönetimi konusunda biraz daha açık yazım yapısına sahiptirler. (pointer vb.)

Bu nedenle, geçmişten gelen düşük donanımları yönetmek için performansa dayalı bir teknoloji diline ihtiyaç duyulduğunda C++ ve C tercih edilir. Bu diller donanımın gücünü verimli bir şekilde kullanabilen kod parçacıkları oluşturma hedefi taşırlar. Bu nedenle, savunma sanayisi, oyun endüstrisi, otonom araç teknolojileri, işletim sistemleri, arama motorları, haberleşme gibi kilit alanlarda yaygın olarak kullanılmaktadırlar. Örnek vermek gerekirse aktif olarak C, C++ teknolojisi kullanan yazılımlar için Linux(Core), Windows, Firefox, Adobe gibi örnekler verilebilir.

Ancak bu özellikleri nedeniyle C++ diğer dillere göre daha karmaşık bir syntax yapısına sahip ve daha fazla düşük seviyeli donanım bilgisi gerektiren bir dildir. Performans ve verimlilik söz konusu olduğunda, **doğru şekilde yazılmış ve mimari olarak implemente edilmiş bir C, C++ kodu** oldukça yararlı olabilir. Ancak bu konuda birçok noktaya dikkat edilmesi gerektiği için hataya daha fazla açık bir dil haline gelebilir.

Şimdi genel bir bakış açısı sunduktan sonra konuyu daha da özelleştirebiliriz.

### "New" Deyimini Kullandığımızda Neler Gerçekleşir?

"Neden daha az kullanmalıyız?" sorusuna doğru bir cevap verebilmek için C++ dilinin genel yapısı hakkında bilgi sahibi olmak ve "new" kullanımı sonrası bellek olaylarının sonuçlarını bilmek önemlidir.

Üç tip bellek yönetim tipi vardır:

__Static Memory Allocation - Statik Bellek Ayırma:__ Programın başlatılmasından önce "static" olarak tanımlanmış değerler için bellek alanından yer tahsisi yapılır. Bu tahsis işlemi sadece bir kez gerçekleştirilir ve değerler sabit boyutludur. Program sonlanana kadar bellek içerisinde yer alırlar, programın sonlanmasıyla birlikte beraber belleğe iade edilirler.

__Automatic Memory Allocation - Otomatik Bellek Ayırma:__  Lokal değişkenler ve fonksiyon/method tanımları genellikle bir alanda başlatılır ve aynı alandan çıktıktan sonra bellekte iade edilir. Bu veriler **"Stack - Yığın"** olarak adlandırılan bir yapıda saklanır.

__Dynamic Memory Allocation - Dinamik Bellek Ayırma:__ "new, malloc, calloc" gibi çağrılar ile bellek üzerinden anlık olarak alan tahsisi yapılması söz konusudur. Belleğin tahsisi ve iadesi programcıya bağlıdır. Tanımlanan değişkenler ve objeler bellek üzerinde "heap" adını verdiğimiz alanda tutulur.

Bu kısım program çalıştığı süre zarfında bellek alanından tahsis edilir ve kullanılır. Bu sebeple işletim adresi ve uzunluğu sabit değildir. Program işleyişinde istenen yer ve oluşan verinin büyüklüğü ile değişicidir.

Bu yazının temel konusu ise tanımlama ve kullanım biçimi doğrultusunda gerçekleşen "Automatic Memory Allocation - Otomatik Bellek Ayırma" ve "Dynamic Memory Allocation - Dinamik Bellek Ayırma" biçimlerinin farklılıklarından oluşmaktadır.

![Error Illustration](/assets/images/blogs/C++_Ile_Gelistirme_Yap._Neden_new_En_Aza_Ind/MemoryAllocation.webp)

[Kaynak: digiKey](https://www.digikey.com/en/maker/projects/introduction-to-rtos-solution-to-part-4-memory-management/6d4dfcaa1ff84f57a2098da8e6401d9c)

Şimdi bellek alanlarının tahsisinde gerçekleşen farklılıklarla birlikte performans ve güvenilirlik için oluşan durumlara göz atalım. Herhangi bir kod parçacağınız içerisinde yalnızca "new" deyimiyle çağrı yaptığınızda bellek üzerinden bir alan tahsisi gerçekleştirirsiniz, ayrıca bu alanın yönetimi ve idaresi (C, C++ gibi programlama dilleri için) sizlerin yönetimindedir. Belleğe iadesi de öyle!

Asla unutmamak gerekir. __C ve C++ kaynak yönetimi için bir Garbage Collector'a sahip değildir.__ Bu sebeple kullanılmayan değişken ve değerleri otomatik olarak iade işlemi gerçekleştirmez. Hatalı kullanım ile birlikte bellek üzerinden tahsis ettiğiniz alanı iade etmememiz sonucunda "Memory Leak" adını verdiğimiz durum ile karşılaşabilir veya programınızı kullanılamayan bir hale getirebilirsiniz.

![Error](/assets/images/blogs/C++_Ile_Gelistirme_Yap._Neden_new_En_Aza_Ind/Error.webp)

### Memory Leak - Bellek Sızıntısı İçin Basit Bir Örnek

{% raw %}
<!-- Youtube Video Content -->
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 3%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube-nocookie.com/embed/Rb3NqsrzMKo?si=6lM9Js3VZPIwVWcb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;        picture-in-picture; web-share" allowfullscreen>
  </iframe>
</div>
{% endraw %}

Örnek üzerinden gidecek olursak yukarıdaki kod parçacağında görüldüğü üzere bir "MyClass" adıyla bir sınıf tanımlı, bu sınıftan bir nesne oluşturuyoruz ve "delete" işlemi gerçekleştirilmeden if şartı içerisinde yer alan return ile programı sonlandırıyoruz. Görüldüğü üzere "MyClass" sınıfına ait "Destructor - Yıkıcı" herhangi bir şekilde çağrılmıyor. Son durumda tanımlamış olduğumuz class nesnesi halen bellekte yer almaya devam ediyor. Bu durum şu an için korkutucu gözükmeyebilir. Fakat eğer bu parçacığı çok fazla çalıştırırsam? Bir süre zarfı sonrasında belleğimde alan kalmayacak ve işletim sistemi üzerinden diğer programlar, süreçler hatalı davranmaya, belki de sonlanmaya başlayacaktır. Ayrıca kritik bir noktada bırakılan bu tip bir veri güvenlik ihlali de oluşturabilir. Örneğin bir kullanıcıya ait tanımlı bir veriyi bir class yapısından oluşturduğunuz obje yardımıyla tutuyorsunuz. Bu objeyi eğer doğru biçimde belleğe iade etmez veya içeriğini karartmazsanız bellek üzerinde okunabilir olarak kalacaktır.

! C ve C++ bellek yönetimi için sizlere farklı yollar sunuyor fakat "Garbage Collector" bulunmayışıyla birlikte yönetimin tüm sorumluluğunu da size devrediyor.

### Peki! Çözüm Yolu Nedir?

C++ bizlere bu durum için __"Smart Pointers / Akıllı İşaretçiler"__ gibi bir yol sunuyor. Yaptığımız "new" tanımlarının "Dynamic Memory Allocation / Dinamik Bellek Ayırma" yerine "Automatic Memory Allocation / Otomatik Bellek Ayırma" ile gerçekleşmesini sağlayabilirsiniz.

Programınızın performansı ve kaynak yönetimi için bu yol sizlere daha iyi sonuçlar verecektir. Detaylandırmadan önce aynı örneği bir smart pointer yardımıyla gerçekleştirelim;

{% raw %}
<!-- Youtube Video Content -->
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 3%;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube-nocookie.com/embed/yFzypPU3Q4I?si=hwZozFSsMxmbFcQX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>
</div>
{% endraw %}

Bu örnek üzerinden baktığımızda ise if şartı içerisinde program return ettiğinde var olan değişken değeri için bellek alanı iade ediliyor. Çünkü "Destructor / Yıkıcı" çağrısının gerçekleştiğini görüyoruz. Ayrıca nesnenin bellek adresi boşaltılarak yeniden kullanılmak üzere tahsis ediliyor.

### Neden Smart Pointer?

Otomatik Bellek Ayırma işlemi, Dinamik Bellek Ayırma işlemine kıyasla daha hızlı ve güvenlidir. "heap" yapısı için adresler değişicidir ve bellek alanında sıralı değildirler. Adresci kayıtlarının tutulması ve değerlere erişim maliyetlidir. Bu maliyetler beraberinde performans kaybına yol açar.

Otomatik Bellek Ayırma işleminde yer alan "stack" yapısı için ise değerler "FILO (First In Last Out)" olarak tutulduğundan erişim hızlıdır. Değişkenlerin iadesinde "Memory Leak" hatalarının önüne geçer.

### Sonuç

"New" deyimini kullanmaktan her zaman kaçınmak zorunda değilsiniz. Özellikle yığın boyutuna oranla daha fazla veri almanız gerektiğinde veya new ifadesinin iadesini iyi yönetebileceğiniz durumlarda "new" kullanabilirsiniz.

Ancak mümkün olduğunca "Smart Pointers / Akıllı İşaretçileri" kullanmanız bellek kaynaklarını daha iyi yönetmenize yardımcı olacaktır. TheCherno kanalına ait "[SMART POINTERS in C++](https://www.youtube.com/watch?v=UOB7-B2MfwA)" ve CoffeeBeforeArch kanalına ait "[C++ Best Practices: RAII](https://youtu.be/LU62nNsigjs)" içeriklerini izleyerek daha fazla bilgi edinebilirsiniz.

### Kaynakça

- [Stackoverflow - Why should C++ programmers minimize use of 'new'?](https://stackoverflow.com/questions/6500313/why-should-c-programmers-minimize-use-of-new)
- [Stackoverflow - Why doesn't C++ have a garbage collector?](https://stackoverflow.com/questions/147130/why-doesnt-c-have-a-garbage-collector)
- [SMART POINTERS in C++](https://www.youtube.com/watch?v=UOB7-B2MfwA)
- [DigiKey - Introduction to RTOS](https://www.digikey.com/en/maker/projects/introduction-to-rtos-solution-to-part-4-memory-management/6d4dfcaa1ff84f57a2098da8e6401d9c)