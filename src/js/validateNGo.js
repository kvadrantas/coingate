const validateNGo = () => {
    const payVal = parseFloat(document.getElementById('payField').value);
    const buyVal = parseFloat(document.getElementById('buyField').value);
    if((!payVal || (payVal < 0) || !isFinite(payVal)) || (!buyVal || (buyVal < 0) || !isFinite(buyVal))) {
        alert(`
        INVALID DATA!
        Specified values cannot be empty, negative or infinite.
        `);
    } else {
        window.location.href='https://rolandasseputis.lt/portfolio/';
    }
    
}

export default validateNGo;