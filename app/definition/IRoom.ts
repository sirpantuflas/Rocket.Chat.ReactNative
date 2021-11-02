import { IRocketChatRecord } from './IRocketChatRecord';

export enum RoomType {
	GROUP = 'p',
	DIRECT = 'd',
	CHANNEL = 'c',
	OMNICHANNEL = 'l'
}

export interface IRoom extends IRocketChatRecord {
	rid: string;
	t: RoomType;
	name: string;
	fname: string;
	prid?: string;
	tmid?: string;
	topic?: string;
	teamMain?: boolean;
	teamId?: string;
	encrypted?: boolean;
	visitor?: boolean;
}
