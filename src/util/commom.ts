import bugIcon from "../images/bug-type-icon.webp";
import darkIcon from "../images/dark-type-icon.webp";
import dragonIcon from "../images/dragon-type-icon.webp";
import electricIcon from "../images/electric-type-icon.webp";
import fairyIcon from "../images/fairy-type-icon.webp";
import fightingIcon from "../images/fighting-type-icon.webp";
import fireIcon from "../images/fire-type-icon.webp";
import flyingIcon from "../images/flying-type-icon.webp";
import ghostIcon from "../images/ghost-type-icon.webp";
import grassIcon from "../images/grass-type-icon.webp";
import groundIcon from "../images/ground-type-icon.webp";
import iceIcon from "../images/ice-type-icon.webp";
import normalIcon from "../images/normal-type-icon.webp";
import poisonIcon from "../images/poison-type-icon.webp";
import psychicIcon from "../images/psychic-type-icon.webp";
import rockIcon from "../images/rock-type-icon.webp";
import steelIcon from "../images/steel-type-icon.webp";
import waterIcon from "../images/water-type-icon.webp";

interface IOptions {
    elements: NodeListOf<HTMLElement>;
    markedClass: string;
    zone: number[];
}

export function getTypeColor(typeName: string): string {
    switch (typeName) {
        case "normal":
            return "rgba(168, 168, 120, 0.6)";
        case "fighting":
            return "rgba(192, 48, 40, 0.6)";
        case "flying":
            return "rgba(168, 144, 240, 0.6)";
        case "poison":
            return "rgba(160, 64, 160, 0.6)";
        case "ground":
            return "rgba(224, 192, 104, 0.6)";
        case "rock":
            return "rgba(184, 160, 56, 0.6)";
        case "bug":
            return "rgba(168, 184, 32, 0.6)";
        case "ghost":
            return "rgba(112, 88, 152, 0.6)";
        case "steel":
            return "rgba(184, 184, 208, 0.6)";
        case "fire":
            return "rgba(240, 128, 48, 0.6)";
        case "water":
            return "rgba(104, 144, 240, 0.6)";
        case "grass":
            return "rgba(120, 200, 80, 0.6)";
        case "electric":
            return "rgba(248, 208, 48, 0.6)";
        case "psychic":
            return "rgba(248, 88, 136, 0.6)";
        case "ice":
            return "rgba(152, 216, 216, 0.6)";
        case "dragon":
            return "rgba(112, 56, 248, 0.6)";
        case "dark":
            return "rgba(112, 88, 72, 0.6)";
        case "fairy":
            return "rgba(238, 153, 172, 0.6)";
        default:
            return "rgba(104, 160, 144, 0.6)";
    }
}

export function getTypeIconPath(typeName: string): string {
    switch (typeName) {
        case "normal":
            return normalIcon;
        case "fighting":
            return fightingIcon;
        case "flying":
            return flyingIcon;
        case "poison":
            return poisonIcon;
        case "ground":
            return groundIcon;
        case "rock":
            return rockIcon;
        case "bug":
            return bugIcon;
        case "ghost":
            return ghostIcon;
        case "steel":
            return steelIcon;
        case "fire":
            return fireIcon;
        case "water":
            return waterIcon;
        case "grass":
            return grassIcon;
        case "electric":
            return electricIcon;
        case "psychic":
            return psychicIcon;
        case "ice":
            return iceIcon;
        case "dragon":
            return dragonIcon;
        case "dark":
            return darkIcon;
        case "fairy":
            return fairyIcon;
        default:
            return "";
    }
}

export function changeClassOfElementsInArea(options: IOptions): void {
    const viewportHeight = document.documentElement.clientHeight;

    for (let i = options.elements.length; i--; ) {
        const element = options.elements[i];
        const position = element.getBoundingClientRect();
        const topPerc = (position.top / viewportHeight) * 100;
        const bottomPerc = (position.bottom / viewportHeight) * 100;
        const middle = (topPerc + bottomPerc) / 2;
        const inViewport =
            middle > options.zone[1] && middle < 100 - options.zone[1];

        element.classList.toggle(options.markedClass, inViewport);
    }
}
