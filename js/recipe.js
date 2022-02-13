document.querySelector('#recipeSearchButton').addEventListener('click', changeFood);

function changeFood() {
    console.log("HI");
    var elem = document.getElementById('dropdownRecipe');
    var chosenFood = elem.value;
    console.log(chosenFood);
    if(chosenFood === '0'){
        console.log("FAULTY NOTHING CHOSEN");
        document.getElementById('errorMessage').innerHTML = "*** Food must be chosen before we quack it up ***";
    }
    else{
        document.getElementById('errorMessage').innerHTML ="";

        switch(chosenFood){
            case "corn":
                var htmlTitle = "Corn with a Ducky Magic";
                var htmlData = 
                "1. Gather 100g of corn seeds from the farmer\'s garden\<br>" +
                "2. Boil them until they are soft\<br>" +
                "3. Place them on a Leaf plate\<br>" +
                "4. Add a pinch of salt to it\<br>" +
                "5. Add a pinch of pepper (Aunt OldDuck's magic ingredient!)\<br>" +
                "6. Enjoy your meal!\<br>"

                document.getElementById("container").innerHTML = htmlTitle;
                document.getElementById("containerText").innerHTML = htmlData;
                break;

                case "macedonia":
                    var htmlTitle = "Macedonia for Ducks";
                    var htmlData = 
                    "1. Go to a nearby park to steal 10 grapes\<br>" +
                    "2. Slice them neatly into 4 pieces each\<br>" +
                    "3. Decorate them onto a Leaf plate\<br>" +
                    "4. Add a pinch of pond weed\<br>" +
                    "5. Enjoy your delicious breakfast!\<br>"
    
                    document.getElementById("container").innerHTML = htmlTitle;
                    document.getElementById("containerText").innerHTML = htmlData;
                    break;

                case "fish":
                    var htmlTitle = "Duck exclusive Fish Soup";
                    var htmlData = 
                    "1. Hunt a small fresh salmon\<br>" +
                    "2. Add 15g of insects (of your choice!)\<br>" +
                    "3. Add a pinch of salt\<br>" +
                    "4. Enjoy the best lunch ever!\<br>"
    
                    document.getElementById("container").innerHTML = htmlTitle;
                    document.getElementById("containerText").innerHTML = htmlData;
                    break;
        }
    }
}
