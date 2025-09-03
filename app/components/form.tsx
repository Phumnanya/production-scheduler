"use client";
import { useStore } from "../store";

export default function Form() {
    const resources = useStore((state) => state.resources);

    return(
        <>
        <p className="text-red-700">I am ready to take charge of my future!!</p>
        <div className="p-10 max-w-3/5 h-fit shadow-2xl bg-amber-200 mx-auto">
        <form>
            <label htmlFor="resource">Resource</label><br />
            <select id="resource" name="resource" className="w-full bg-white
            border-black border-solid p-3">
                {resources.map((resource) => (
                <option value={resource.name} key={resource.id}>{resource.name}</option>
                ))}
            </select>
            <br /><br />
            <label htmlFor="quantity">Quantity</label><br />
            <input type="number" className="w-full bg-white
            border-black border-solid p-3" />
            <br /><br />
            <label htmlFor="stime">Start Time</label><br />
            <input type="time" className="w-full bg-white
            border-black border-solid p-3" />
            <br /><br />
            <label htmlFor="etime">End Time</label><br />
            <input type="time" className="w-full bg-white
            border-black border-solid p-3" />
            <br /><br />
            <input type="button" className="w-fit bg-lime-500 m-auto p-3 text-white 
            cursor-pointer" value="Order" />
        </form>
        </div>
        </>
    );
}