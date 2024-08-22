document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('recipe-ingredients').value.split(',');
    const instructions = document.getElementById('recipe-instructions').value;

    // Create recipe object
    const recipe = {
        name,
        ingredients,
        instructions
    };

    // Add recipe to the list
    addRecipeToList(recipe);

    // Clear form
    document.getElementById('recipe-form').reset();
});

function addRecipeToList(recipe) {
    const recipeList = document.getElementById('recipes-list');

    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';

    recipeCard.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Add delete functionality
    recipeCard.querySelector('.delete-btn').addEventListener('click', function() {
        recipeList.removeChild(recipeCard);
    });

    recipeList.appendChild(recipeCard);
}
