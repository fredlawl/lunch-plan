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
        {
            name: "Jimmy Johns",
            address: "2645 N Kansas Expy, Springfield, MO 65803",
        },
        {
            name: "Houlihan's",
            address: "2431 N Glenstone Ave, Springfield, MO 65803",
        },
        {
            name: "Five Guys",
            address: "2711 N Kansas Expy, Springfield, MO 65803",
        },
        {
            name: "Cafe Cusco",
            address: "234 E Commercial St, Springfield, MO 65803",
        },
        {
            name: "CreAsian",
            address: "501 W Chestnut Expy building a, Springfield, MO 65802",
        },
    ],
    [REGION_EAST]: [
        {
            name: "La Paloma",
            address: "3014 E Sunshine St, Springfield, MO 65804",
        },
        {
            name: "Jimmy Johns",
            address: "3233 E Sunshine St #108, Springfield, MO 65804",
        },
        {
            name: "Catrina's",
            address: "2925 E Battlefield Rd #105, Springfield, MO 65804",
        },
        {
            name: "Food Truck Park on St. Louis",
            address: "1530 E St Louis St, Springfield, MO 65802",
        },
        {
            name: "The Pitch Pizza & Pub",
            address: "2924 E Sunshine St, Springfield, MO 65804",
        },
    ],
    [REGION_SOUTH]: [
        {
            name: "Grotto",
            address: "301 E Battlefield Rd, Springfield, MO 65807",
        },
        {
            name: "Everyday Thai",
            address: "220 W Battlefield Rd, Springfield, MO 65807",
        },
        {
            name: "Hong Yen",
            address: "2926 S Campbell Ave, Springfield, MO 65807",
        },
        {
            name: "Sakura",
            address: "3230 S National Ave, Springfield, MO 65807",
        },
        {
            name: "Jimmy Johns",
            address: "3536 S National Ave, Springfield, MO 65804",
        },
        {
            name: "Karai Ramen + Handroll",
            address: "640 W Republic Rd ste100, Springfield, MO 65807",
        },
        {
            name: "Bawi Korean BBQ",
            address: "4121 S National Ave, Springfield, MO 65810",
        },
        {
            name: "Houlihan's",
            address: "2110 E Republic Rd, Springfield, MO 65804",
        },
        {
            name: "Pizza Ranch",
            address: "2825 S Glenstone Ave, Springfield, MO 65804",
        },
        {
            name: "Baffalo Wildwings",
            address: "900 E Battlefield Rd, Springfield, MO 65807",
        },
        {
            name: "Five Guys",
            address: "101 Battlefield Mall, Springfield, MO 65804",
        },
        {
            name: "La Paloma",
            address: "1425 W Battlefield Rd, Springfield, MO 65807",
        },
    ],
    [REGION_WEST]: [
        {
            name: "Tortilla Perches",
            address: "1601 W Sunshine St, Springfield, MO 65807",
        },
        {
            name: "Golden Korean",
            address: "1406 W Sunshine St A, Springfield, MO 65807",
        },
        {
            name: "Triple Eight's",
            address: "1710 S Kansas Expy, Springfield, MO 65807",
        },
        {
            name: "Red’s Giant Hamburger",
            address: "2301 W Sunshine St, Springfield, MO 65807",
        },
        {
            name: "The Roost Bar & Grill",
            address: "2025 W Sunshine St #104, Springfield, MO 65807",
        }
    ],
    [REGION_CENTRAL]: [
        {
            name: "The Order",
            address: "305 E Walnut St, Springfield, MO 65806",
        },
        {
            name: "Izumi Hitake",
            address: "302 E Walnut St, Springfield, MO 65806",
        },
        {
            name: "Jimmy Johns",
            address: "322 E Walnut St, Springfield, MO 65806",
        },
        {
            name: "Civil Kitchen",
            address: "107 Park Central Square, Springfield, MO 65806",
        },
        {
            name: "Zayka",
            address: "313 S Jefferson Ave, Springfield, MO 65806",
        },
        {
            name: "Bair's Sports Grill",
            address: "631 S Kimbrough Ave, Springfield, MO 65806",
        },
        {
            name: "Big Slice",
            address: "4126 S Kansas Expy SUIT 112, Springfield, MO 65807",
        },
        {
            name: "Best of Luck",
            address: "313-B S Jefferson Ave, Springfield, MO 65806",
        },
    ],
};