export function ParseTranscation(amount:string[],type:string[])
{
    let spent=0;
    let earned=0;
    for(let i=0;i<amount.length;i++)
    {
        const amountValue=parseFloat(
            amount[i].replace(/[^0-9.-]+/g, '')
        );

        if(amountValue<0)
        {
            spent +=Math.abs(amountValue);
        
        }
        else
        {
            earned +=Math.abs(amountValue);
        }
    }
    return { spent,
         earned,
        total:earned-spent 
    };
}