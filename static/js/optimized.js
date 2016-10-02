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

  document.getElementById('select-all').addEventListener('click', e => {
    arrayInputs.filter(input => !input.checked).map(input => input.checked = true);
    arrayLis.filter(li => li.classList.contains('unchecked')).map(li => li.classList.remove('unchecked'));
  });

  document.getElementById('select-none').addEventListener('click', e => {
    arrayInputs.filter(input => input.checked).map(input => input.checked = false);
    arrayLis.filter(li => !li.classList.contains('unchecked')).map(li => li.classList.add('unchecked'));
  });

  // document.querySelector('#mark-all-read').addEventListener('click', e => {
  //
  //   let ids = [];
  //   [].forEach.call(document.querySelectorAll('.emails ul li input'), input => {
  //     if(input.checked) {
  //       ids.push(input.id);
  //     }
  //   });
  //
    // if(ids.length > 0) {
      // let xhr = new XMLHttpRequest();
      // xhr.open('POST', '/mark-read-all?ids=' + ids, true);
  //     xhr.timeout = 2000;
  //
  //     xhr.onreadystatechange = function() {
  //       if (this.status == 200) {
  //         document.getElementById('select-all').checked = false;
  //         for (var i = 0; i < ids.length; i++) {
  //           let input = document.getElementById(ids[i]),
  //             li = input.parentElement;
  //           input.checked = false;
  //           li.classList.add('read');
  //           li.classList.remove('unchecked', 'checked');
  //         }
  //       }
  //     };
  //
  //     xhr.send(null);
  //   }
  // });

  let worker = new Worker('/static/js/worker.js');
  document.querySelector('#mark-all-read').addEventListener('click', e => {
    let ids = [];
    [].forEach.call(document.querySelectorAll('.emails ul li input'), input => {
      if(input.checked) {
        ids.push(input.id);
      }
    });

    if(ids.length > 0) {
      worker.addEventListener('message', function(e) {
        document.getElementById('select-all').checked = false;
        for (var i = 0; i < ids.length; i++) {
          let input = document.getElementById(ids[i]),
            li = input.parentElement;
          input.checked = false;
          li.classList.add('read');
          li.classList.remove('unchecked', 'checked');
        }
      }, false);

      worker.postMessage(ids);
    }

  });

});
