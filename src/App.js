import {LOCATIONS, REGION_NAMES, REGIONS} from "./locations";
import {LocationCard} from "./LocationCard";
import {useEffect, useState} from "react";
import sr from "seedrandom"
import {RegionButton} from "./RegionButton";
import {useHistory, useLocation} from "react-router";
import {DateNavigation} from "./DateNavigation";
import {formatISO, isValid, parseISO, startOfDay} from "date-fns";
import {toDate} from "date-fns-tz";

const newDate = () => {
    return toDate(startOfDay(new Date()), {timeZone: 'America/Chicago'});
}

function App() {
    const [date, setDate] = useState(newDate());
    const [shownRegions, setShownRegions] = useState(REGIONS);
    const history = useHistory();
    const location = useLocation();
    const [regionCalculations, setRegionCalculations] = useState([]);

    useEffect(() => {
        const nextRng = sr(date.getTime() / 1000);
        const rngCalculations = REGIONS.map((regionIndex) => {
            const rng = parseInt((''+nextRng()).split('.')[1], 10);
            return LOCATIONS[regionIndex][rng % LOCATIONS[regionIndex].length];
        });

        setRegionCalculations(rngCalculations);
    }, [date, setRegionCalculations]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const passedDate = parseDate(queryParams.get("date"))
        setDate(passedDate);
    }, [location.search, setDate]);

    const onDateChange = (date) => {
        if (!isValid(date)) {
            date = newDate();
        }

        history.replace("?date=" + encodeURIComponent(formatISO(date, {
            representation: 'date'
        })))
    };

    const onRegionChange = (event) => {
        const targetIndex = event.target.value;

        if (regionSelected(targetIndex)) {
            setShownRegions(REGIONS);
            return;
        }

        setShownRegions([REGIONS[targetIndex]]);
    };

    const parseDate = (date) => {
        let parsedDate = parseISO(date);
        if (isValid(parsedDate)) {
            return parsedDate;
        }
        return newDate();
    }

    const regionSelected = (currentRegion) => {
        // eslint-disable-next-line eqeqeq
        return (shownRegions.length === 1 && shownRegions[0] == currentRegion);
    };

    return (
        <div style={{
            position: 'relative'
        }}>
            <span style={{
                position: 'absolute',
                right: '10px',
                top: '5px'
            }} className={"text-sm text-white"}>Your Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
            <div className={"flex justify-center bg-blue-400 py-16"}>
                <div>
                    <p className={"text-center text-white text-2xl mb-2"}>{date.toDateString()}</p>
                    <div className={"flex justify-center"}>
                        <DateNavigation today={newDate()} selectedDate={date} onChange={onDateChange} />
                    </div>
                    <div className={"mt-8 flex flex-wrap"}>
                        {REGIONS.map(r => (
                            <div key={r} className={"flex-grow md:flex-grow-0 m-2 md:mx-4"}>
                                <RegionButton
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
                {regionCalculations.length > 0 && shownRegions.map(r => (
                  <div key={r} className={"m-3 flex-grow md:flex-grow-0"}>
                    <LocationCard region={REGION_NAMES[r]} location={regionCalculations[r]} />
                  </div>
                ))}
            </div>
        </div>
    );
}

export default App;
