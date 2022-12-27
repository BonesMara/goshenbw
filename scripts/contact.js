let rBtns = document.querySelectorAll('input[name="Country Code"]');
const codeField = document.getElementById('country-code-field');

rBtns.forEach(rBtn => {
  rBtn.addEventListener('click', () => {
    if(rBtn.value == 'Botswana'){
      codeField.style.display = "none";
      // codeField.style.transform = "scale(0)";
    }
    else if(rBtn.value == 'International'){
      codeField.style.display = "block";
      // codeField.style.transform = "scale(1)";
    }
  });
});
