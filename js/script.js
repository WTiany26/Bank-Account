
//Business Logic
var account,names,amounts;

//Object Definition
function Bank(name,amount){
  this.name=name;
  this.amount=amount;
}

Bank.prototype.Deposit= function (amount) {
   return this.amount+=amount;
};

Bank.prototype.Withdraw= function (amount) {
   return this.amount-=amount;
};

//

function initAccount(name,amount){
  console.log(database);
 account=new Bank(name,amount);
 names=name;
 return "Account " + name + " balance is Ksh " + amount;
 var a={
   names:"collins",
   amounts:1000
 }
 database.ref().set(a);
}
function deposit(amount){
  amounts=account.Deposit(amount);
  return  "Ksh " +account.Deposit(amount) ;
  setChild(names,amounts);
}
function withdraw(amount){
    amounts=account.Deposit(amount);
    return "Ksh " +account.Withdraw(amount) ;
    setChild(names,amounts);
}

function clear(){
  $(".form1 input").val('');
}

function  disable(){
  $(".form1 input").prop('disabled',true);
}
//Firebase

function setChild(name,amounts){
var persons={
}
  persons[name]=names;
  persons[amount]=amounts;
  database.ref().child(names).updates(persons);
}

//UI logic
$(document).ready(function(){
 $("#initial").change(function() {
   var initial=parseInt($("#initial").val());
   var name=$("#name").val();
    if(($("#initial").val()!='') &&  (name!='')){
      var amount= initAccount(name,initial);
      $("#balance").text(amount);
      clear();
      disable();
    }
    else{
      alert("Fill all info");
    }
 });
 $("#deposit").change(function() {
  $("#balance").text('');
    var amount=deposit(parseInt($("#deposit").val()));
    $("#deposit").val('');
    $("#balance").text(amount);
});
$("#withdraw").change(function() {
  $("#balance").text('');
   var amount=withdraw(parseInt($("#withdraw").val()));
   $("#withdraw").val('');
   $("#balance").text(amount);
});
});
