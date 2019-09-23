console.log("utils is running");

export const proton=(x)=> x*3;
export const agent =(a,b)=> a+b;

export const isAdult=(x)=> x>18 ? true : false;
export const canDrink=(y)=> y>21 ? "person can drink" : "not eligible for drink";
const isSenior =(c)=> c>=65 ? "person is senios" : "not senior";
export default isSenior;
export default isAdult;