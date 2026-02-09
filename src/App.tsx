import omlet from "../assets/images/image-omelette.jpeg";

function App() {
  return (
    <>
      <div className="bg-rose-50 flex items-center justify-center min-h-screen md:p-18">
        <div className="bg-white w-full max-w-md p-6 rounded-xl overflow-hidden">
          <img
            src={omlet}
            alt="omlet-image"
            className="w-full rounded-md mb-4"
          />
          <h1 className="font-youngserif text-2xl">Simple Omelette Recipe</h1>
          <p className="text-[10px] mt-2">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="bg-rose-50 mt-4 p-3 rounded-md">
            <p className="text-rose-900 font-bold text-[11px] mb-1">
              Preparation time
            </p>
            <ul className="list-disc list-inside text-[10px] marker:text-rose-900 marker:text-[10px]">
              <li className="mb-1">
                <span className="font-bold">Total: </span>Approximately 10
                minutes
              </li>
              <li className="mb-1">
                <span className="font-bold">Preparation: </span>5 minutes
              </li>
              <li className="mb-1">
                <span className="font-bold">Cooking: </span>5 minutes
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-[hsl(14,45%,36%)] mb-2">Ingredients</h3>
            <ul className="text-xs list-disc list-inside marker:text-rose-900 marker:text-[10px]">
              <li className="mb-1">2-3 large eggs</li>
              <li className="mb-1">Salt, to taste</li>
              <li className="mb-1">Pepper, to taste</li>
              <li className="mb-1">1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>

          <hr className="text-gray-200 mt-4" />

          <div className="mt-4">
            <h3 className="text-[hsl(14,45%,36%)] mb-1">Instructions</h3>
            <ol className="text-xs list-decimal marker:text-rose-900 marker:font-semibold marker:m-2">
              <li>
                <span className="font-bold">Beat the eggs: </span>
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </li>
              <li>
                <span className="font-bold">Heat the pan: </span>Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li>
                <span className="font-bold">Cook the omelette: </span>Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li>
                <span className="font-bold">Add fillings (optional): </span>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li>
                <span className="font-bold">Fold and serve: </span>As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li>
                <span className="font-bold">Enjoy: </span>Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </div>

          <hr className="text-gray-200 mt-4" />

          <div>
            <h2 className="text-[hsl(14,45%,36%)] my-3">Nutrition</h2>
            <p className="text-[10px]">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className="w-full border-collapse text-[10px] mt-2">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-2">Calories</td>
                  <td className="p-2">277kcal</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2">Carbs</td>
                  <td className="p-2">0g</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2">Protein</td>
                  <td className="p-2">20g</td>
                </tr>
                <tr>
                  <td className="p-2">Fat</td>
                  <td className="p-2">22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
