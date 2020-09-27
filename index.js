let livre = [{
    "titre":"Learning ECMAScript 6",
    "prix": 27.42,
    "auteur": "Narayan Prusty",},
{
    "titre":"Learn ECMAScript",
    "prix": 18.99,
    "auteur": "Narayan Prusty",
},
{
    "titre":"ECMAScript Cookbook",
    "prix": 19.99,
    "auteur": "Ross Harrison",},];

console.log(livre);

function afficheRecommandations(){
    return Math.floor(Math.random() * (3) ) + 1;
}
