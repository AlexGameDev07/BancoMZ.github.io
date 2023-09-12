let Ans100 = document.getElementById("Ans100")
let Ans50 = document.getElementById("Ans50")
let Ans20 = document.getElementById("Ans20")
let Ans10 = document.getElementById("Ans10")
let Ans5 = document.getElementById("Ans5")
let Ans1 = document.getElementById("Ans1")



function CalcularBilletes() {

    let Nombre = document.getElementById("txt2").value

    let Cant_Billetes_100 = 0;
    let Cant_Billetes_50 = 0;
    let Cant_Billetes_20 = 0;
    let Cant_Billetes_10 = 0;
    let Cant_Billetes_5 = 0;
    let Cant_Billetes_1 = 0;
    let Num = document.getElementById("txt1").value;

    let total = Num;
    document.getElementById("txt1").value = "";

    while (Num > 0) {

        if (Num >= 100) {
            Cant_Billetes_100 = Math.floor(Num / 100)
            Num = Num % 100
        }
        else if (Num >= 50) {
            Cant_Billetes_50 = Math.floor(Num / 50)
            Num = Num % 50
        }
        else if (Num >= 20) {
            Cant_Billetes_20 = Math.floor(Num / 20)
            Num = Num % 20
        }
        else if (Num >= 10) {
            Cant_Billetes_10 = Math.floor(Num / 10)
            Num = Num % 10
        }
        else if (Num >= 5) {
            Cant_Billetes_5 = Math.floor(Num / 5)
            Num = Num % 5
        }
        else if (Num >= 1) {
            Cant_Billetes_1 = Math.floor(Num / 1)
            Num = 0
        }
    }

    
    document.getElementById("Saludo").innerHTML = "Hola " +Nombre + ", tu retiro por el monto de:" +" $" +total + ". Ha sido realizado con exito!"

    Ans100.innerHTML = Cant_Billetes_100
    Ans50.innerHTML = Cant_Billetes_50
    Ans20.innerHTML = Cant_Billetes_20
    Ans10.innerHTML = Cant_Billetes_10
    Ans5.innerHTML = Cant_Billetes_5
    Ans1.innerHTML = Cant_Billetes_1



    
}





