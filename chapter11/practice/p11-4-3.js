// 11.4.3. A Word of Caution
// What happens if a function expects an argument to be a function, but it isn't?

function callMe(func) {
    func();
}

callMe("Al");