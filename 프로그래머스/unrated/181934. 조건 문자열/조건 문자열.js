function withEqual(ineq, n, m) {
    if (ineq === "<") {
        return n <= m ? 1 : 0;
    } else {
        return n >= m ? 1 : 0;
    }
}

function withoutEqual(ineq, n, m) {
    if (ineq === "<") {
        return n < m ? 1 : 0;
    } else {
        return n >  m ? 1 : 0;
    }
}


function solution(ineq, eq, n, m) {
    if (eq === "=") {
       return withEqual(ineq, n, m);
    } else {
       return withoutEqual(ineq, n, m);
    }
}