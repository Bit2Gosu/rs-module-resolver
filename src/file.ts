export enum FileType {
	DIRECTORY, REGULAR_FILE
}

export abstract class File {

	constructor(public fileType: FileType, public name: string, public children: File[]) {

	}

	addChild(child: File): void {
		this.children.push(child);
	}

	getAncestors(): File[] {

		let result = [];

		this.children.forEach(child => {
			result.push(child);
			result.concat(child.getAncestors());
		});

		return result;
	}
}
