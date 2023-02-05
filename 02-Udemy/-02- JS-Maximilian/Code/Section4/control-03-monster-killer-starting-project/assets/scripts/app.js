const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
let MONSTER_ATTACK_VALUE = 14;


let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentplayererHealth = chosenMaxLife;

function attackMonster(mode){
  let maxDamage;
  if (mode ==='ATTACK'){
    maxDamage = ATTACK_VALUE;

  }
  else if (mode==='STRONG_ATTACK'){
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -=damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentplayererHealth -=playerDamage;
  if (currentMonsterHealth<=0 && currentplayererHealth >0)
  alert('You Won');
  else if (currentplayererHealth<=0 && currentMonsterHealth >0)
  alert('You lost');
  else if (currentplayererHealth <=0 && currentMonsterHealth<=0)
    alert ('You ave  draw');
}

adjustHealthBars(chosenMaxLife);
function attackMonster(){
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -=damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentplayererHealth -=playerDamage;
  if (currentMonsterHealth<=0 && currentplayererHealth >0)
  alert('You Won');
  else if (currentplayererHealth<=0 && currentMonsterHealth >0)
  alert('You lost');
  else if (currentplayererHealth <=0 && currentMonsterHealth<=0)
    alert ('You ave  draw');
  
}
function attackHandler(){
  attackMonster('ATTACK');
}
function strongAttackHandler(){
  attackMonster('STRONG_ATTACK');
}
function strongAttackHandler(){
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -=damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentplayererHealth -=playerDamage;
  if (currentMonsterHealth<=0 && currentplayererHealth >0)
  alert('You Won');
  else if (currentplayererHealth<=0 && currentMonsterHealth >0)
  alert('You lost');
  else if (currentplayererHealth <=0 && currentMonsterHealth<=0)
    alert ('You ave  draw');
  

}
attackBtn.addEventListener('click' ,attackMonster);
strongAttackBtn.addEventListener('click' ,strongAttackHandler);