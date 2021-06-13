import {LOCATIONS, REGION_NAMES, REGIONS} from "./locations";
import {LocationCard} from "./LocationCard";
import {useState} from "react";
import DatePicker from 'react-date-picker';
import sr from "seedrandom"
import {RegionButton} from "./RegionButton";

function App() {
    const [date, setDate] = useState(new Date());
    const nextRng = sr(date.toDateString());
    const [regions, setRegions] = useState(REGIONS);

    const onDateChange = (date) => {
        if (typeof date === 'undefined' || date === null) {
            date = new Date();
        }

        setDate(date);
    };

    const onRegionChange = (event) => {
        const targetIndex = event.target.value;

        if (regionSelected(targetIndex)) {
            setRegions(REGIONS);
            return;
        }

        setRegions([REGIONS[targetIndex]]);
    };

    const regionSelected = (currentRegion) => {
        // eslint-disable-next-line eqeqeq
        return (regions.length === 1 && regions[0] == currentRegion);
    };

    const calculateLocation = (region) => {
        const rng = parseInt((''+nextRng()).split('.')[1], 10);
        return LOCATIONS[region][rng % LOCATIONS[region].length];
    };

    return (
        <div>
            <div className={"flex justify-center bg-blue-400 py-16"}>
                <div>
                    <p className={"text-center text-white text-2xl mb-2"}>{date.toDateString()}</p>
                    <div className={"flex justify-center"}>
                        <DatePicker value={date} onChange={onDateChange} />
                    </div>
                    <div className={"mt-8 flex flex-wrap"}>
                        {REGIONS.map(r => (
                            <div className={"flex-grow md:flex-grow-0 m-2 md:mx-4"}>
                                <RegionButton
                                    key={r}
                                    value={r}
                                    onClick={onRegionChange}
                                    selected={regionSelected(r)}
                                    >{REGION_NAMES[r]}</RegionButton>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={"flex flex-wrap content-evenly justify-center my-8"}>
                {regions.map(r => (
                  <div key={r} className={"m-3 flex-grow md:flex-grow-0"}>
                    <LocationCard region={REGION_NAMES[r]} location={calculateLocation(r)} />
                  </div>
                ))}
            </div>
        </div>
    );
}

export default App;
