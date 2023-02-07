function EstUnPalindrome(mot)
{   
    let longueur = mot.length;
    for(i=0; i< (longueur/2); i++)
    {
        if(mot[i] != mot[longueur-(i+1)])
        {
            return false;
        }
    }
    return true;
}

function FizzBuzzNombre()
{
    for(i=1; i<101; i++)
    {
        if(i%3 == 0 && i%5 ==0)
        {
            console.log("FizzBuzz");
        } 
        else if(i%3 == 0)
        {
            console.log("Fizz");
        }
        else if(i%5 == 0)
        {
            console.log("Buzz");
        }
        else 
        {
            console.log(i);
        }
    }
}

function NombreDeFibonacci(nombre)
{

}

function TierListeDecroissant(uneListe)
{

}

function JoursEntreDeuxDates(a, b)
{
    
}