window.addEventListener('scroll',function(){               // метод , который обрабытвает действие 
  var header = document.querySelector('header');           // метод возврает первый элемент документа , если элемент не найдет возвращает null
  header.classList.toggle('sticky',window.scrollY > 0);    //добавляет класс 'sticky' при скроллинге по оси y

})


function toggleMenu(){
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');

}