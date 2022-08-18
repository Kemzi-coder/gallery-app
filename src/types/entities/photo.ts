interface Photo {
	id: string;
	urls: {small: string | null; regular: string | null};
	user: {profile_image: {medium: string | null}; name: string};
	description: string;
}

export default Photo;
