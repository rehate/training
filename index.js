const names = [
  "Юрий Андреевич Аринянский",
  "Вероника Александровна Буслаева",
  "Борис Иванович Луценко",
  "Лев Маркович Литвинов",
  "Лариса Помпеевна Александровская",
  "Дмитрий Николаевич Смолич",
  "Витайлий Михайлович Барковский",
  "Валерий Денисович Анисенко"
];

console.log('Hi!');

function searchHandler(e) {
  const dropdown = document.querySelector('.dropdown-menu');
  const searchvalue = document.querySelector('.searchbar').value.toLowerCase();
  const matches = [];
  names.forEach((name) => {
    if (name.toLowerCase().includes(searchvalue)) matches.push(name);
  })
  if (matches.length === 0 || searchvalue==="") {
    dropdown.classList.add("dropdown-menu-unvisible");
  } else {
    dropdown.classList.remove("dropdown-menu-unvisible");
  }
  let links = matches.reduce((acc, link) => {
    return acc += `<a class="dropdown-item" href="#">${link}</a>`
  }, '');
  
  dropdown.innerHTML = links;
}

document.querySelector('.searchbar').addEventListener('keyup', searchHandler);