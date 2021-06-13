export const LocationCard = ({region, location}) => {
    const generateGoogleMapsUrl = (address) => {
        return "https://www.google.com/maps/place/" + encodeURIComponent(address);
    };

    return (
        <article className={"shadow-sm md:w-52 h-full w-full"}>
            <header className={"bg-gray-200 py-4"}>
                <h2 className={"text-center"}>{region}</h2>
            </header>
            <div className={"text-center py-12 px-2"}>
                <p className={"font-bold text-lg mb-2"}>{location.name}</p>
                <address>
                    <a href={generateGoogleMapsUrl(location.address)}
                       title={"Link to directions for " + location.name}
                       target={"_blank"} rel={"noreferrer"}
                       className={"underline"}>{location.address}</a>
                </address>
            </div>
        </article>
    )
}