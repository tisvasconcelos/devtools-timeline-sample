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

document.querySelector('#select-none').addEventListener('click', e => {
  [].forEach.call(document.querySelectorAll('.emails ul li'), li => {
    li.querySelector('input').checked = false;
    li.classList.remove('checked');
  });
});

document.querySelector('#mark-all-read').addEventListener('click', e => {
  [].forEach.call(document.querySelectorAll('.emails ul li input'), input => {
    if(input.checked) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/mark-read?id=' + input.id, true);
      xhr.timeout = 2000;

      xhr.onreadystatechange = function() {
        if (this.status == 200) {
          input.checked = false;
          input.parentElement.classList.add('read');
          input.parentElement.classList.remove('unchecked');
          input.parentElement.classList.remove('checked');
        }
      };

      xhr.send(null);
    }
  });
});
