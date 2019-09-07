((w) => {
  fetch('https://raw.githubusercontent.com/bookiza/bookiza.cli/master/package.json')
    .then(function(response) {
      return response.json()
    }).then(function(myJson) {
      document.getElementById('version').innerHTML = `npm@${myJson.version}`
    })

})(window)