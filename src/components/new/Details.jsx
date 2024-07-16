import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function Details() {
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState("");
    const [currentStep, setCurrentStep] = useState("");
    const [isEditing, setIsEditing] = useState({ type: null, index: null });
    const [ingredientIsFocused, setingredientIsFocused] = useState(false);
    const [stepIsFocused, setstepIsFocused] = useState(false);

    const handleIngredientChange = (event) => {
        setCurrentIngredient(event.target.value);
    };

    const handleStepChange = (event) => {
        setCurrentStep(event.target.value);
    };

    const handleIngredientKeyDown = (event) => {
        if (event.key === 'Enter' && currentIngredient.trim() !== "") {
            if (isEditing.type === "ingredient" && isEditing.index !== null) {
                const newIngredients = [...ingredients];
                newIngredients[isEditing.index] = currentIngredient;
                setIngredients(newIngredients);
                setIsEditing({ type: null, index: null });
            } else {
                setIngredients([...ingredients, currentIngredient]);
            }
            setCurrentIngredient("");
            event.preventDefault();
        }
    };

    const handleStepKeyDown = (event) => {
        if (event.key === 'Enter' && currentStep.trim() !== "") {
            if (isEditing.type === "step" && isEditing.index !== null) {
                const newSteps = [...steps];
                newSteps[isEditing.index] = currentStep;
                setSteps(newSteps);
                setIsEditing({ type: null, index: null });
            } else {
                setSteps([...steps, currentStep]);
            }
            setCurrentStep("");
            event.preventDefault();
        }
    };

    const handleEditIngredient = (index) => {
        setIsEditing({ type: "ingredient", index });
        setCurrentIngredient(ingredients[index]);
    };

    const handleEditStep = (index) => {
        setIsEditing({ type: "step", index });
        setCurrentStep(steps[index]);
    };

    const handleDeleteIngredient = (index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    const handleDeleteStep = (index) => {
        const newSteps = steps.filter((_, i) => i !== index);
        setSteps(newSteps);
    };

    const handleFocus = (event) => {
        if (event.target.id.startsWith('menu-ingredient-')) {
            setingredientIsFocused(true);
        }else if (event.target.id.startsWith('menu-step-')) {
            setstepIsFocused(true);
        }
    };

    const handleBlur = (event) => {
        if (event.target.id.startsWith('menu-ingredient-')) {
            setingredientIsFocused(false);
        }else if (event.target.id.startsWith('menu-step-')) {
            setstepIsFocused(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Recipe Name: ", event.target.recipeName.value);
        console.log("Ingredients: ", ingredients);
        console.log("Steps: ", steps);
    };

    return (
        <div className="w-full h-full flex flex-col gap-8 pt-12 justify-center items-center">
            <h1 className="text-4xl font-bold font-adlam">CREATE A RECIPE</h1>
            <form className="w-full h-full flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="recipeName" value="Recipe Name" />
                    </div>
                    <TextInput id="recipeName" name="recipeName" type="text" placeholder="Write here..." required shadow />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="ingredients" value="Ingredients" />
                    </div>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="flex mb-2 items-center">
                            <TextInput
                                type="text"
                                value={isEditing.type === "ingredient" && isEditing.index === index ? currentIngredient : ingredient}
                                readOnly={!(isEditing.type === "ingredient" && isEditing.index === index)}
                                onClick={() => handleEditIngredient(index)}
                                onChange={handleIngredientChange}
                                onKeyDown={handleIngredientKeyDown}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                shadow
                                className="flex-grow"
                            />
                            <div className="relative ml-2">
                                <Button type="button" className="ml-2" onClick={() => document.getElementById(`menu-ingredient-${index}`).classList.toggle('hidden')}>...</Button>
                                <DropdownMenu id={`menu-ingredient-${index}`} onEdit={handleEditIngredient} onDelete={handleDeleteIngredient} index={index} />
                            </div>
                        </div>
                    ))}
                    {isEditing.type !== "ingredient" && !ingredientIsFocused && (
                        <TextInput
                            name="currentIngredient"
                            type="text"
                            placeholder="Press Enter to add ingredient"
                            value={currentIngredient}
                            onChange={handleIngredientChange}
                            onKeyDown={handleIngredientKeyDown}
                            shadow
                        />
                    )}
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="steps" value="Steps" />
                    </div>
                    {steps.map((step, index) => (
                        <div key={index} className="flex mb-2 items-center">
                            <Textarea
                                value={isEditing.type === "step" && isEditing.index === index ? currentStep : step}
                                readOnly={!(isEditing.type === "step" && isEditing.index === index)}
                                onClick={() => handleEditStep(index)}
                                onChange={handleStepChange}
                                onKeyDown={handleStepKeyDown}
                                shadow
                                className="flex-grow"
                            />
                            <div className="relative ml-2">
                                <Button type="button" className="ml-2" onClick={() => document.getElementById(`menu-step-${index}`).classList.toggle('hidden')}>...</Button>
                                <DropdownMenu id={`menu-step-${index}`} onEdit={handleEditStep} onDelete={handleDeleteStep} index={index} />
                            </div>
                        </div>
                    ))}
                    {isEditing.type !== "step" && !stepIsFocused && (
                        <Textarea
                            name="currentStep"
                            placeholder="Press Enter to add step"
                            value={currentStep}
                            onChange={handleStepChange}
                            onKeyDown={handleStepKeyDown}
                            shadow
                        />
                    )}
                </div>

                <Button type="submit">Create Recipe</Button>
            </form>
        </div>
    );
}

export default Details;
