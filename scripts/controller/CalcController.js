class CalcController{
    constructor(){
        this._locale = "pt-br";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){
        
        this.setDisplayDateTime();

        setInterval(()=>{
            this.setDisplayDateTime();
        }, 1000);
    }

    //Getters
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    get currentDate(){
        return new Date();
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    //Setters
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    set currentDate(date){
        this._currentDate = date;
    }

    set displayTime(time){
        return this._timeEl.innerHTML = time;
    }

    set displayDate(date){
        return this._dateEl.innerHTML = date;
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

}