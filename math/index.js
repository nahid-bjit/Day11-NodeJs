class Math {
    add(a, b) {
        console.log("Executing addition...");
        return a + b;
    }
}

module.exports = new Math()


class Rectagnle {
    area(h, l) {
        console.log("Calculating area..")
        return h*l
    }

    perimeter (h, l) {
        console.log("Calculating perimeter..")
        return 2*(h+l)
    }
}

module.exports = new Rectagnle()