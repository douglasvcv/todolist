class DisplayToday{
    constructor(element){
        this.element = document.querySelector(element )
        this.date = new Date()
    }
    updateElement(){
        this.element.innerText = new Intl.DateTimeFormat(
            "pt-br",
            this.options,
        ).format(this.date)
    }
    init(){
        
    }
}