'user strict';

const inputs = document.querySelectorAll('.input');


function handleUpdate(ev) {
    const suffix = ev.target.dataset.sizing || '';
    console.log(suffix)

    // const changeInput = ev.target;
    // const inputValue = changeInput.value;
    // const inputType = changeInput.id;
    // console.log(inputValue);
    // console.log(inputType);
    // if (inputType === 'base') {
    //     document.documentElement.style.setProperty('--base', `${inputValue}`);
    // }
    // else if (inputType === 'spacing') {
    //     document.documentElement.style.setProperty('--spacing', `${inputValue}${suffix}`);
    // }
    // else if (inputType === 'blur') {
    //     document.documentElement.style.setProperty('--blur', `${inputValue}${suffix}`);
    // }
    document.documentElement.style.setProperty(`--${this.id}`, `${this.value}${suffix}`);

}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

// ASÍ SERÍA CON UN FOR
// for (const input of inputs) {
//     input.addEventListener('change', handleUpdate)
// }