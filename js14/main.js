// Kitab (Book):
// Bu sinif hər bir kitabı təmsil edir və aşağıdakı xüsusiyyətləri olacaq:
// ad (kitabın adı)
// muellif (kitabın müəllifi)
// movcuddur (kitab mövcuddurmu? - boolean dəyəri)
// Kitabxana (Library):
// Bu sinif kitabxananı təmsil edir və aşağıdakı xüsusiyyətləri və metodları olacaq:
// Xüsusiyyətlər:
// kitablar (kitabxanada olan kitabların siyahısı)
// Metodlar:
// kitabElaveEt(kitab): Yeni kitab əlavə edir.
// kitabSil(ad): Kitabı adına görə kitabxanadan silir.
// kitabVer(ad): Kitabı adına görə ödünc verir və movcuddur dəyərini false edir.
// kitabQaytar(ad): Kitabı adına görə geri qaytarır və movcuddur dəyərini true edir.
// muellifeGoreAxtar(muellif): Müəllifin adına görə kitabları axtarır.
// 2. İstifadə Nümunəsi:
// Kitabxana sinifindən bir nümunə yaradın.
// Bu kitabxanaya bir neçə kitab əlavə edin.
// Bir neçə kitabı ödünc alın (oxumaq ucun goturun) və onların mövcudluğunu yoxlayın.
// Kitabları geri qaytarın və yenidən mövcudluğunu yoxlayın.
// Müəllifə görə kitab axtarın və nəticəni göstərin.
// 3. Əlavə Tapşırıq (İstəyə bağlı):
// Kitabları mövcud olub-olmamasına görə siyahılayan movcudKitablariGoster() metodu yaradın.
// Kitabları adına görə sıraya salan (kitablariSirala()) funksiya əlavə edin.

// Yuxarıda qeyd olunan tələblərə uyğun olaraq layihəni həyata keçirin və nəticəni test edin
// const kitabxana = new Kitabxana();

// const kitab1 = new Book("Hərb və Sülh", "Lev Tolstoy");
// const kitab2 = new Book("Kürk Mantolu Madonna", "Sabahattin Ali");
// const kitab3 = new Book("1984", "Corc Oruel");

// kitabxana.kitabElaveEt(kitab1);
// kitabxana.kitabElaveEt(kitab2);
// kitabxana.kitabElaveEt(kitab3);

// console.log("Bütün Kitablar:", kitabxana.kitablar);

// kitabxana.kitabVer("1984");
// kitabxana.kitabQaytar("1984");

// console.log("Sabahattin Ali'nin kitabları:", kitabxana.muellifeGoreAxtar("Sabahattin Ali"));











class Kitab {
    constructor(ad, muellif, movcuddur = true) {
        this.ad = ad;
        this.muellif = muellif;
        this.movcuddur = movcuddur;
    }

    getDetail() {
        return  `Kitabin adi: ${this.ad}, Muellif: ${this.muellif}, Movcuddur: ${this.movcuddur}`;
    }
}

class Kitabxana extends Kitab {
    constructor() {
        super();
        this.kitablar = []
    }

    kitabElaveEt(kitab) {
        this.kitablar.push(kitab);
    }

    kitabSil(ad) {
        this.kitablar = this.kitablar.filter(itab => kitabxana.ad !== ad)
    }

    kitabVer(ad) {
        const kitab = this.kitablar.find(kitab => kitab.ad === ad);
        if (kitab) {
            if (kitab.movcuddur) {
                kitab.movcuddur = false;
                console.log(`'${ad}' kitabi odunc verildi.`);
            } else {
                console.log(`'${ad}' kitabi artiq odunc götürülüb.`);
            }
        } else {
            console.log(`'${ad}' kitabi tapilmadi.` );
        }
    }

    kitabQaytar(ad) {
        const kitab = this.kitablar.find(kitab => kitab.ad === ad);
        if (kitab) {
            if (!kitab.movcuddur) {
                kitab.movcuddur = true;
                console.log(`'${ad}' kitabi geri qaytarildi.`);
            } else {
                console.log(`'${ad}' kitabi artiq kitabxanadadir.`);
            }
        } else {
            console.log(`'${ad}' kitabi tapilmadi.`);
        }
    }

    muellifeGoreAxtar(muellif) {
        const netice = this.kitablar.filter(kitab => kitab.muellif === muellif);
        if (netice.length > 0) {
            console.log(`Müəllif '${muellif}' üçün tapilan kitablar:`);
            netice.forEach(kitab => console.log(`  - ${kitab.getDetail()}`));
        } else {
            console.log(`Müəllif '${muellif}' üçün kitab tapilmadi.`);
        }
    }
}

const kitabxana = new Kitabxana();

kitabxana.kitabElaveEt(new Kitab("1984", "George Orwell"));
kitabxana.kitabElaveEt(new Kitab("Heyvanistan", "George Orwell"));
kitabxana.kitabElaveEt(new Kitab("Qurur və Qərəz", "Jane Austen"));

console.log("Kitablar:");
kitabxana.kitablar.forEach(kitab => console.log(kitab.getDetail()));

kitabxana.kitabVer("1984");

console.log("Kitablar ödüncdən sonra:");
kitabxana.kitablar.forEach(kitab => console.log(kitab.getDetail()));

kitabxana.kitabQaytar("1984");

console.log("Kitablar geri qaytardiqdan sonra:");
kitabxana.kitablar.forEach(kitab => console.log(kitab.getDetail()));

kitabxana.muellifeGoreAxtar("George Orwell");