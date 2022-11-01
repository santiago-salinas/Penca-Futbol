class Category {
    constructor(dataArray){
       
        this.name = dataArray['name'];
        this.type = dataArray['type'];
        this.color = dataArray['color'];
        this.cantElem = dataArray['cantElem'];
    }

    addQuantity(){
        this.cantElem += 1;
    }
}



module.exports = Category;