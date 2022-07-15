import React from 'react'
import {
FacebookShareButton,
FacebookIcon,
PinterestShareButton,
PinterestIcon,
RedditShareButton,
RedditIcon,
WhatsappShareButton,
WhatsappIcon,
LinkedinShareButton,
LinkedinIcon,
} from 'next-share';

export default function Text() {
return (
	<div>
	<h1>Social Share - GeeksforGeeks</h1>
	<FacebookShareButton
        url={'https://insidr.vercel.app/'}
        quote={'next-share is a social share qwertyhgdssxcvgtredsx buttons for your next React apps.'}
        hashtag={'#nextshare'}
        >
        <FacebookIcon size={32} round />
    </FacebookShareButton>
	<PinterestShareButton
		// {/* Url you want to share */}
		url={'https://insidr.vercel.app/'} >
		<PinterestIcon size={32} round />
	</PinterestShareButton>
	<RedditShareButton
		// {/* Url you want to share */}
		url={'https://insidr.vercel.app/'} >
		<RedditIcon size={32} round />
	</RedditShareButton>
	<WhatsappShareButton
		// {/* Url you want to share */}
        title={"next-share is a social share buttons for your next React apps."}
		url={'https://insidr.vercel.app/'} >
		<WhatsappIcon size={32} round />
	</WhatsappShareButton>
	<LinkedinShareButton
		// {/* Url you want to share */}
        summary='ewsrtyuikjhgfdsdfxghj'
        title='dtyuikjl,mnbvct'
		url={'https://insidr.vercel.app/'} >
		<LinkedinIcon size={32} round />
	</LinkedinShareButton>
	</div>
)
}