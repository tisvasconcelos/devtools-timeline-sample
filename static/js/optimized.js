window.addEventListener("load", event => {
  let arrayInputs = [],
      arrayLis = [];

  let lis = document.querySelectorAll('.emails ul li');
  for (var i = 0; i < lis.length; i++) {
    let li = lis[i];
    arrayLis.push(li);
    li.querySelector('a:not(.delete)').addEventListener('click', e => {
      //..abrir detalhe
    });
    li.querySelector('a.delete').addEventListener('click', e => {
      if(confirm("Excluir?")){
        //..chamar ajax
      }
    });

    let input = li.querySelector('input');
    arrayInputs.push(input);
    input.addEventListener('click', e => {
      if(e.target.checked) {
        li.classList.remove('unchecked');
      }else{
        li.classList.add('unchecked');
      }
    });
  }

  document.querySelector('#select-all').addEventListener('click', e => {
    arrayInputs.filter(input => !input.checked).map(input => input.checked = true);
    arrayLis.filter(li => li.classList.contains('unchecked')).map(li => li.classList.remove('unchecked'));
  });
});
