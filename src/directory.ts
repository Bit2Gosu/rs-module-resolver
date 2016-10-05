import {File, FileType} from "./file";

export class Directory extends File {

	constructor(public name: string) {
		super(FileType.DIRECTORY, name, []);
	}
}