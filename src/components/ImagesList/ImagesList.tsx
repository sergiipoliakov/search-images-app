import React from "react";

import {
	ImageList,
	ImageListItem,
	ImageListItemBar,
	IconButton,
} from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";

type Urls = {
	raw?: string;
	full?: string;
	regular?: string;
	small?: string;
	thumb?: string;
};
type Tags = {
	title?: string;
	type?: string;
};

type image = {
	id: string;
	urls: Urls;
	alt_description: string;
	tags: Tags[];
};
interface IProps {
	images: image[];
}

export const ImagesList: React.FC<IProps> = ({ images }) => {
	return (
		<>
			<ImageList variant="masonry" cols={3} gap={8}>
				{images.map((item) => (
					<ImageListItem key={item?.id}>
						<img
							src={item?.urls?.thumb}
							srcSet={`${item?.urls?.regular} 2x`}
							alt={item?.alt_description}
							loading="lazy"
						/>
						<ImageListItemBar
							title={item?.tags[0]?.title}
							subtitle={item?.alt_description}
							actionIcon={
								<IconButton
									sx={{ color: "rgba(255, 255, 255, 0.54)" }}
									aria-label={`info about ${item?.tags[0]?.title}`}
								>
									<InfoIcon />
								</IconButton>
							}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</>
	);
};
