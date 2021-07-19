// toggle switch
const container = document.querySelectorAll('.toggle-container');

container.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('on');
  });
});

// toggle pages

const lists = document.querySelectorAll('.list');
const listContainer = document.querySelector('.list-container');
const pages = document.querySelectorAll('.page-container');

listContainer.addEventListener('click', (e) => {
  const target = e.target.parentElement;
  lists.forEach((list) => {
    if (list === target) {
      list.classList.add('active');
    }
    if (list !== target) {
      list.classList.remove('active');
    }
  });

  const id = target.textContent;
  pages.forEach((page) => {
    if (id === page.dataset.id) {
      page.classList.add('show');
    }
    if (id !== page.dataset.id) {
      page.classList.remove('show');
    }
  });
});
