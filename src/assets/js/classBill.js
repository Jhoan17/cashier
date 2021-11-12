const body = document.querySelector('body'),
        divMoney = document.querySelector('.divMoney'),
        moneySmalls = document.querySelector('.moneySmalls'),
        btnWithdrawals = document.querySelector('#btnWithdrawals');

class Bill{
    constructor(value,amount){
        this.value = value;
        this.amount = amount;
    }

    withdrawals(money,sumCashier){
        let seedMoney = true;
        let notAmount = false;
        
        for(let bill of bills){
            console.log(money,sumCashier);
            if(money <= sumCashier){
                if(money > 0 ){
                    let div = Math.floor(money/bill.value)
                    if(div>bill.amount){
                        papers = bill.amount * bill.value;
                    }else{
                        papers = div * bill.value;
                    }

                    if(papers!=0){
                        moneyWithdrawn.push(new Bill(bill.value, papers/bill.value));
                        
                        bill.amount= bill.amount-papers/bill.value;
                        
                            for(let p = 0; p<papers/bill.value; p++){
                            
                            if(seedMoney == true){
                                moneySmalls.innerHTML = '$ '+money;
                                seedMoney = false;
                            }

                            const imgBills = document.createElement('img');
                            imgBills.src = `assets/img/${bill.value}.jpg`;
                            imgBills.classList.add('bills');
                            imgBills.innerHTML = imgBills;
                            divMoney.append(imgBills);
                            

                        }
                    }
                    
                    money = money - papers;
                    
                }
            }else{
                notAmount = true;
            }
            
        }
        if(notAmount==true){
            moneySmalls.innerHTML = '$ '+money;
            divMoney.append(`No hay monto suficiente para retirar la cantidad solicitada, por favor retire un valor menor de $ ${sumCashier}`);
        }else{
            return bills;
        }
        // console.log(sumCashier);
        
    }
    sumCashier(){
        let sumCashier = 0;
        for(let bill of bills){
            
            sumCashier += bill.value * bill.amount;
        }
        return sumCashier;
    }
}


let papers;
let moneyWithdrawn = [];
let bills = [];
bills.push(new Bill(50000,50));
bills.push(new Bill(20000,20));
bills.push(new Bill(10000,10));
bills.push(new Bill(5000,2));

btnWithdrawals.addEventListener('click', ()=>{

    const moneyAmount = document.getElementById('moneyAmount');
    divMoney.innerHTML = '';
    
    let cashier = new Bill();
    // console.log(cashier.sumCashier());
    console.log(cashier.withdrawals(moneyAmount.value,cashier.sumCashier()));
    moneyAmount.value = '';
    
});

export{
    Bill
}
