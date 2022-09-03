function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

}

for (var i = 0; i < 100; i++) {
  let elList = document.querySelector("#myUL");
  let elItem = document.createElement("li");
  let elLink = document.createElement("a");
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  let results = generateRandomNumber(1000000, 10000000)

  elList.appendChild(elItem);
  elItem.appendChild(elLink);
  
  
  
  
  function formatNumber(number){
    console.log("Original number : "+ number);
    let result =  number.replace(/(\d{3})(\d{2})(\d{2})/,'$1-$2-$3');
    console.log("Formatted number using regular expression : "+ result);
    elLink.textContent = result
}

var originalNumber = String(results);

formatNumber(originalNumber)
console.log(originalNumber);
}





// let telEl = document.querySelector('#myInput')

// telEl.addEventListener('keyup', (e) => {
//   let val = e.target.value;
//   e.target.value = val
//     .replace(/\D/g, '')
//     .replace(/(\d{3})(\d{2})?(\d{2})?/g, function(txt, f, s, t) {
//       if (t) {
//         return `${f}-${s}-${t}`
//       } else if (s) {
//         return `${f} ${s}`
//       } else if (f) {
//         return `${f}`
//       }
//     });
// })