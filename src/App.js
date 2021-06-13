import {LOCATIONS, REGION_NAMES, REGIONS} from "./locations";
import {LocationCard} from "./LocationCard";
import {useState} from "react";
import DatePicker from 'react-date-picker';
import sr from "seedrandom"

function App() {
    const [date, setDate] = useState(new Date());
    const nextRng = sr(date.toDateString());
    const rng = parseInt((''+nextRng()).split('.')[1], 10);
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
                    <div className={"mt-8"}>
                        {REGIONS.map(r => <button key={r} value={r} onClick={onRegionChange} className={(regionSelected(r) ? "bg-gray-700 text-white" : "hover:bg-gray-50") + " py-1 px-4 mx-4 border bg-gray-300 rounded-md outline-none focus:outline-none"}>{REGION_NAMES[r]}</button>)}
                    </div>
                </div>
            </div>
            <div className={"flex flex-wrap content-evenly justify-center my-8"}>
                {regions.map(r => (
                  <div key={r} className={"m-3"}>
                    <LocationCard region={REGION_NAMES[r]} location={calculateLocation(r)} />
                  </div>
                ))}
            </div>
        </div>
    );
}

export default App;
