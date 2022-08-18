export interface AppAction<T, P> {
	readonly type: T;
	readonly payload: P;
}
