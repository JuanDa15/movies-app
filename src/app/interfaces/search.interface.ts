import { Movie } from "./now-playing.interface";

export interface Search {
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}