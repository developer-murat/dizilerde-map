//  Array Methods ( dizi metodları)
//  .map()

const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10},
    { id: 3, name: "Silgi", fiyat: 2},
    { id: 4, name: "Kalemtraş", fiyat: 7}
];

const urunOlusturucu = (urun) =>  `${urun.name} fiyatı ${urun.fiyat} liradır.`;

console.log(urunler.map(urunOlusturucu));


function UrunGoster({ urunListesi }) {
    return urunListesi.map((urun, index) => <li key={index}>{urun.name} fiyatı {urun.fiyat} liradır.</li>)
}