const si = (principle, rate, time) => { 
    if (principle && rate && time)
        return (principle * rate * time) / 100.0;
    else
        return 0.0;
}

const addition = (valA, valB) => {
    if (valA & valB)
    {
        return valA + valB;
    }
    else
    { 
        return 0;
    }
}

export { si,addition };