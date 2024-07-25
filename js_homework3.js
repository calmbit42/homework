function pow(x, y) {
    let res = 1;
    
    for (let i = 0; i < y; i++) {
        res *= x;
    }
    
    return res;
}