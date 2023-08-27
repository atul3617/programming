//count the number

let num=45632
let count=0;
while(num!=0){
    count++
    num=parseInt(num/10)
}
console.log(count);

//sum of the number

let num1=45632
let sum=0;
while(num1!=0){
    let rem=num1%10
    sum=sum+rem
    num1=parseInt(num1/10)
}
console.log(sum);

//pallendrome

let no=12321
let copy=no
let rev=0
while(no!=0){
    let rem=no%10
      rev=rem+rev*10
      no=parseInt(no/10)
}
console.log(rev);

//odd even

for (let i = 1; i <=20; i++){
   if(i%2==1)
   console.log(`these are odd-->${i} `);
   else
   console.log(`these are even-->${i} `);
}

//fibonaci

let f=0
let f1=1
let num2=10
for (let i= 1; i <=num2-2; i++) 
{
    let f3=f+f1
      f=f1;
      f1=f3;
    console.log(f3);
}   

//reverse a number

let a=2345;
let reve=0;
while(a!=0){
   let rem=a%10
   reve=reve*10+rem
   a=parseInt(a/10)

}
console.log(`reverse of the given no ${reve}`);

//factorial

let a1=prompt("enter the number")
let fact=1
for (let i = a1; i >=1 ; i--) {
    fact=fact*i
}
console.log(`the factorial of no is ${fact}`);

//swaping of no with third variable

let nu1=32
let nu2=12
let nu3=0;
nu3=nu1;
nu1=nu2
nu2=nu3;
console.log(nu1);
console.log(nu2);
console.log(nu3);

//without using third variable 
let numb1=20
let numb2=30
numb1=numb2+numb1;
numb2=numb1-numb2;
numb1=numb1-numb2;
console.log(`swaped the number ${numb1}`);
console.log(`swaped the number ${numb2}`);

//happy number
function add(){
let hno=142;
while(hno>9){
hno=happy(hno)
}
if(hno==1||hno==7)
console.log("happy number");
else
console.log("not a happy number");

}
add();

function happy(hno) {
let sum=0;
while(hno!=0){
    let rem=hno%10;
    sum=sum+rem*rem;
   hno=parseInt(hno/10)
} 
return sum;
}

