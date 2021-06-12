export const Region = ({name, locations, rng}) => {
    return (
        <article className={"shadow-sm w-52"}>
            <header className={"bg-gray-200 py-4"}>
                <h2 className={"text-center"}>{name}</h2>
            </header>
            <p className={"py-14 text-center"}>{locations[rng % locations.length]}</p>
        </article>
    )
}