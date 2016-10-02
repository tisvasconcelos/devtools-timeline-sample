[].forEach.call(document.querySelectorAll('.emails ul li'), li => {
    [].forEach.call(li.querySelectorAll('a'), a => {
      if(a.classList.contains("delete")) {
        a.addEventListener('click', e => {
          if(confirm("Excluir?")){
            //..chamar ajax
          }
        });
      }else{
        a.addEventListener('click', e => {
          //..abrir detalhe
        });
      }
    });
    li.querySelector('input').addEventListener('click', e => {
      if(e.target.checked) {
        li.classList.add('checked');
      }else{
        li.classList.remove('checked');
      }
    });
});

document.querySelector('#select-all').addEventListener('click', e => {
  [].forEach.call(document.querySelectorAll('.emails ul li'), li => {
    li.querySelector('input').checked = true;
    li.classList.add('checked');
  });
});
