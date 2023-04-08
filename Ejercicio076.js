const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    if (strokes == 1) {
        return names[0];
    } else if (strokes == 2) {
        return names[1];
    } else if (strokes == 3) {
        return names[2];
    } else if (strokes == 4) {
        return names[3];
    } else if (strokes == 5 && par == 4) {
        return names[4];
    } else if (strokes == 5) {
        return names[3];
    } else if (strokes == 6) {
        return names[5];
    } else if (strokes == 7) {
        return names[6];
    } else if (strokes == 9) {
        return names[6];
    }

    return "Change Me";
}