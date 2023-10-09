function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
/*· Every second lost game, his helmet is broken.

· Every third lost game, his sword is broken.

· When both his sword and helmet are broken in the same lost fight, his shield also breaks.

· Every second time, when his shield brakes, his armor also needs to be repaired.
*/

let brokenHelmet = Math.floor(lostFights / 2);
let brokenSword = Math.floor(lostFights / 3);
let brokenShield = 0;
let brokenArmor = 0;

for(let i = 1; i <= lostFights; i++){
    if(i % 2 == 0 && i % 3 == 0){
        brokenShield++;
        if(brokenShield % 2 == 0){
            brokenArmor++;
        }
    }
}

let totalSum = (brokenHelmet * helmetPrice) + (brokenSword * swordPrice) + 
                (brokenShield * shieldPrice) + (brokenArmor * armorPrice);

console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);

}

gladiatorExpenses(7,

    2,
    
    3,
    
    4,
    
    5);