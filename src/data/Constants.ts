import { DateTime } from "luxon";
import cv from "./cv.json";

/**
 * Enumeration for possible university years.
 */
const UniversityYear = {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4,
    FIFTH: 5,
    GRADUATED: 6,
};

Object.freeze(UniversityYear);

/**
 * Determine the current university year.
 *
 * @returns {string} a UniversityYear
 */
const getUniversityYear = (universityId: string): number => {
    const { education } = cv;
    const uoft = education.find(({ id }) => id === universityId);

    if (uoft === undefined) {
        throw new Error("Could not find uoft in CV!");
    }

    const sd = DateTime.fromISO("2025-08-18");
    const ed = DateTime.fromISO("2027-04-30");

    const now = DateTime.now();

    if (now > ed) {
        return UniversityYear.GRADUATED;
    } else {
        const diff = now.diff(sd, "years").toObject().years || 0;
        const years = Math.ceil(diff);

        switch (years) {
            case 1:
                return UniversityYear.FIRST;
            case 2:
                return UniversityYear.SECOND;
            default:
                return UniversityYear.GRADUATED;
        }
    }
};

const universityYearToString = (universityYear: number): string => {
    switch (universityYear) {
        case UniversityYear.FIRST:
            return "first-year";
        case UniversityYear.SECOND:
            return "second-year";
        case UniversityYear.THIRD:
            return "third-year";
        case UniversityYear.FOURTH:
            return "fourth-year";
        case UniversityYear.FIFTH:
            return "fifth-year";
        case UniversityYear.GRADUATED:
            return 'graduated'
        default:
            throw new Error(
                `Cannot convert universityYear ${universityYear} to string!`
            );
    }
};

export const UNIVERSITY_YEAR = getUniversityYear("gatech");
export const UNIVERSITY_YEAR_AS_STRING = universityYearToString(
    UNIVERSITY_YEAR
);
