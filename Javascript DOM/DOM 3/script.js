// ========================================================

// DOM SELECTION
// document.getElementById()
// -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Muhamad Arsaludin';


// // document.getElementsByTagName()
// // ->HTMLCollection
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }
// // p[2].style.backgroundColor = 'lightblue';

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // document.getElementByClassName
// // ->HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'diubah di javascript';

// document.QuerySelector()
// ->element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // document.QuerySelectorAll()
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// mengubah node root
// const sectionb = document.getElementById('b');
// const p4 = sectionb.querySelector('p');
// p4.style.backgroundColor = 'red';

// ======================================================



// MANIPULASI ELEMENT

// 1. innerHTML

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Muhamad Arsaludin</em>';

// const sectiona = document.querySelector('section#a');
// sectiona.innerHTML = 'hello world';

// 2.style

// const judulme = document.querySelector('#judul');
// judulme.style.color = 'red';
// judulme.style.backgroundColor = 'lightblue';

// 3.setAttribute
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('nama', 'arsal');

// 4.Element.classList
// .add()
// .remove()
// .toggle()
// .item()
// .contains()
// .replace()


// // =====================================================


// // NODE MANIPULATION

// // document.createElement()
// // buat element baru
// const pBaru = document.createElement('p');

// // document.createTextNode()
// // buat isi elemen
// const textPBaru = document.createTextNode('paragraf baru');

// // simpan isi element ke elemen baru
// pBaru.appendChild(textPBaru);

// // simpan element baru ke tempat yg diinginkan 
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);
// // node.appendChild() -> untuk menyimpan element di akhir


// //--------------------------------------------------------


// // node.insertBefore() ->untuk menyipan element sebelum element target

// // buat element baru
// const liBaru = document.createElement('li');
// const textli = document.createTextNode('item baru')
// liBaru.appendChild(textli);

// // ambil parents target
// const ul = document.querySelector('section#b ul');
// // element target
// const li2 = ul.querySelector('li:nth-child(2)');

// // Simpan elemen baru di parents target sebelum elemen target
// ul.insertBefore(liBaru, li2);


// // ------------------------------------------------------

// // parentNode.removeChild() -> untuk menghilangkan anak parenstNode 

// // tangkap element parents
// // +sectionA

// // tangkap child yang akan di hapus
// const link = document.getElementsByTagName('a')[0];
// // hapus Child (anak yg akan di hapus)
// sectionA.removeChild(link);

// // -----------------------------------------------------

// // parentNode.replaceChild() -> mengganti anak 

// // tangkap parents dan element yang akan diganti
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// // buat element baru untuk pengganti
// const h2Baru = document.createElement('h2');
// const texth2 = document.createTextNode('judul baru');
// h2Baru.appendChild(texth2);

// // ganti anak (anak pengganti, anak yg akan diganti)
// sectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgreen'; 
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';

// // ======================================================


// DOM EVENTS
// const p3 = document.querySelector('.p3');
// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }
// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function () {
//     p3.style.color = 'red';
// }

p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('click', function () {
    p3.style.color = 'red';
});


























