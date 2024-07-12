import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';

const memory = localStorage.getItem('recipes');
const InitialState = memory ?
    JSON.parse(memory) :
    {
        orderList: [],
        objects: {},
    }

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_RECIPES': {
            const recipes = action.recipe || [];
            const newState = {
                orderList: recipes.map((recipe) => recipe.id),
                objects: recipes.reduce((obj, recipe) => {
                    obj[recipe.id] = recipe;
                    return obj;
                }, {})
            }
            localStorage.setItem('recipes', JSON.stringify(newState));
            return newState;
        }
        case 'CREATE_RECIPE': {
            const id = generateId(1, 100000);
            const newState = {
                orderList: [...state.orderList, id],
                objects: {
                    ...state.objects,
                    [id]: {
                        ...action.goal,
                        id
                    }
                }
            }
            localStorage.setItem('recipes', JSON.stringify(newState));
            return newState;
        }
        case 'UPDATE_RECIPE': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            }
            const newState = { ...state };
            localStorage.setItem('recipes', JSON.stringify(newState));
            return newState;
        }
        case 'DELETE_RECIPE': {
            const id = action.goal.id;
            const newOrder = state.orderList.filter((goalId) => goalId !== id);
            delete state.objects[id];
            const newState = {
                orderList: newOrder,
                objects: { ...state.objects }
            }
            localStorage.setItem('recipes', JSON.stringify(newState));
            return newState;
        }
        default:
            throw new Error('Action not found');
    }
}

function generateId(min, max) {
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers[0];
}

export const Context = createContext(null);


function Memory({ children }) {

    const [estate, dispatch] = useReducer(reducer, InitialState)


    return (
        <Context.Provider value={[estate, dispatch]}>
            <div>
                {children}
            </div>
        </Context.Provider>
    );
}

Memory.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Memory;