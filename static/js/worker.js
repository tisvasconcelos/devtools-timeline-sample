self.addEventListener('message', function(e) {
  let xhr = new XMLHttpRequest(),
    ids = e.data;

  xhr.open('POST', '/mark-read-all?ids=' + ids, true);
  xhr.timeout = 2000;

  xhr.onreadystatechange = function() {
    if (this.status == 200) {
      self.postMessage(ids);
    }
  };

  xhr.send(null);
}, false);
