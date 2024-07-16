import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

function Details() {
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState("");
    const [currentStep, setCurrentStep] = useState("");
    const [isEditing, setIsEditing] = useState({ type: null, index: null });

    const handleIngredientChange = (event) => {
        setCurrentIngredient(event.target.value);
    };

    const handleStepChange = (event) => {
        setCurrentStep(event.target.value);
    };

    const handleIngredientKeyDown = (event) => {
        if (event.key === 'Enter' && currentIngredient.trim() !== "") {
            setIngredients([...ingredients, currentIngredient]);
            setCurrentIngredient("");
            event.preventDefault();
        }
    };

    const handleStepKeyDown = (event) => {
        if (event.key === 'Enter' && currentStep.trim() !== "") {
            setSteps([...steps, currentStep]);
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

    const handleUpdateIngredient = (event) => {
        if (event.key === 'Enter' && currentIngredient.trim() !== "") {
            const newIngredients = [...ingredients];
            newIngredients[isEditing.index] = currentIngredient;
            setIngredients(newIngredients);
            setIsEditing({ type: null, index: null });
            setCurrentIngredient("");
            event.preventDefault();
        }
    };

    const handleUpdateStep = (event) => {
        if (event.key === 'Enter' && currentStep.trim() !== "") {
            const newSteps = [...steps];
            newSteps[isEditing.index] = currentStep;
            setSteps(newSteps);
            setIsEditing({ type: null, index: null });
            setCurrentStep("");
            event.preventDefault();
        }
    };

    const handleDeleteIngredient = (index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    const handleDeleteStep = (index) => {
        const newSteps = steps.filter((_, i) => i !== index);
        setSteps(newSteps);
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
                                value={ingredient}
                                readOnly
                                shadow
                                className="flex-grow"
                            />
                            <div className="relative ml-2">
                                <Button type="button" className="ml-2" onClick={() => document.getElementById(`menu-ingredient-${index}`).classList.toggle('hidden')}>...</Button>
                                <div id={`menu-ingredient-${index}`} className="absolute z-20 gap-2 left-10 mt-2 w-32 bg-white border rounded-lg shadow-lg hidden">
                                    <div className="flex flex-col gap-2 p-2">
                                        <Button type="button" className="w-full text-left px-4 py-2" onClick={() => handleEditIngredient(index)}>Edit</Button>
                                        <Button type="button" className="w-full text-left px-4 py-2" onClick={() => handleDeleteIngredient(index)}>Delete</Button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                    {isEditing.type === "ingredient" ? (
                        <TextInput
                            name="currentIngredient"
                            type="text"
                            placeholder="Press Enter to update ingredient"
                            value={currentIngredient}
                            onChange={handleIngredientChange}
                            onKeyDown={handleUpdateIngredient}
                            shadow
                        />
                    ) : (
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
                                value={step}
                                readOnly
                                shadow
                                className="flex-grow"
                            />
                            <div className="relative ml-2">
                                <Button type="button" className="ml-2" onClick={() => document.getElementById(`menu-step-${index}`).classList.toggle('hidden')}>...</Button>
                                <div id={`menu-step-${index}`} className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg hidden">
                                    <Button type="button" className="w-full text-left px-4 py-2" onClick={() => handleEditStep(index)}>Edit</Button>
                                    <Button type="button" className="w-full text-left px-4 py-2" onClick={() => handleDeleteStep(index)}>Delete</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {isEditing.type === "step" ? (
                        <Textarea
                            name="currentStep"
                            placeholder="Press Enter to update step"
                            value={currentStep}
                            onChange={handleStepChange}
                            onKeyDown={handleUpdateStep}
                            shadow
                        />
                    ) : (
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
