
const Category = require('../category');

let categoryData = {
    'name' : 'luz',
    'type' : 'egreso',
    'color' : 'rojo',
    'cantElem' : 1
};
let ute = new Category(categoryData);

test("obtener nombre de categoría", () => {
    expect(ute.name).toBe("luz");
    expect(ute.type).toBe("egreso");
    expect(ute.color).toBe("rojo");
    expect(ute.cantElem).toBe(1);
});
test("setear nombre de categoría", () => {
    ute.addQuantity();
    expect(ute.cantElem).toBe(2);
});
