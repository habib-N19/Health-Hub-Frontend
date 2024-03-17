import axios from "axios";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
	`https://source.unsplash.com/${id}/${width}x${height}`;

const fetchRandomPhotos = async (query: string, count: number) => {
	try {
		const response = await axios.get(
			`https://api.unsplash.com/photos/random?query=${query}&count=${count}&client_id=z_hyVjLrt5pu4RxwOrTiTFL2SPUhH1PytFAAK41LDsg`
		);
		const unsplashPhotos = response.data;

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const photos = unsplashPhotos.map((photo: any) => ({
			src: unsplashLink(photo.id, photo.width, photo.height),
			width: photo.width,
			height: photo.height,
			srcSet: breakpoints.map((breakpoint: number) => {
				const height = Math.round((photo.height / photo.width) * breakpoint);
				return {
					src: unsplashLink(photo.id, breakpoint, height),
					width: breakpoint,
					height,
				};
			}),
		}));

		return photos;
	} catch (error) {
		console.error("Error fetching random photos:", error);
		return [];
	}
};

const query =
	"community helping, Post-Disaster,Community Health and Medical Supply"; // Add your desired keywords here
const count = 10; // Number of random photos to fetch

const photos = fetchRandomPhotos(query, count);

export default photos;
