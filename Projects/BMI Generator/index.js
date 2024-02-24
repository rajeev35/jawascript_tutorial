const form = document.querySelector('form')

form.addEventListener('submit', function(e){

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);

    const waight = parseInt(document.querySelector('#waight').value);
    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }else if(waight === '' || waight<0 || isNaN(waight)){
        results.innerHTML = `please give a valid Waight ${waight}`;
    }else{
        const BMI = (waight/((height*height)/10000)).toFixed(2)

        results.innerHTML = `<span>${BMI}</span>`;
    }
    

});
