// Made by: NecroticPhantom

// For change log: "+" = addition, "-" = removal and "~" = change

/*
===CHANGE LOG===
	Version: 1.0.0 (Dragons.js)
@Necrotic_Phantom 
+ dragons.js info (dragons_info) element to 'mods' category
+ fire dragon (WIP)
+ fire dragon breath (WIP)
+ committed (WIP) */

/*
===Plans===
~ only climb/dive if went up/down X times (twice maybe?) in a row first
+ ideal flying height
+ more dragon types
+ dragon parts
+ dragon eggs (mybe and maybe with hatching)
+ baby dragons (1 pixel (if normal are 2 pixel))
+ homeostatis (look at humans (temp. increase if too low and decrease if too high))
+ dragon parts elements (for dragon breakinto and statehigh)
+ dragon walking mode (+ landing/taking off)
+ dragon head (2nd pixel) */



// TO-DO: THINGS ARE NOT THINGING!!! WHY!!!???



// info element
elements.dragons_info = {
    color: "#ff5f00",
    name: "dragons.js",
    category: "Mods",
    behavior: behaviors.SELFDELETE,
    maxSize: 1,
    tool: function() {},
    onSelect: function() {
        let mod_info = "The dragons.js mod adds different kinds of dragons to a new 'dragons' category.\n\nMod made by: Necrotic_Phantom."
        alert(mod_info)
    return
    },
};



// functions
random_integer_function = function(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
};

dragon_movement_function = function(pixel) {
    console.log("function");
    if (!isEmpty(pixel.x, pixel.y + 1)) {
        pixel.flying = 0;
        pixel.walking = 1;
        console.log("now walking");
    };
    if (pixel.flying == 1) {
        console.log("flying stuff");
        if (pixel.gliding == 0 && pixel.climbing == 0 && pixel.diving == 0) {
            pixel.gliding == 1;
            console.log("now gliding");
        };
        move_direction = random_integer_function(1, 9);
        if (pixel.gliding == 1) {
            console.log("gliding stuff");
            if (move_direction == 1 || move_direction == 2 || move_direction == 3) {
                console.log("flew left");
                tryMove(pixel, pixel.x - 1, pixel.y);
                pixel.gliding = 1;
                pixel.climbing = 0;
                pixel.diving = 0;
            }
            else if (move_direction == 4 || move_direction == 5 || move_direction == 6) {
                console.log("flew right");
                tryMove(pixel, pixel.x + 1, pixel.y);
                pixel.gliding = 1;
                pixel.climbing = 0;
                pixel.diving = 0;
            }
            else if (move_direction == 7) {
                console.log("now climbing");
                tryMove(pixel, pixel.x, pixel.y - 1);
                pixel.gliding = 0;
                pixel.climbing = 1;
                pixel.diving = 0;
            }
            else if (move_direction == 8) {
                console.log("now diving");
                tryMove(pixel, pixel.x, pixel.y + 1);
                pixel.gliding = 0;
                pixel.climbing = 0;
                pixel.diving = 1;
            };
        }
        else if (pixel.climbing == 1) {
            console.log("climbing stuff");
            if (move_direction == 1 || move_direction == 2) {
                console.log("flew left");
                tryMove(pixel, pixel.x - 1, pixel.y);
                pixel.gliding = 1;
                pixel.climbing = 0;
                pixel.diving = 0;
            }
            else if (move_direction == 3 || move_direction == 4) {
                console.log("flew right");
                tryMove(pixel, pixel.x + 1, pixel.y);
                pixel.gliding = 1;
                pixel.climbing = 0;
                pixel.diving = 0;
            }
            else if (move_direction == 5 || move_direction == 6 || move_direction == 7 || move_direction == 8) {
                console.log("still climbing");
                tryMove(pixel, pixel.x, pixel.y - 1);
            };
        }
        else if (pixel.diving == 1) {
            console.log("diving stuff");
            if (move_direction == 1 || move_direction == 2) {
                console.log("flew left");
                tryMove(pixel, pixel.x - 1, pixel.y);
                pixel.gliding = 1;
                pixel.climbing = 0;
                pixel.diving = 0;
            }
            else if (move_direction == 3 || move_direction == 4) {
                console.log("flew right");
                tryMove(pixel, pixel.x + 1, pixel.y);
                pixel.gliding = 1;
                pixel.climbing = 0;
                pixel.diving = 0;
            }
            else if (move_direction == 5 || move_direction == 6 || move_direction == 7 || move_direction == 8) {
                console.log("still diving");
                tryMove(pixel, pixel.x, pixel.y + 1);
            };
        };
    }
    else if (pixel.walking == 1) {
        console.log("walking stuff");
        move_direction = random_integer_function(1, 101);
        if (1 <= move_direction <= 5) {
            console.log("now flying");
            tryMove(pixel, pixel.x, pixel.y - 1);
            pixel.flying = 1;
            pixel.walking = 0;
        }
        else if (6 <= move_direction <= 66) {
            console.log("no movement");
            tryMove(pixel, pixel.x, pixel.y);
        }
        else if (67 <= move_direction <= 83) {
            console.log("moved left");
            tryMove(pixel, pixel.x - 1, pixel.y);
            tryMove(pixel, pixel.x - 1, pixel.y - 1);
        }
        else if (84 <= move_direction <= 100) {
            console.log("moved right");
            tryMove(pixel, pixel.x + 1, pixel.y);
            tryMove(pixel, pixel.x + 1, pixel.y - 1);
        };
    };
};

dragon_breath_function = function(pixel, element) {
    breath_chance = random_integer_function(1, 101)
    direction = random_integer_function(1, 5)
    if (breath_chance <= 49) {
        if (direction == 1) {
            if (!outOfBounds(pixel.x, pixel.y-1)) {
                createPixel(element, pixel.x, pixel.y-1);
                new_breath = pixelMap[pixel.x][pixel.y-1];
                dragon = pixelMap[pixel.x][pixel.y];
                if (element == "fire_dragon_breath") {
                    dragon_UUID = dragon.fire_dragon_UUID;
                    DRAGON_BREATH = FIRE_DRAGON_BREATH_UP;
                };
                new_breath.owner_dragon_UUID = dragon_UUID;
            };
        }
        else if (direction == 2) {
            if (!outOfBounds(pixel.x+1, pixel.y)) {
                createPixel(element, pixel.x+1, pixel.y);
                new_breath = pixelMap[pixel.x+1][pixel.y];
                dragon = pixelMap[pixel.x][pixel.y];
                if (element == "fire_dragon_breath") {
                    dragon_UUID = dragon.fire_dragon_UUID;
                    DRAGON_BREATH = FIRE_DRAGON_BREATH_RIGHT;
                };
                new_breath.owner_dragon_UUID = dragon_UUID;
            };
        }
        else if (direction == 3) {
            if (!outOfBounds(pixel.x, pixel.y+1)) {
                createPixel(element, pixel.x, pixel.y+1);
                new_breath = pixelMap[pixel.x][pixel.y+1];
                dragon = pixelMap[pixel.x][pixel.y];
                if (element == "fire_dragon_breath") {
                    dragon_UUID = dragon.fire_dragon_UUID;
                    DRAGON_BREATH = FIRE_DRAGON_BREATH_DOWN;
                };
                new_breath.owner_dragon_UUID = dragon_UUID;
            };
        }
        else if (direction == 4) {
            if (!outOfBounds(pixel.x-1, pixel.y)) {
                createPixel(element, pixel.x-1, pixel.y);
                new_breath = pixelMap[pixel.x-1][pixel.y];
                dragon = pixelMap[pixel.x][pixel.y];
                if (element == "fire_dragon_breath") {
                    dragon_UUID = dragon.fire_dragon_UUID;
                    DRAGON_BREATH = FIRE_DRAGON_BREATH_LEFT;
                };
                new_breath.owner_dragon_UUID = dragon_UUID;
            };
        };
        new_breath.behavior = DRAGON_BREATH; //not working for some reason
        return 1;
    };
    return 0;
};



// behaviors
FIRE_DRAGON_BREATH_UP = [
    "M1|M1 AND CR:fire_dragon_breath%20|M1",
    "M2 AND CR:fire_dragon_breath%20|XX|M2 AND CR:fire_dragon_breath%20",
    "XX|CR:fire_dragon_breath%20|XX",
];
FIRE_DRAGON_BREATH_RIGHT = [
    "XX|M2 AND CR:fire_dragon_breath%20|M1",
    "CR:fire_dragon_breath%20|XX|M1 AND CR:fire_dragon_breath%20",
    "XX|M2 AND CR:fire_dragon_breath%20|M1",
];
FIRE_DRAGON_BREATH_DOWN = [
    "XX|CR:fire_dragon_breath%20|XX",
    "M2 AND CR:fire_dragon_breath%20|XX|M2 AND CR:fire_dragon_breath%20",
    "M1|M1 AND CR:fire_dragon_breath%20|M1",
];
FIRE_DRAGON_BREATH_LEFT = [
    "M1|M2 AND CR:fire_dragon_breath%20|XX",
    "M1 AND CR:fire_dragon_breath%20|XX|CR:fire_dragon_breath%20",
    "M1|M2 AND CR:fire_dragon_breath%20|XX",
];



// dragon breath elements
elements.fire_dragon_breath = {
    color: ["#ff6b21","#ffa600","#ff4000"],
    properties: {
        timer: 5,
        owner_dragon_UUID: 0,
    },
    tick: function(pixel){ //add heating like proper fire
        pixel.behavior; //not working for some reason
        pixel.timer--;
        if (pixel.timer <= 0) {
            deletePixel(pixel.x, pixel.y); //swap deleting for changing to smoke
        };
    },
    tool: function(pixel) {
        if (pixel.temp >= elements.fire.temp || elements[pixel.element].insulate) {return;}
        pixel.temp += elements.fire.temp/(elements[pixel.element].extinguish ? 240 : 60);
        pixelTempCheck(pixel);
    },
    canPlace: true,
    renderer: renderPresets.HUESHIFT,
    reactions: {
        "water": { elem1: "smoke" },
        "steam": { elem1: "smoke" },
        "carbon_dioxide": { elem1: "smoke" },
        "foam": { elem1: "smoke" },
        "dirty_water": { elem1: "smoke" },
        "salt_water": { elem1: "smoke" },
        "sugar_water": { elem1: "smoke" },
        "seltzer": { elem1: "smoke" },
        "pool_water": { elem1: "smoke" },
        "smoke": { elem2: null, chance:0.1 },
        "oxygen": { elem2: null, chance:0.1 },
    },
    temp:600,
    tempLow:100,
    stateLow: "smoke",
    tempHigh: 7000,
    stateHigh: "plasma",
    state: "gas",
    density: 0.1,
    ignoreAir: true,
    noMix: true,
};



// dragon elements
fire_dragon_UUID_counter = 1;

elements.fire_dragon = {
    color: "#ff0000",
    properties: {
        breath_timer: 10,
        fire_dragon_UUID: 0, //apparently undefined in breath function for some reason
        flying: 1, //possibly not responding to mvoement function for some reason
        walking: 0, //possibly not responding to mvoement function for some reason
        gliding: 0, //not responding to mvoement function for some reason
        climbing: 0, //not responding to mvoement function for some reason
        diving: 0, //not responding to mvoement function for some reason
    },
    tick: function(pixel) {
        if (pixel.fire_dragon_UUID == 0) {
            pixel.fire_dragon_UUID = pixel.fire_dragon_UUID + fire_dragon_UUID_counter;
            fire_dragon_UUID_counter++;
        };
        dragon_movement_function(pixel);
        /*breathed = dragon_breath_function(pixel, "fire_dragon_breath");
        if (breathed == 1) {
            pixel.breath_timer--;
        };
        if (pixel.breath_timer <= 0) {
            for (let i = 0; i <= 165; i++) { //double check max x and y values of map (or don't check whole map)
                for (let j = 0; j <= 79; j++) { //double check max x and y values of map (or don't check whole map)
                    if (!outOfBounds(i, j) && pixelMap[i][j] == "fire_dragon_breath" && pixelMap[i][j].owner_fire_dragon_UUID == pixel.fire_dragon_UUID) {
                        deletePixel(i, j); //swap deleting for changing to smoke
                    };
                };
            };
            pixel.breath_timer = 10;
        }; */
    },
    category: "Dragons",
    breakInto: "meat",
    temp: 55,
    tempHigh: 800,
    stateHigh: "cooked_meat",
	density: 2000,
	hardness: 0.8,
	conduct: 0.01,
	state: "solid",
};