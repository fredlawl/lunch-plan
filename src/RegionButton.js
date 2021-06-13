export const RegionButton = (props) => {
    return (
        <button {...props}
            className={(props.selected ? "bg-gray-700 text-white" : "hover:bg-gray-50") + " py-1 px-4 border bg-gray-300 rounded-md outline-none focus:outline-none w-full block"}>
            {props.children}
        </button>
    )
}