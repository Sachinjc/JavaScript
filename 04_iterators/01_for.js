// for loop

for( let  i=1;i<=5;i++){
     console.log(i);
}

// console.log(i) // it will gave error because we are trying to access the i outside the for loop and its scope is only inside the for loop 

for( let i=1;i<15;i++){
     if(i==5){
         console.log(" this is my birthday date ");
     }
}

for( let  i=1;i<10;i++){
     let row=""
    for( let j=1;j<10;j++){
        row += (i+""+j+" ");
    }
    console.log(row);
}

// print from 1 to 100

for( let i=0;i<10;i++){
    let row="";
    for( let  j=1;j<=10;j++){
row +=(10*i+j +" ");
    }
    console.log(row);
}

// print tables form 1 to 10
for(let i=1;i<=10;i++){
    for( let  j=1;j<=10;j++){
        console.log(`${i} * ${j}  = ${i*j}`)
    }
    console.log("\n")
}

let arr=[1,2,3,4,5]
let row =""
for( let i=0;i<arr.length;i++){
   row+=(arr[i]+" ")
}
console.log(row)


// break and continue
for( let i=0;i<10;i++){
    if(i==4){
         break;
    }
    console.log(i);
}

console.log("\n")

for( let i=0;i<10;i++){
    if(i==4){
        continue
    }
    console.log(i);
}