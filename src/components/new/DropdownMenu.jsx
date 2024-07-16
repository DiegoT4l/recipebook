import { Button } from "flowbite-react";

function DropdownMenu({ id, onDelete, index }) {

    return (
        <div id={id} className="absolute left-5 top-[-1rem] z-10 mt-2 w-32 glass-effect border rounded-lg shadow-lg hidden">
            <div className="flex flex-col gap-1 p-2">
                <Button type="button" className="w-full text-left px-2 py-1" onClick={() => onDelete(index)}>Delete</Button>
            </div>

        </div>
    );
}

export default DropdownMenu;