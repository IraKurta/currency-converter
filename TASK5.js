function ConvertationUSDtoUAH ()
{
    var USDvalue=window.prompt("Input USD value");
    var UAHvalue = USDvalue * 28.40;
    window.alert("For " + USDvalue + " USD You will get " + UAHvalue + " UAH");
}
function ConvertationEURtoUAH ()
{
    var EURvalue=window.prompt("Input EUR value");
    var UAHvalue = EURvalue * 33.84;
    window.alert("For " + EURvalue + " EUR You will get " + UAHvalue + " UAH");
}
function ConvertationUAHtoUSD ()
{
    var UAHvalue=window.prompt("Input UAH value");
    var USDvalue = UAHvalue * 0.035;
    window.alert("For " + UAHvalue + " UAH You will get " + USDvalue + " USD");
}
function ConvertationUAHtoEUR ()
{
    var UAHvalue=window.prompt("Input UAH value");
    var EURvalue = UAHvalue * 0.030;
    window.alert("For " + UAHvalue + " UAH You will get " + EURvalue + " EUR");
}
function ConvertationUSDtoEUR ()
{
    var USDvalue=window.prompt("Input USD value");
    var EURvalue = 0.8392 * USDvalue;
    window.alert("For " + USDvalue + " USD You will get " + EURvalue + " EUR");
}
