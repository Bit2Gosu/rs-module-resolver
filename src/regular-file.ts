
import {File, FileType} from "./file";

export class RegularFile extends File {

    constructor(name: string) {
        super(FileType.REGULAR_FILE, name);
    }
}