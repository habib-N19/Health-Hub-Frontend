export type TUser = {
	name: string;
	email: string;
	password: string;
};
export type TAuthState = {
	user: null | TUser;
	token: null | string;
};
