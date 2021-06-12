export const REGION_NORTH = 0;
export const REGION_EAST = 1;
export const REGION_SOUTH = 2;
export const REGION_WEST = 3;
export const REGION_CENTRAL = 4;

export const REGION_NAMES = {
    [REGION_NORTH]: "North",
    [REGION_EAST]: "East",
    [REGION_SOUTH]: "South",
    [REGION_WEST]: "West",
    [REGION_CENTRAL]: "Central"
};

export const REGIONS = [];
REGIONS[REGION_NORTH] = REGION_NORTH;
REGIONS[REGION_EAST] = REGION_EAST;
REGIONS[REGION_SOUTH] = REGION_SOUTH;
REGIONS[REGION_WEST] = REGION_WEST;
REGIONS[REGION_CENTRAL] = REGION_CENTRAL;

export const LOCATIONS = {
    [REGION_NORTH]: [
        "Jimmy Johns",
        "Houlihan's",
        "Five Guys",
        "Cafe Cusco",
        "CreAsian",
    ],
    [REGION_EAST]: [
        "La Paloma",
        "Jimmy Johns",
        "Catrina's",
        "Food Truck Park on St. Louis",
        "The Pitch Pizza & Pub",
    ],
    [REGION_SOUTH]: [
        "Grotto",
        "Everyday Thai",
        "Sakura",
        "Jimmy Johns",
        "Karai Ramen + Handroll",
        "Bawi Korean BBQ",
        "Houlihan's",
        "Pizza Ranch",
        "Baffalo Wildwings",
        "Five Guys",
    ],
    [REGION_WEST]: [
        "Tortilla Perches",
        "Golden Korean",
        "Triple Eight's",
        "Red’s Giant Hamburg",
    ],
    [REGION_CENTRAL]: [
        "The Order",
        "Izumi Hitake",
        "Jimmy Johns",
        "Civil Kitchen",
        "Zayka",
        "Bairs",
        "Big Slice",
        "Best of Luck",
    ],
};